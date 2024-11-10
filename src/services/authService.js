import { auth } from "../firebaseConfig";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail
} from "firebase/auth";

const signup = (email, password) =>
	createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) =>
	signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export { signup, login, logout, resetPassword };
