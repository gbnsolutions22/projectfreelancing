import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDDQ0XzM7UZ1LUBGJ83r6zlYCvSRkE6sIY",
  authDomain: "project-freelancing.firebaseapp.com",
  databaseURL: "https://project-freelancing-default-rtdb.firebaseio.com",
  projectId: "project-freelancing",
  storageBucket: "project-freelancing.appspot.com",
  messagingSenderId: "837601807809",
  appId: "1:837601807809:web:d5550b98a1fae2d2177340",
  measurementId: "G-1L7GEDBJ0B"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);
