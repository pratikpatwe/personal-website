import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsv4B3mSsUeGZ068EC1CrCP-Tsci43c1M",
  authDomain: "personal-website-842c1.firebaseapp.com",
  projectId: "personal-website-842c1",
  storageBucket: "personal-website-842c1.firebasestorage.app",
  messagingSenderId: "1053302177295",
  appId: "1:1053302177295:web:b9a77a1707fbd627782d7a",
  measurementId: "G-5RNM43QT80",
  databaseURL: "https://personal-website-842c1-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

