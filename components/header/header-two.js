import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import NavLinks from "./nav-links";
import { MenuContext } from "../../context/menu-context";
import flag1 from "../../assets/images/resources/flag-1-1.jpg";
import logoDark from "../../assets/images/logo-dark.png";

const HeaderTwo = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          <p>Welcome to non profit charity platform</p>
          <div className="main-header__social">
            <a href="#" aria-label="twitter">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            {/* <a href="#" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a> */}
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link href="/">
              <a aria-label="logo image">
                <img src={logoDark} width="101" alt="" />
              </a>
            </Link>
            <span
              className="fa fa-bars mobile-nav__toggler"
              onClick={handleMenuClick}
            ></span>
          </div>

          <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:infocpeministry@gmail.com">
                    infocpeministry@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:0323 4331 750">0323 4331 750</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-address"></i>
              <div className="header-info__box-content">
                <h3>Visit</h3>
                <p>
                  Street No. 1 Rohi Nala, E-Block Youhanabad, Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks />
          <Link href="/contact">
            <a className="thm-btn dynamic-radius">Donate Now</a>
          </Link>
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
