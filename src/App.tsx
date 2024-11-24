import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
