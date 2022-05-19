import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import CreatePost from "./Pages/CreatePost/CreatePost";
import FullPost from "./Pages/FullPost/FullPost";
import UpdatePost from "./Pages/UpdatePost/UpdatePost";
// import LoginButton from "./LoginButton";



function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Register /> */}
        <Routes>
          <Route path="/" exact element={<Home />}/>
          {/* <Route path="/about"  exact element={<About />}/> */}
          {/* <Route path="/login" exact element={<LoginButton />}/> */}
          <Route path="/register" exact element={<Register />}/>
          <Route path="/CreatePost" exact element ={<CreatePost />}/>
          <Route path="/Posts/:id" exact element ={<FullPost />}/>
          <Route path="/UpdatePost/:id" exact element ={<UpdatePost />}/>
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
