import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const useTodos = (setTodos) => {
  
  useEffect(() => {
    const tasksCollectionRef = collection(db, "todos");
    const unsubscribe = onSnapshot(tasksCollectionRef, (snapshot) => {
      const todosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodos(todosList);
    });

    return () => unsubscribe();
  }, [setTodos]);
};

export default useTodos;