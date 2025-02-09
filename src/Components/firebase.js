

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
const fireDB = getFirestore(app);
export {fireDB}
const signUp = async (name,email,password) => {
  try{
         const response = await createUserWithEmailAndPassword(auth,email,password);
         const user = response.user;

         //put deatls into database
         await addDoc(collection(db,"user"),{
            uid : user.uid,
            name,
            authProvider : "local",
            email,
         })
         
  }
  catch(error){
       console.log(error);
       toast.error(error.code.slice(5))
       //alert(error)
  }
}

const login = async (email,password) => {
 try{
    await signInWithEmailAndPassword(auth,email,password);

 }
 catch(error){
     console.log(error)
     toast.error(error.code.slice(5))
 }
}

const logout = async () => {
  signOut(auth)
}

export { login, signUp ,logout}



