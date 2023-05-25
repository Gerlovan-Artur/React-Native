import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2un-Odp8Zm_3X6PhDizWSGjWYv6qxtmA",
  authDomain: "projectherlovan.firebaseapp.com",
  projectId: "projectherlovan",
  storageBucket: "projectherlovan.appspot.com",
  messagingSenderId: "989687020429",
  appId: "1:989687020429:web:92a854b16b06fa5ae05bc4",
  measurementId: "G-VTGBSCTZH9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;