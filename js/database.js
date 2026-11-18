// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, child, set, get, update, remove } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCb8S9cTRe1Qppb2r0rqz3xA5vIL1wZrtI",
    authDomain: "ta-media.firebaseapp.com",
    databaseURL: "https://ta-media-default-rtdb.firebaseio.com",
    projectId: "ta-media",
    storageBucket: "ta-media.appspot.com",
    messagingSenderId: "20586336998",
    appId: "1:20586336998:web:f73665ad8ddf9e183ce127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);