import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import UserContext from './contexts/UserContext'
import LoginPage from './pages/LoginPage'
import SignUpPage from "./pages/SignUpPage";
import Subscriptions from "./pages/Subscriptions";
import SubscriptionID from './pages/SubscriptionID'
import UserDataPage from "./pages/UserDataPage";
import Home from "./pages/Home";

export default function App() {

  const tokenOnLocalStorage = localStorage.getItem("token");
  console.log("TOKEN App(): ", tokenOnLocalStorage);

  const [token, setToken] = useState(tokenOnLocalStorage);
  const [user, setUser] = useState({});

  function setAndPersistToken(token) {
    if (token !== null) {
      setToken(token);
      localStorage.setItem("token", token);
    }
  }

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser, setAndPersistToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/:id" element={<SubscriptionID />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/:id" element={<UserDataPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

