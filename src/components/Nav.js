import React from "react";

function Nav() {
  return (
    <nav className="navbar">
      <div className="container max-width">
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <a href="google.com">Google</a>
            <span className="sep"></span>
            <nav className="social-nagivation">
              <div className="menu-social">
                <ul id="menu-social">
                  <li id="menu-item">
                    <a title="Github" href="github.com">
                      <svg></svg>
                    </a>
                  </li>
                  <li id="menu-item">
                    <a title="Linkedin" href="github.com">
                      <svg></svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="flex items-center">
            <nav id="site-nav"></nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
