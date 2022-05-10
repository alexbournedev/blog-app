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
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
