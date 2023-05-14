import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />

      <Routes>
        <Route path="/" />
        <Route path="/" />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
