import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA8ejQQ6YGs-8zrOpsAn5oZ088nqhGds4",
  authDomain: "nisosurvey-c32e4.firebaseapp.com",
  projectId: "nisosurvey-c32e4",
  storageBucket: "nisosurvey-c32e4.appspot.com",
  messagingSenderId: "792936982209",
  appId: "1:792936982209:web:0aabf124adde9ea3695640"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);