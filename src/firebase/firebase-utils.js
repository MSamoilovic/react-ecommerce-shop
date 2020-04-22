import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYExJv2Wxaw_xHV3jJLItetdJCyEPmtGs",
  authDomain: "react-ecomm-db-da95c.firebaseapp.com",
  databaseURL: "https://react-ecomm-db-da95c.firebaseio.com",
  projectId: "react-ecomm-db-da95c",
  storageBucket: "react-ecomm-db-da95c.appspot.com",
  messagingSenderId: "64756625031",
  appId: "1:64756625031:web:c401cd64183aa930fcd222",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Cuvanje usera u Firestore
export const getUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //Kreira dokumentRef na usera pod id koji je u linku
  const userRefference = firestore.doc(`users/${userAuth.uid}`);
  //Uzima snapshot da proveri da li dokument postoji
  const snapShot = await userRefference.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRefference.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error occured", err.message);
    }
  } else {
    const userData = snapShot.data();
    console.log(userData);
  }

  return userRefference;
};

//Kreiranje kolekcije i upisavanje dokumenata
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //Kreira queryRefference objekat na tu kolekciju, bez obzira sto nema data u njoj
  const collectionRef = firestore.collection(collectionKey);
  //Kreira se batch, za visestruki upis u bazu
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export default firebase;
