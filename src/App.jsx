import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
