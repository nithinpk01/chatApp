import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPXoowi-AJ0jPihzEEZmJngzA5onPKoYM",
  authDomain: "chatapp-e17d1.firebaseapp.com",
  projectId: "chatapp-e17d1",
  storageBucket: "chatapp-e17d1.appspot.com",
  messagingSenderId: "278667597993",
  appId: "1:278667597993:web:36495a0400744380ce31b8"
};

// Initialize Firebase
export  const firebase = initializeApp(firebaseConfig);
export  const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();