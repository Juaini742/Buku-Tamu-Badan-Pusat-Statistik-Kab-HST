import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxnenwMF9lJNqownc4jgsWnYZjak0tE7w",
  authDomain: "buku-tamu-1087d.firebaseapp.com",
  projectId: "buku-tamu-1087d",
  storageBucket: "buku-tamu-1087d.appspot.com",
  messagingSenderId: "108051766682",
  appId: "1:108051766682:web:ea4b29bb3d4d12cbbeee23",
  measurementId: "G-PWXRTD7Q8W",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
