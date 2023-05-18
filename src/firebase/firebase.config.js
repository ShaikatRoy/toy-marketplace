// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVVyg_pnAQ8BVtmd8d1TroQa6sIYH4Nds",
  authDomain: "figure-mania-project.firebaseapp.com",
  projectId: "figure-mania-project",
  storageBucket: "figure-mania-project.appspot.com",
  messagingSenderId: "1052512123304",
  appId: "1:1052512123304:web:1913a9feb8c6369960c59d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;