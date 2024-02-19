// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyByQTl02B6zXZMiKU5hyUj8vrheN3cvAPc",
	authDomain: "photofolio-cn-b94c8.firebaseapp.com",
	projectId: "photofolio-cn-b94c8",
	storageBucket: "photofolio-cn-b94c8.appspot.com",
	messagingSenderId: "965152145844",
	appId: "1:965152145844:web:25499c366d062362cef2e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
