
import { BrowserRouter as Router} from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Header />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>

      <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
