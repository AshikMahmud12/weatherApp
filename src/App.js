import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Custom Static Js
import "./static/js/custom";

// Import Required Component
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import CheckIn from "./pages/CheckIn/CheckIn";
import FindPerson from "./pages/FindPerson/FindPerson";
import Disaster from "./pages/Disaster/Disaster";
import HelpGuide from "./pages/HelpGuide/HelpGuide";
import NotFound from "./pages/Error/NotFound";
import CheckInHelpGuide from "./pages/HelpGuide/CheckInHelpGuide";
import FindPersonHelpGuide from "./pages/HelpGuide/FindPersonHelpGuide";
import DisasterHelpGuide from "./pages/HelpGuide/DisasterHelpGuide";

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/check-in" component={CheckIn} />
                <Route exact path="/find-person" component={FindPerson} />
                <Route exact path="/disaster" component={Disaster} />

                {/* Help Guide Routing */}
                <Route exact path="/help-guide" component={HelpGuide} />
                <Route
                    exact
                    path="/help-guide/check-in-guide"
                    component={CheckInHelpGuide}
                />
                <Route
                    exact
                    path="/help-guide/find-person-guide"
                    component={FindPersonHelpGuide}
                />
                <Route
                    exact
                    path="/help-guide/disaster-guide"
                    component={DisasterHelpGuide}
                />

                {/* Not Found Component */}
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;
