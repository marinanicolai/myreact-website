import React from "react";
import Nav from "./Header/Nav";
import NavLinks from "./Header/NavLinks";
import Footer from "./Footer/Footer";
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
