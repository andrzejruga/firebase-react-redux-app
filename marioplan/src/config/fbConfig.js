import firebase from 'firebase/app';
// we import just the base features from fb library
// if we imported whole library (no /app) we would get warning in console
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD_-7tCtsdsmpNVLL9S9dMVIGEpOkSJTt8",
    authDomain: "andy-marioplan.firebaseapp.com",
    databaseURL: "https://andy-marioplan.firebaseio.com",
    projectId: "andy-marioplan",
    storageBucket: "andy-marioplan.appspot.com",
    messagingSenderId: "104285219433"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true }); // update in fb library, so the console doesn't complain

export default firebase;