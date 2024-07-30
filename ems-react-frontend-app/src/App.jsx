import {Route,Routes,BrowserRouter as Router, Link} from "react-router-dom";
import React from 'react'
import Home from './components/Home'
import Company from "./components/Company";
import Contactus from "./components/Contactus";
import Services from "./components/Services";
import Careers from "./components/Careers";

const App = () => {

  return (
    <>
      <h2>Welcome to React Router Tutorial</h2>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light-bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            <li>
              <Link to={"/careers"} className="nav-link">Careers</Link>
            </li>
            <li>
              <Link to={"/service"} className="nav-link">Services</Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">ContactUs</Link>
            </li>
            <li>
              <Link to={"/company"} className="nav-link">Company</Link>
            </li>
          </ul>
        </nav>
            <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/company" element={<Company/>} />
                    <Route path="/careers" element={<Careers/>} />
                    <Route path="/contact" element={<Contactus/>} />
                    <Route path="/service" element={<Services />} />
            </Routes>
      </Router>
      </>
  );
}
export default App