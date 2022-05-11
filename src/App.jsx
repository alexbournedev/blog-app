import "./App.css";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Home />
      {/* <Register /> */}
      <Footer />
    </div>
  );
}

export default App;
