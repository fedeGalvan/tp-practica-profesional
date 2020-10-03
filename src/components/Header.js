import React, { useState, useEffect, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./sass/Header.scss";
import Landing from "./Landing";

const Header = () => {
   const [header, setHeader] = useState("header");
   const [filter, setFilter] = useState("all");

   const listenScrollEvent = (event) => {
      if (window.scrollY < 73) {
         return setHeader("header");
      } else if (window.scrollY > 70) {
         return setHeader("header2");
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => window.removeEventListener("scroll", listenScrollEvent);
   }, []);

   return (
      <Fragment>
         <Navbar collapseOnSelect expand="lg" className={header}>
            <div className="header__left">
               <Navbar.Brand>
                  <img
                     alt=""
                     src="/logo.png"
                     width="30"
                     height="30"
                     className="d-inline-block align-top"
                  />
                  PicMe!
               </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <div className="header__middle">
                  <Nav.Link href="#" onClick={() => setFilter("photo")}>
                     Fotos
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => setFilter("illustration")}>
                     Ilustraciones
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => setFilter("vector")}>
                     Vectores
                  </Nav.Link>
                  <Nav.Link
                     href="#"
                     component={Landing}
                     onClick={() => setFilter("videos")}
                  >
                     Videos
                  </Nav.Link>
               </div>
            </Navbar.Collapse>
         </Navbar>
      </Fragment>
   );
};

export default Header;
