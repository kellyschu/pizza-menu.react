import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Menu />
      </header>
      <Footer />
    </div>
  );
}

export default App;
