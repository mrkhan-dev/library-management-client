// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAzt3z_YNFLnZT6J6Y7NO1tr42ivrGaFA",
  authDomain: "shelf-master-f5449.firebaseapp.com",
  projectId: "shelf-master-f5449",
  storageBucket: "shelf-master-f5449.appspot.com",
  messagingSenderId: "470395195444",
  appId: "1:470395195444:web:2df12059fa72263655fa61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
