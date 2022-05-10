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
import SubNav from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
