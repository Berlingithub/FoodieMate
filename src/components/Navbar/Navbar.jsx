import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle home click - always navigate to top of home page
  const handleHomeClick = () => {
    setMenu("home");
    // Force navigation to root path (removes any hash)
    navigate("/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle menu section clicks with smooth scroll
  const handleSectionClick = (sectionId, menuName) => {
    setMenu(menuName);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* scroll to top function */
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);


  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            handleHomeClick();
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick("explore-menu", "menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick("app-download", "mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick("footer", "contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <Link to="/search" onClick={() => {
          setMenu("search");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
          className={menu === "search" ? "active" : ""}>
          <img src={assets.search_icon} alt="" />
        </Link>
        <div className="navbar-search-icon">
          <Link to="/cart" onClick={() => {
            setMenu("cart");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={menu === "cart" ? "active" : ""}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
