// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr8ArcLQH0aCCq-UUrGqQYLClzqxu78nw",
  authDomain: "family-planner-d3922.firebaseapp.com",
  projectId: "family-planner-d3922",
  storageBucket: "family-planner-d3922.appspot.com",
  messagingSenderId: "252728231222",
  appId: "1:252728231222:web:73317d906aa968cc285f97",
  measurementId: "G-57XJ2VH1RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);