import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAKECYdbUrEKvhfp92fqb_Vp8XB9ttuMo",
  authDomain: "learn-auth01.firebaseapp.com",
  projectId: "learn-auth01",
  storageBucket: "learn-auth01.appspot.com",
  messagingSenderId: "824335800380",
  appId: "1:824335800380:web:432e3c6c4afb02bb8f0b39"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
