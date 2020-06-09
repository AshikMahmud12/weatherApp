import firebase from "firebase";
import "firebase/firebase-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAINytA3gIB1stAPhEPs_RCcMzDB4VHLIQ",
    authDomain: "weather-app-1e2cc.firebaseapp.com",
    databaseURL: "https://weather-app-1e2cc.firebaseio.com",
    projectId: "weather-app-1e2cc",
    storageBucket: "weather-app-1e2cc.appspot.com",
    messagingSenderId: "436404660912",
    appId: "1:436404660912:web:a1809113e729e7b9d82975",
    measurementId: "G-LKZ6H3V0XZ",
};

const app = firebase.initializeApp(firebaseConfig);

if (app) {
    console.log("Firebase Connected");
}

export const db = firebase.firestore();
