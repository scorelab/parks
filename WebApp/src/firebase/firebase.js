import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGX3ADPVPiUQPjhPbKzRNtHNqLAv65xXU",
  authDomain: "dwc-app-e1184.firebaseapp.com",
  databaseURL: "https://dwc-app-e1184.firebaseio.com",
  projectId: "dwc-app-e1184",
  storageBucket: "dwc-app-e1184.appspot.com",
  messagingSenderId: "709473333752",
  appId: "1:709473333752:web:45ea4cf5cc13eacb92a60d",
  measurementId: "G-GMD8ZG2GSJ"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };