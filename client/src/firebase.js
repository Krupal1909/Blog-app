// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDsouWcRaJp6xz7Lqo1tJyENsmU4fA-tCI",
  authDomain: "mern-blog-65ea2.firebaseapp.com",
  projectId: "mern-blog-65ea2",
  storageBucket: "mern-blog-65ea2.appspot.com",
  messagingSenderId: "230308297882",
  appId: "1:230308297882:web:44a082b1b28272d902b323",
  measurementId: "G-SZF9FWYSZX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
