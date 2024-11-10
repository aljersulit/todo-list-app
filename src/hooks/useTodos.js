import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const useTodos = (dispatch) => {
  
  useEffect(() => {
    const tasksCollectionRef = collection(db, "todos");
    const unsubscribe = onSnapshot(tasksCollectionRef, (snapshot) => {
      const todosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      dispatch({ type: 'FETCH_TODOS', payload: todosList})
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useTodos;