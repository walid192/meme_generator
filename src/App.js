import "./App.css";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Meme />
      </div>
    </div>
  );
}

export default App;
