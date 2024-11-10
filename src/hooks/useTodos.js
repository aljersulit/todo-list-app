import { useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const useTodos = (dispatch) => {
  
  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const todosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      dispatch({ type: 'FETCH_TODOS', payload: todosList})
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useTodos;