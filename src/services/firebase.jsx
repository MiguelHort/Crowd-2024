import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyByTvXqXnLCFnx7-MVEL9CNbumaHCVbVxw",
    authDomain: "crowd-760e0.firebaseapp.com",
    projectId: "crowd-760e0",
    storageBucket: "crowd-760e0.appspot.com",
    messagingSenderId: "928124865009",
    appId: "1:928124865009:web:7fb151167d3d46fca91c50",
    measurementId: "G-T5KEELS2ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Firebase() {
    // Component code goes here
}
