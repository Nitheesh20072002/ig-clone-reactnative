// Import the functions you need from the SDKs you need
// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqFqRqTwuAXstIINcOVRhC0dbjDr_Ri58",
    authDomain: "ig-clone-react-native-1e2b3.firebaseapp.com",
    projectId: "ig-clone-react-native-1e2b3",
    storageBucket: "ig-clone-react-native-1e2b3.appspot.com",
    messagingSenderId: "206978734783",
    appId: "1:206978734783:web:a93c6ce86e86ca0f9d040a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app()

const db=firebase.firestore()
export {firebase,db}