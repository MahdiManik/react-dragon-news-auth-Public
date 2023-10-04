// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI3eHeICzLzOUSm66Bs6_UJ5LOPyKiEzk",
  authDomain: "dragon-news-with-auth.firebaseapp.com",
  projectId: "dragon-news-with-auth",
  storageBucket: "dragon-news-with-auth.appspot.com",
  messagingSenderId: "586257577549",
  appId: "1:586257577549:web:b62314585341df12f2ce04",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
