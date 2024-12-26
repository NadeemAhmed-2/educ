

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBCqdsovCciFkabb73d8LPwv1f21aSzorc",
  authDomain: "lernhub-8ade5.firebaseapp.com",
  databaseURL: "https://lernhub-8ade5-default-rtdb.firebaseio.com",
  projectId: "lernhub-8ade5",
  storageBucket: "lernhub-8ade5.firebasestorage.app",
  messagingSenderId: "982169542027",
  appId: "1:982169542027:web:46416573e1f2573603638e",
  measurementId: "G-6L7G5SNV98"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)


