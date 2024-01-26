// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebaseAdmin from "firebase-admin";
import { getApp } from "firebase-admin/app";
import serviceAccount from "./anonymous-firebase.json";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STOREAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const admin =
  getApp() ||
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL:
      "https://anonymous-complaints-default-rtdb.europe-west1.firebasedatabase.app",
  });
// export const db = getFirestore(app);

const db = admin.firestore();
export { admin, db };
// const analytics = getAnalytics(app);
