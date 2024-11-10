import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcEIBgoAdMeW-0t-eDhcNAMYS91RkGsV4",
    authDomain: "fir-auth-react-9f891.firebaseapp.com",
    projectId: "fir-auth-react-9f891",
    storageBucket: "fir-auth-react-9f891.firebasestorage.app",
    messagingSenderId: "413902901591",
    appId: "1:413902901591:web:557edc932b04aff62bee12"
};

export const app = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()