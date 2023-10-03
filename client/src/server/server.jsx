import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBHR7T9nZWP4A3Axe093oBjvsMLcbs-HUc",
    authDomain: "modernpedia.firebaseapp.com",
    projectId: "modernpedia",
    storageBucket: "modernpedia.appspot.com",
    messagingSenderId: "1064268328511",
    appId: "1:1064268328511:web:7126343d27f9a637c2928a",
    measurementId: "G-T1T9R7MG2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getFirestore(app);
