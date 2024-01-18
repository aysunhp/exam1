import React,{useState} from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./../assets/styles/style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [scroll, setscroll] = useState()
  window.addEventListener("scroll",()=>{
    setscroll(scrollY)
  })

  return (
    <>
      <header>
        <div  className="container">
          <ul className="icons">
            <li>
              <FaFacebook style={{ fontSize: "26px" }} />
            </li>
            <li>
              <AiFillTwitterCircle style={{ fontSize: "26px" }} />
            </li>
            <li>
              <FaSquareInstagram style={{ fontSize: "26px" }} />
            </li>
            <li>
              <FaLinkedin style={{ fontSize: "26px" }} />
            </li>
          </ul>
          <ul className="header-contact">
            <li>
              <FaPhoneAlt style={{ color: "#F16821", fontSize: "14px" }} />
            </li>
            <li> (+1) 234 5678 9101</li>
            <li>
              <MdEmail style={{ color: "#F16821", fontSize: "16px" }} />
            </li>
            <li> shop@yourdomain.com</li>
          </ul>
        </div>
        <nav style={{position:scroll>10? "fixed":"static",top:"0"}}>
          <div className="conatiner" >
            <div className="logo">
            Selling <span>.</span>
            </div>
            <ul>
              <Link to="/">
                {" "}
                <li>Home</li>
              </Link>
              <Link to="/add">
          
                <li>Add</li>
              </Link>
              <Link to="/basket">
                {" "}
                <li>Basket</li>
              </Link>
              <Link to="/wishlist">
                {" "}
                <li>Wishlist</li>
              </Link>
              <li>Products</li>
              <li>About Us</li>
              <li>Special</li>
              <li>Testimonials</li>
              <li>Blog</li>
              <li>Contact</li>
              
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
