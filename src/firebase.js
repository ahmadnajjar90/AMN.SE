import firebase from 'firebase'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyAV44nNii_hqH2sLsYVwdydWQGTGrzY708",
authDomain: "amn-se-cbe0f.firebaseapp.com",
projectId: "amn-se-cbe0f",
storageBucket: "amn-se-cbe0f.appspot.com",
messagingSenderId: "868564351508",
appId: "1:868564351508:web:529d870719800e40648501",
measurementId: "G-N1B5N0WNTY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();