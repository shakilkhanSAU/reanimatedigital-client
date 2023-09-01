import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyCq6OLD4RVJXVQLezfpvfy2wRFggjTW7bI",
    authDomain: "reanimate-digital.firebaseapp.com",
    projectId: "reanimate-digital",
    storageBucket: "reanimate-digital.appspot.com",
    messagingSenderId: "251617462432",
    appId: "1:251617462432:web:d0717faefc8809fee3e1c5",
    measurementId: "G-T4JP3GEQN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


initializeApp(firebaseConfig);
export default app;
