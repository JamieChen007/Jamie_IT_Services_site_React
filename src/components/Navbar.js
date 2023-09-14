import { useEffect, useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";

const Navbar = () => {
  const [isNavDropdownListOpen, setIsNavDropDownListOpen] = useState(false);
  const [isNavbarLinkListShow, setIsNavbarLinkListShow] = useState(true);
  const [isNavMobileBtnShow, setIsNavMobileBtnShow] = useState(false);
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);
  const [navBarLinkListStyle, setNavBarLinkListStyle] = useState({
    top: "8rem",
  });
  const match =
    useMatch("/services/consultants") +
    useMatch("/services/support") +
    useMatch("/services/backupsolution") +
    useMatch("/services/managedit") +
    useMatch("/services/procurement");

  const matchEmpty = useMatch("");
  const matchIndex = useMatch("/index");

  const handleMouseEnter = () => {
    setIsNavDropDownListOpen(true);
  };

  const handleMouseLeave = () => {
    setIsNavDropDownListOpen(false);
  };
  const handleResize = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth < 1000) {
      setIsNavbarLinkListShow(false);
      setIsNavMobileBtnShow(true);
    } else {
      setIsNavbarLinkListShow(true);
      setIsNavMobileBtnShow(false);
    }
  };

  const handleScroll = () => {
    // 128 is navbar height
    if (window.scrollY > 128 + 150) {
      setIsNavBarSticky(true);
      if (isNavbarLinkListMobile) {
        setNavBarLinkListStyle({ top: "6rem" });
      }
    } else {
      setIsNavBarSticky(false);
      if (isNavbarLinkListMobile) {
        setNavBarLinkListStyle({ top: "8rem" });
      }
    }
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    handleResize();
  }, []);

  const [isNavbarLinkListMobile, setIsNavbarLinkListMobile] = useState(false);

  const navMobileBtnClickHandler = () => {
    setIsNavbarLinkListMobile(!isNavbarLinkListMobile);
    if (isNavBarSticky) {
      setNavBarLinkListStyle({ top: "6rem" });
    } else {
      setNavBarLinkListStyle({ top: "8rem" });
    }
  };

  return (
    <nav className={isNavBarSticky ? "navbar active" : "navbar"}>
      <div className="sitename">
        <Link to="/index">Jamie IT Services</Link>
      </div>
      <nav className="navbarLink">
        <ul
          className={
            isNavbarLinkListShow
              ? "navbarLinkList"
              : isNavbarLinkListMobile
              ? "navbarLinkList mobile"
              : "navbarLinkList hide"
          }
          style={navBarLinkListStyle}
        >
          <li className="navLinkListCtn">
            <NavLink
              className={
                matchEmpty || matchIndex ? "navHome navbarChosen" : "navHome"
              }
              to="/index"
            >
              home
            </NavLink>
          </li>
          <li className="navdropdownContainer" onMouseLeave={handleMouseLeave}>
            <NavLink
              className={
                match !== 0 ? "navServices navbarChosen" : "navServices"
              }
              onMouseEnter={handleMouseEnter}
            >
              services
            </NavLink>
            <ul
              className={
                isNavDropdownListOpen
                  ? "navDropdownList open"
                  : "navDropdownList"
              }
            >
              <li>
                <NavLink to="/services/consultants">IT Consultants</NavLink>
              </li>
              <li>
                <NavLink to="/services/support">
                  Small Business IT Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/backupsolution">
                  IT Backup Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/managedit">Managed IT Services</NavLink>
              </li>
              <li>
                <NavLink to="/services/procurement">IT Procurement</NavLink>
              </li>
            </ul>
          </li>
          <li className="navLinkListCtn">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "navAbout navbarChosen" : "navAbout";
              }}
              to="/about"
            >
              about
            </NavLink>
          </li>
          <li className="navLinkListCtn">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "navContact navbarChosen" : "navContact";
              }}
              to="/contact"
            >
              contact
            </NavLink>
          </li>
        </ul>
        <div
          className={isNavMobileBtnShow ? "navMobileBtn show" : "navMobileBtn"}
          onClick={navMobileBtnClickHandler}
        >
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
