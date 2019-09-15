import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBVoLZPSWZZYJ3ZdvtqEMsZsZCeoyjSjZ0",
        authDomain: "crwn-db-4de43.firebaseapp.com",
        databaseURL: "https://crwn-db-4de43.firebaseio.com",
        projectId: "crwn-db-4de43",
        storageBucket: "",
        messagingSenderId: "260205382288",
        appId: "1:260205382288:web:1a8a39f4eefe95a8696615"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

