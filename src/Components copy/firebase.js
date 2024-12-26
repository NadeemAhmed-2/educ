
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZwR59jPXiTjnEueaXd4BNbnjmti5m3Dg",
  authDomain: "doubtai.firebaseapp.com",
  projectId: "doubtai",
  storageBucket: "doubtai.firebasestorage.app",
  messagingSenderId: "813162164941",
  appId: "1:813162164941:web:df5440edef5551003baf84",
  measurementId: "G-ZXS638BPLH"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };


