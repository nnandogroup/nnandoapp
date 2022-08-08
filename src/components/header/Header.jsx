import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";

// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
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
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};
	return (
		<Box component="header" className={navbar ? "header active" : "header"}>
			<div className="header__shell">
				<div>
					<img
						src={require("../../assets/logo/NG.png")}
						alt="logo"
						className="header__logo"
					/>
				</div>
				<nav>
					<ul className={clicked ? "menu-list" : "menu-list close"}>
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
						<li>
							<Button
								className="nav__item"
								variant="contained"
								href="#contact-us"
								disableElevation
								color="primary">
								Contact Us
							</Button>
						</li>
					</ul>
					<div className="menu-icon" onClick={handleClick}>
						<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
					</div>

					{/* <div className="menu-icon" onClick={handleClick}>
						<i
							className={
								clicked ? (
									<CloseIcon className="close-icon" />
								) : (
									<MenuIcon className="menu-outline-icon" />
								)
							}></i>
					</div> */}
				</nav>
			</div>
		</Box>
	);
};

export default Header;

// const Header = () => {
// 	const [navbar, setNavbar] = useState(false);
// 	const changeBackground = () => {
// 		if (window.scrollY > 85) {
// 			setNavbar(true);
// 		} else {
// 			setNavbar(false);
// 		}
// 	};

// 	window.addEventListener("scroll", changeBackground);

// 	return (
// 		<Box component="header" className={navbar ? "header active" : "header"}>
// 			<div className="header__shell">
// 				<div>
// 					<img
// 						src={require("../../assets/logo/NG.png")}
// 						alt="logo"
// 						className="header__logo"
// 					/>
// 				</div>
// 				<nav>
// 					<ul className="nav">
// 						<li>
// 							<a href="/" className="nav__item">
// 								Home
// 							</a>
// 						</li>
// 						<li>
// 							<a href="/" className="nav__item">
// 								Business
// 							</a>
// 						</li>
// 						<li>
// 							<a href="/" className="nav__item">
// 								About
// 							</a>
// 						</li>
// 					</ul>
// 					<Button
// 						variant="contained"
// 						href="#contact-us"
// 						disableElevation
// 						color="primary">
// 						Contact Us
// 					</Button>
// 				</nav>
// 				{/* {responsiveNav ? (
// 					<MenuIcon
// 						className="mobile__nav"
// 						onClick={() => {
// 							setResponsiveNav(!responsiveNav);
// 						}}
// 						style={{ fontSize: "32px" }}
// 					/>
// 				) : (
// 					<CloseIcon className="close__icon" style={{ fontSize: "32px" }} />
// 				)} */}

// 				{/* <div className="mobile__nav">
//           <div className="mobile__nav--1"></div>
//           <div className="mobile__nav--2"></div>
//           <div className="mobile__nav--3"></div>
//         </div> */}
// 			</div>
// 		</Box>
// 	);
// };

// export default Header;
