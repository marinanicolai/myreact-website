import React from "react";
import Nav from "./Header/Navbar/index.jsx";
import NavLinks from "./Header/NavbarLinks/index.jsx";
import Footer from "./Footer/index";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <NavLinks />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
