import Header from "./Component/Home/Header.jsx";
import Home from "./Component/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./Component/AlumniDirectory/Personal.jsx";
import ShowProduct from "./Component/AlumniDirectory/ShowProduct.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import AboutUs from "./Component/P-Commerce/About.jsx";
// import Nearby from "./Component/Nearby/Nearby.js";
import "./styles.css";
import Second from "./Component/AlumniDirectory/Second.jsx";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Signup from "./Component/Home/Signup.js";
import Login from "./Component/Home/Login.jsx";


export default function App() {
  // console.log(process.env.REACT_APP_BACKEND);
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="products" element={<ShowProduct />} />
          <Route path="products/Personal/:_id" element={<Personal />} />          
          {/* <Route path="Alumni-Nearby" element={<Nearby />} /> */}
          <Route path="About-Us" element={<AboutUs/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Signup" element={<Signup/>}/>
          <Route path="Login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}
