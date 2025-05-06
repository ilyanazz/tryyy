// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore, doc, getDoc, updateDoc, collection, query, orderBy, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQRlEQ2L7A9v7MS2GIaHZOW9wuYXDm7QE",
  authDomain: "tryy-b74cd.firebaseapp.com",
  projectId: "tryy-b74cd",
  storageBucket: "tryy-b74cd.firebasestorage.app",
  messagingSenderId: "593722631127",
  appId: "1:593722631127:web:ca15d9425f7fbdeb732192"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, updateDoc, collection, query, orderBy, onSnapshot };
