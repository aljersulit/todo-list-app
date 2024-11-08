import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

export { signup, login, logout };