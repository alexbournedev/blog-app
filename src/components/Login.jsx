import React from 'react'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Login() {
  return (
    <div className="App">
    <Navbar />
    <div className="form-container">
     <form>
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Sign-In" />

        <input type="submit" value="Register" />
      </form>
    </div>
    <Footer />
  </div>
  )
}
