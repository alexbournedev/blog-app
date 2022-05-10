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

function App() {
  return (
    <div className="App">
      <header className="nav-bar">
        <a className="title">Blog App</a>
        <div className="links">
          <div className="nav-link">
            <a className="nav-link1">Home</a>
            <a className="nav-link2">About</a>
          </div>
        </div>
        <div className="login">
          <a>Login</a>
        </div>
      </header>
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
