"use client";
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { headerdata, HeaderItem } from "../constant/alldata";
import { useEffect, useState } from "react";
import Image from "next/image";

function Header() {
  const [show, setShow] = useState<number | null>(null);
  const handleclick = (index: number) => {
    setShow((prev) => (prev === index ? null : index));
  };
  const [isActive, setIsActive] = useState<number | null>(null);
  function menuHandler(index: number) {
    setIsActive((prev) => (prev === index ? null : index));
  }
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  function scrollHandler() {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  const isMenuOpen = show === 2;

  return (
    <>
      <header className="site-header header style-1">
        {/* <div className="header-info-bar d-none d-xxl-block">
          <div className="container-fluid">
            <div className="row">
              {headerinfo.map((data, i) => (
                <div className="col" key={i}>
                  <div className="icon-bx-wraper style-5">
                    <div className="icon-bx">
                      <span className="icon-cell">
                        <Image src={data.image} alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h2 className="dz-title">{data.title}</h2>
                      <p>{data.paragraph}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div
          className={`sticky-header main-bar-wraper ${scroll ? "is-fixed" : ""}`}
        >
          <div className="main-bar clearfix bg-secondary text-white">
            <div className="container-fluid clearfix inner-bar">
              <div className="logo-header logo-dark">
                <Link href="/">
                  <Image src={IMAGES.logowhite} alt="logo" />
                </Link>
              </div>
              <div
                onClick={() => setShow(null)}
                className={`menu-close fade-overlay ${isMenuOpen ? "open" : ""}`}
                aria-hidden={!isMenuOpen}
              ></div>
              <div
                className={`header-nav w3menu w3menu-end mo-left ${isMenuOpen ? "show" : ""}`}
                id="W3Menu"
              >
                <div className="logo-header logo-dark">
                  <Link href="/">
                    <Image src={IMAGES.logo} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav">
                  {headerdata.map((data: HeaderItem, i: number) => {
                    let menuClassName = data.classChange;
                    if (menuClassName === "has-mega-menu") {
                      return (
                        <li
                          key={i}
                          className={`has-mega-menu sub-menu-down auto-width menu-left ${i == isActive ? "open" : ""}`}
                        >
                          <Link href={"#"} onClick={() => menuHandler(i)}>
                            {" "}
                            <span>{data.title}</span>{" "}
                            <i className="fas fa-chevron-down tabIndex" />{" "}
                          </Link>
                          <div className="mega-menu">
                            <ul className="demo-menu">
                              {data.content?.map((item, index) => (
                                <li key={index}>
                                  <Link href={item.to}>
                                    {" "}
                                    <Image
                                      src={item.image as string}
                                      alt={item.title}
                                    />
                                    <span className="menu-title">
                                      {item.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      );
                    } else if (menuClassName === "sub-menu-down") {
                      return (
                        <li
                          key={i}
                          className={`sub-menu-down ${i == isActive ? "open" : ""}`}
                          onClick={() => menuHandler(i)}
                        >
                          <Link href={"#"}>
                            {" "}
                            <span>{data.title}</span>{" "}
                            <i className="fas fa-chevron-down tabIndex" />{" "}
                          </Link>
                          <ul className="sub-menu">
                            {data.content?.map((item, index) => (
                              <li key={index}>
                                {" "}
                                <Link href={item.to}>{item.title}</Link>{" "}
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li key={i}>
                          <Link href={data.to as string}>
                            <span>{data.title}</span>
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="dz-social-icon">
                  <ul>
                    <li>
                      {" "}
                      <Link
                        href="https://www.facebook.com/dexignzone"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa-brands fa-facebook-f" />{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="https://x.com/dexignzone" target="_blank">
                        {" "}
                        <i className="fa-brands fa-x-twitter" />{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link
                        href="https://www.linkedin.com/showcase/dexignzone"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa-brands fa-linkedin" />{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link
                        href="https://www.instagram.com/dexignzone"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa-brands fa-instagram" />{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`extra-nav ${scroll ? "active" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
                <div className="extra-cell">
                  <ul className="header-right">
                    <li className="nav-item">
                      <Link href="/appointment" className="btn  btn-purple">
                        {" "}
                        Send an Enquiry {" "}
                      </Link>
                    </li>
                    <li className="nav-item d-lg-none">
                      <button
                        onClick={() => handleclick(2)}
                        className={`w3menu-toggler navicon ${isMenuOpen ? "open" : ""}`}
                        type="button"
                        data-target="#W3Menu"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </li>
                    {/* Sidebar offcanvas toggle — disabled per client request
                    <li className="nav-item">
                      <button
                        onClick={() => handleclick(1)}
                        type="button"
                        className="toggle-nav-btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#headerSidebar"
                        aria-controls="offcanvasLeft"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </li>
                    */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar offcanvas panel — disabled per client request
        <div
          className={`offcanvas dz-offcanvas offcanvas offcanvas-end ${show === 1 ? "show" : ""}`}
          tabIndex={-1}
          id="headerSidebar"
        >
          <button
            onClick={() => setShow(null)}
            type="button"
            className="btn-close m-t10 m-l10"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <div className="offcanvas-body">
            <div className="widget">
              <div className="sidebar-header m-b20">
                <Link href="/">
                  <Image src={IMAGES.logo} alt="/" />
                </Link>
              </div>
              <p>
                Lighthouse Healthcare Solutions (LHS) is a clinician-led medical
                travel and emergency transport company founded by doctors who
                are deeply passionate about pre-hospital and critical care.
              </p>
            </div>
            <div className="widget">
              <div className="widget-title">
                <h4 className="title">Contact Us</h4>
              </div>
              <ul className="list-check">
                <li>Minna bldg, wello sefer, Addis Ababa, Ethiopia</li>
                <li>
                  <Link
                    href="mailto:info@lhsethiopia.com"
                    className="text-body"
                  >
                    info@lhsethiopia.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+251943104334" className="text-body">
                    +251943104334
                  </Link>
                </li>
              </ul>
            </div>
            <div className="widget">
              <div className="widget-title">
                <h4 className="title">Newsletter</h4>
              </div>
              <form
                className="dzSubscribe style-2"
                ref={form}
                onSubmit={handleSubmit}
              >
                <div className="dzSubscribeMsg"></div>
                <div className="form-group">
                  <div className="input-group mb-0">
                    <input
                      name="dzEmail"
                      required
                      type="email"
                      className="form-control"
                      placeholder="Your Email Address"
                    />
                    <div className="input-group-addon">
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="btn text-primary btn-transparent p-2"
                      >
                        <i className="fa-solid fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="widget">
              <div className="widget-title">
                <h4 className="title">Follow Us</h4>
              </div>
              <div className="dz-social-icon style-1">
                <ul>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/lighthouse-healthcare-solutions/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin" />
                    </Link>{" "}
                  </li>
                  <li>
                    <Link href="https://wa.me/+251943104334" target="_blank">
                      <i className="fa-brands fa-whatsapp" />
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        */}
      </header>
    </>
  );
}
export default Header;
