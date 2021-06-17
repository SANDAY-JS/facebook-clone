import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSb6gIhdch9mtCPXA4zNliHeXu-1ujBGo",
  authDomain: "facebook-clone-f3dff.firebaseapp.com",
  projectId: "facebook-clone-f3dff",
  storageBucket: "facebook-clone-f3dff.appspot.com",
  messagingSenderId: "229442337362",
  appId: "1:229442337362:web:6e200a88baebdc8708fd8b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
