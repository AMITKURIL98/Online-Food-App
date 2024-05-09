import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
      <Welcome />
    </>
  );
}

export default App;
