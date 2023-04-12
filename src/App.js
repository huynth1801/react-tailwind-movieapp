import "./App.css";
import Header from "./components/Header";
import Routers from "./routers/Routers";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routers />
      </div>
    </div>
  );
}

export default App;
