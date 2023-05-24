import React, { useEffect, useState } from "react";
import { db, app } from "../../firebase";
import { collection, query, where } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
// import { db } from "./firebase";
// import { uid } from "uid";
// import firebase from "firebase/app";
// import "firebase/auth";

import { set, ref, onValue, remove, update } from "firebase/database";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { signInWithCredential } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userData } from "../../services/modules/appBootstarp/bootstrap.slice";
const Auth = (props) => {
  const { children } = props;
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const auth = getAuth();
  const accessToken = localStorage.getItem("AT");

    const readData = () => {
      onValue(ref(db, "Users"), (snapshot) => {
        // Access the data from the snapshot
        const data = snapshot.val();
        // Process the data as needed
        console.log("data", data);
      });
    };

  //   const fetchUserId = async (userId) => {
  // 	try {
  // 	  const userRef = ref(db, `Users/${userId}`);
  // 	  const snapshot = await get(userRef);

  // 	  if (snapshot.exists()) {
  // 		const userData = snapshot.val();
  // 		// Do something with the user data
  // 		console.log(userData);
  // 	  } else {
  // 		// User does not exist
  // 		console.log('User not found');
  // 	  }
  // 	} catch (error) {
  // 	  console.error('Error fetching user:', error);
  // 	}
  //   };

  //   const validateAccessToken = async () => {
  //     const auth = getAuth();
  //     const accessToken = localStorage.getItem("AT");

  //     const userCredential = await signInWithCustomToken(auth, accessToken);
  //     // The token is valid, return the user credential object
  //     //   return userCredential;
  //     console.log(userCredential);
  //   };

  useEffect(() => {
  

    const authenticateToken = (accessToken) => {
      const credential = GoogleAuthProvider.credential(auth, accessToken);
      console.log("credntials", credential);

      dispatch(userData({ data: credential.OAuthCredential }));
    };

    authenticateToken();
    readData()
  }, [auth, accessToken]);

  return children;
};

export default Auth;

// // CREATE
// const createData = (data) => {
// 	const newKey = push(ref(database, 'yourDataNode')).key;
// 	const updates = {};
// 	updates[`yourDataNode/${newKey}`] = data;
// 	update(ref(database), updates);
//   };

//   // READ
//   const readData = () => {
// 	onValue(ref(database, 'yourDataNode'), (snapshot) => {
// 	  // Access the data from the snapshot
// 	  const data = snapshot.val();
// 	  // Process the data as needed
// 	});
//   };

//   // UPDATE
//   const updateData = (key, newData) => {
// 	const updates = {};
// 	updates[`yourDataNode/${key}`] = newData;
// 	update(ref(database), updates);
//   };

//   // DELETE
//   const deleteData = (key) => {
// 	remove(ref(database, `yourDataNode/${key}`));
//   };
