import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyD16jv2TPOhZCcV9qg-NO4Fkr7xxHab5Uw",
    authDomain: "code-poetry-c58ea.firebaseapp.com",
    databaseURL: "https://code-poetry-c58ea-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "code-poetry-c58ea",
    storageBucket: "code-poetry-c58ea.appspot.com",
    messagingSenderId: "652414686678",
    appId: "1:652414686678:web:bd48ab12ab492566d24077"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}