import { auth } from "../firebaseConfig";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	validatePassword
} from "firebase/auth";

const signup = (email, password) =>
	createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) =>
	signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

const passwordValidate = (passwordFromUser) =>
	validatePassword(auth, passwordFromUser);



export { signup, login, logout, passwordValidate};
