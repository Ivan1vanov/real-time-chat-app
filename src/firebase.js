import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBE-oddrp8jINfUjVpmRA7tE5B_t6XU3uc",
    authDomain: "chat-58269.firebaseapp.com",
    projectId: "chat-58269",
    storageBucket: "chat-58269.appspot.com",
    messagingSenderId: "729156828292",
    appId: "1:729156828292:web:1227a5e2bd4ae6f029d6d1",
    measurementId: "G-YZH25V0G19"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }