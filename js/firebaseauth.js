import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
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
const db = getFirestore(app);

const form = document.querySelector("#apply-form form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const studentId = document.getElementById("studentid").value;
  const department = document.getElementById("department").value;

  addDoc(collection(db, "applications"), {
    name: name,
    email: email,
    studentId: studentId,
    department: department,
    submittedAt: new Date(),
  })
    .then(() => {
      alert("Application submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error saving application:", error);
      alert("Failed to submit application. Please try again.");
    });
});