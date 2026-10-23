
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAh8IvqK9ONjfs_4o08ip0G8btToUToyYI",
  authDomain: "gold-clicker-4df79.firebaseapp.com",
  databaseURL: "https://gold-clicker-4df79-default-rtdb.firebaseio.com",
  projectId: "gold-clicker-4df79",
  storageBucket: "gold-clicker-4df79.firebasestorage.app",
  messagingSenderId: "888295339203",
  appId: "1:888295339203:web:0b9ec87fef1c9368e51e76",
  measurementId: "G-3Y22ET512B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
