import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBP9UUjQ38jPfGAabpMrMILlvzstRzwKC0",
  authDomain: "ai-house-7de31.firebaseapp.com",
  projectId: "ai-house-7de31",
  storageBucket: "ai-house-7de31.firebasestorage.app",
  messagingSenderId: "831544882097",
  appId: "1:831544882097:web:05b36d985c430f14068390",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = document.getElementById("Submit Application");

signup.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("Full Name").value;
  const studentId = document.getElementById("Student ID").value;
  const department = document.getElementById("Department Of").value;

  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;

      return addDoc(collection(db, "users"), {
        uid: user.uid,
        email: email,
        name: name,
        studentId: studentId,
        department: department,
        createdAt: new Date(),
      });
    },
  );
});
