// import "./App.css";
// import Card from "./components/Card";

// function App() {
//   return (
//     <div className="App">
//       <h1>
//         <em>Blog App</em>
//       </h1>
//       <hr />
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
  <div className="App">
    <Navbar />
    <div className="form-container">
      <div className="login-title">User Login</div>
      <div className="form">
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

          <input className="register" type="submit" value="Register" />
        </form>
      </div>

    </div>
    <Footer />
  </div>
  );
}

export default App;
