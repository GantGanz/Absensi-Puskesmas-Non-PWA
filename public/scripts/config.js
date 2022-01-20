// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6hyl-k9rVuAs8JYD8KUtcVXsMwqZTQI0",
    authDomain: "presensi-puskesmas-kasiman.firebaseapp.com",
    projectId: "presensi-puskesmas-kasiman",
    storageBucket: "presensi-puskesmas-kasiman.appspot.com",
    messagingSenderId: "53532156353",
    appId: "1:53532156353:web:3c0ff14b0db2530e6d0f40",
    measurementId: "G-ZFS54T9KY7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// make storage and firestore references
const db = firebase.firestore();
const storage = firebase.storage();
