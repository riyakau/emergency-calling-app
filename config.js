import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAUsjSVlRzTb5Z2qmM7kWkgRFBW3nDrh2Q",
    authDomain: "emergency-calling.firebaseapp.com",
    projectId: "emergency-calling",
    storageBucket: "emergency-calling.appspot.com",
    messagingSenderId: "1027484182424",
    appId: "1:1027484182424:web:809cc8e63e8190b2be6ded"
  };

  firebase.initializeApp(firebaseConfig)


export default firebase.firestore();