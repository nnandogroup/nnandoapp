import "./header.scss";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="header">
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
                <KeyboardArrowDownRounded />
              </a>
            </li>
            <li>
              <a href="/" className="nav__item">
                About
              </a>
            </li>
          </ul>
          <a href="#contact-us" className="nav__btn">
            <Button variant="contained" color="primary">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
