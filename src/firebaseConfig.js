// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCipFd_1YruKEj8NcmP-KfzRDGawnklGto',
  authDomain: 'platepal-project.firebaseapp.com',
  projectId: 'platepal-project',
  storageBucket: 'platepal-project.appspot.com',
  messagingSenderId: '384299556676',
  appId: '1:384299556676:web:96a86dc89ebe9e8fc34111',
  measurementId: 'G-TSYLHE19T9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
