import React, { useState } from "react";
import "./Header.css";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { BsFilePersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

    const productData = useSelector((state)=> state.shop.productData)
    const userInfo = useSelector((state)=> state.shop.userInfo)

    const navigate = useNavigate()

    const toogle = ()=>{
      setShowNav(!showNav)
    }
    const hideMenu = ()=>{
      setShowNav(false)
    }
    

  return (
    <nav>
      <div className="container navbar">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <h1 className="main-logo">
            Sho<span>p</span>ify
          </h1>
        </Link>
        <div className="nav-menu">
          <div className="menu">
            <div
              onClick={hideMenu}
              className={showNav ? "nav-wrapper show-wrapper" : "nav-wrapper"}
            ></div>
            <ul className="nav-links" id={showNav ? "mobile-links" : "hidden"}>
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <li onClick={hideMenu} className="link">
                  Home
                </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                <li onClick={hideMenu} className="link">
                  Contact Us
                </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <div className=" login">
                  <BsFilePersonFill size={25} color="rgb(237, 235, 235)" />
                </div>
              </Link>
              {userInfo && (
                <p className="user-info"> Welcome {userInfo.name}</p>
              )}
            </ul>
          </div>

          <div className="nav-right">
            <Link to="/cart">
              <div className="cart">
                <AiOutlineShoppingCart
                  className="shop-cart"
                  size={35}
                  color="red"
                />
                <div className="cart-amount">{productData.length}</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="menu-icons" onClick={toogle}>
          {showNav ? (
            <AiOutlineClose size={25} color="white" />
          ) : (
            <FaBars size={25} color="white" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
