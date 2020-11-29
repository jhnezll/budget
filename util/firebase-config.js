import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUL7DfnZq2cdKGdm53UKCoZ60SPF8Owt4",
    authDomain: "budget-d9e18.firebaseapp.com",
    databaseURL: "https://budget-d9e18.firebaseio.com",
    projectId: "budget-d9e18",
    storageBucket: "budget-d9e18.appspot.com",
    messagingSenderId: "594927204974",
    appId: "1:594927204974:web:990b4b4b333a781c40c47f",
    measurementId: "G-1Z2GHTCXQE"
};
try {
    if (typeof window !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics()
    }
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const fb = firebase
export default fb;