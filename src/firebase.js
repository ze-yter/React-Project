import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXhQfzANg1lz1h2m-YaGm0BX4lAIbjUGg",
  authDomain: "bubblestore-3c597.firebaseapp.com",
  databaseURL: "https://bubblestore-3c597-default-rtdb.firebaseio.com/",
  projectId: "bubblestore-3c597",
  storageBucket: "bubblestore-3c597.appspot.com",
  messagingSenderId: "505703000242",
  appId: "1:505703000242:web:76e0865621c2b3a29781ab"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);