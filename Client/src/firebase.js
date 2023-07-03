// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDQ0XzM7UZ1LUBGJ83r6zlYCvSRkE6sIY",
  authDomain: "project-freelancing.firebaseapp.com",
  databaseURL: "https://project-freelancing-default-rtdb.firebaseio.com",
  projectId: "project-freelancing",
  storageBucket: "project-freelancing.appspot.com",
  messagingSenderId: "837601807809",
  appId: "1:837601807809:web:d5550b98a1fae2d2177340",
  measurementId: "G-1L7GEDBJ0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
