import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo-light.png";
import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={logoLight}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consect etur adi pisicing elit sed.
                </p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="tel:0323 4331 750">
                      <i className="azino-icon-telephone"></i>0323 4331 750
                    </a>
                  </li>
                  <li>
                    <a href="mailto:infocpeministry@gmail.com">
                      <i className="azino-icon-email"></i>
                      infocpeministry@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/CPEC+Christ+Pentecostal+Evangelical+Church/@31.4099969,74.3696471,17.09z/data=!4m14!1m7!3m6!1s0x39190752031bba93:0x6c256278e6ddcee3!2sCPEC+Christ+Pentecostal+Evangelical+Church!8m2!3d31.4099216!4d74.3723128!16s%2Fg%2F11rwphhrqf!3m5!1s0x39190752031bba93:0x6c256278e6ddcee3!8m2!3d31.4099216!4d74.3723128!16s%2Fg%2F11rwphhrqf?entry=ttu">
                      <i className="azino-icon-pin"></i> 1 Rohi Nala, E-Block
                      Youhanabad
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/causes">
                      <a>Our Causes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a>Events</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            {/* <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__blog">
                <h3 className="footer-widget__title">Blog</h3>
                <ul className="list-unstyled footer-widget__blog">
                  <li>
                    <img src={blogPost1} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>You can help the poor in need</a>
                      </Link>
                    </h3>
                  </li>
                  <li>
                    <img src={blogPost2} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>Rise fund for Healthy Food</a>
                      </Link>
                    </h3>
                  </li>
                </ul>
              </div>
            </Col> */}
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newletter</h3>
                <p>Signup now to get daily latest news & updates from us</p>
                <form
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2023 by cpeministry.org</p>
          <div className="footer-social">
            <a href="#" aria-label="twitter">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            {/* <a href="#" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
