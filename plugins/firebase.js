import firebase from 'firebase'

let app = null

var firebaseConfig = {
  apiKey: "AIzaSyC_VkdWgzHEpur_4m8OvRSR_HA8EJkya0E",
  authDomain: "covid-19-idcamp.firebaseapp.com",
  databaseURL: "https://covid-19-idcamp.firebaseio.com",
  projectId: "covid-19-idcamp",
  storageBucket: "covid-19-idcamp.appspot.com",
  messagingSenderId: "158205077953",
  appId: "1:158205077953:web:ce03d56fd8e487766fe740",
  measurementId: "G-C4RSNDCMKK"
};
// Initialize firebase config
app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export const fireDb = app.firestore();
