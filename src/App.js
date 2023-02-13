import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice"
import Login from './Login';
import { auth } from './firebase';
import { login, logout} from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      }
      else {
        // The useris not logged in
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    // BEM naming convention
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
          <Userbar/>
        </>
      ): (
        <Login />
      )}
      

    </div>
  );
}

export default App;
