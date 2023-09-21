import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import { auth } from './Components/Firebase/Firebase';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Profile from './Components/Profile/Profile';
import ResetPassword from './Components/Auth/Fortgot/ResetPassword';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
