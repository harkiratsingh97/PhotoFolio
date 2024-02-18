// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC49I3H6Y7iq3BW8cc2WP_4OWAuN3MwIJ0",
	authDomain: "blogging-app-cn-260dc.firebaseapp.com",
	projectId: "blogging-app-cn-260dc",
	storageBucket: "blogging-app-cn-260dc.appspot.com",
	messagingSenderId: "755481221615",
	appId: "1:755481221615:web:25b5304de2e3f1cc127e1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
