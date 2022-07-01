import "./header.scss";
import { Button } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "header active" : "header"}>
      <div className="header__shell">
        <div>
          <img
            src={require("../../assets/logo/NG.png")}
            alt="logo"
            className="header__logo"
          />
        </div>
        <div className="header__nav">
          <ul className="nav">
            <li>
              <a href="/" className="nav__item">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav__item">
                Business
              </a>
            </li>
            <li>
              <a href="/" className="nav__item">
                About
              </a>
            </li>
          </ul>
          <Button
            variant="contained"
            href="#contact-us"
            disableElevation
            color="primary"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
