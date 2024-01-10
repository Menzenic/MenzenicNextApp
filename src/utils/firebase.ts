"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	// signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAR4JyOS54-6USudmcnf9NuUYTcfkHdIZc",
	authDomain: "menzenic-next-app.firebaseapp.com",
	projectId: "menzenic-next-app",
	storageBucket: "menzenic-next-app.appspot.com",
	messagingSenderId: "729264887843",
	appId: "1:729264887843:web:5a23c61c6b7d596ff9b996",
	measurementId: "G-8P6JM4YG4W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
