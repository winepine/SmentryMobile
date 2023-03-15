import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq7RM1bbIoVjKIe8JIAtrIlmDpbcccqcU",
  authDomain: "smentry-eb556.firebaseapp.com",
  projectId: "smentry-eb556",
  storageBucket: "smentry-eb556.appspot.com",
  messagingSenderId: "1009468391663",
  appId: "1:1009468391663:web:bb54ffef31acc87b051b1a",
  measurementId: "G-MJWZ0YQVRH",
};

export const app = initializeApp(firebaseConfig);
