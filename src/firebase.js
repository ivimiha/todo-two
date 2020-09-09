import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDb0-F6R9HBn5Lf4MQmhhlIyGwAaBmH6n8",
  authDomain: "todo-two-2bb23.firebaseapp.com",
  databaseURL: "https://todo-two-2bb23.firebaseio.com",
  projectId: "todo-two-2bb23",
  storageBucket: "todo-two-2bb23.appspot.com",
  messagingSenderId: "399180960229",
  appId: "1:399180960229:web:90a06c5bd74e7960ab9f0c",
  measurementId: "G-2B7YJBF8RL",
});

const db = firebaseApp.firestore();

export default db;
