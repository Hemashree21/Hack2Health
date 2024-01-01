import React, { useState } from "react";
import Landingpage from './pages/Landingpage';
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Home from './pages/Home';
import Account from "./pages/Account";
import Editaccount from "./pages/Editaccount";
import Goal from './pages/Goal';
import Calender from './pages/Calender';
import Bpmonitor from "./pages/Bpmonitor";
import Blog from "./pages/Blog";
import Post from './pages/Post';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/account" element={<Account />} />
          <Route path="/editaccount" element={<Editaccount />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/post" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/bpmonitor" element={<Bpmonitor />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
