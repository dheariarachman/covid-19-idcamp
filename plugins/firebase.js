import firebase from 'firebase'

let app = null

// Initialize firebase config
app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export const fireDb = app.firestore();
