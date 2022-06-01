// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlv0JFoQJUjj8sQpy-2zKczzjqOTVH2ew",
  authDomain: "culture-toi.firebaseapp.com",
  projectId: "culture-toi",
  storageBucket: "culture-toi.appspot.com",
  messagingSenderId: "799694991625",
  appId: "1:799694991625:web:39a286d8951d5d03d463d8",
  measurementId: "G-HDG6NN1E20"
};

// Initialize Firebase
const s = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let app;
if(firebase.getApps.length == 0){
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

const firestore = firebase.firestore()

export { auth , firestore};
