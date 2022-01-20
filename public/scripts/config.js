// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3vh1e3YvNmz4hvy1StIMvo_AgvFXwQek",
    authDomain: "presensi-puskesmas-non-pwa.firebaseapp.com",
    projectId: "presensi-puskesmas-non-pwa",
    storageBucket: "presensi-puskesmas-non-pwa.appspot.com",
    messagingSenderId: "616218540158",
    appId: "1:616218540158:web:b11a0cf2402d5ff96d002f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// make storage and firestore references
const db = firebase.firestore();
const storage = firebase.storage();
