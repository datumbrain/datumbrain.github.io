import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// reactstrap components
import { NavbarBrand, NavItem, NavLink, Nav, Container } from "reactstrap";

class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarExpanded: false,
    };

    this.navbar = React.createRef();

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState((prevState) => ({
      navbarExpanded: !prevState.navbarExpanded,
    }));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const navigation = this.navbar.current;
    const navTop = navigation.offsetTop + navigation.offsetHeight;

    if (window.scrollY >= navTop) {
      navigation.classList.add("navbar-sticky");
    } else {
      navigation.classList.remove("navbar-sticky");
    }
  };

  render() {
    const useOnlyDarkLogo = this.props.useOnlyDarkLogo;

    return (
      <nav
        ref={this.navbar}
        className={classNames(
          "navbar navbar-expand-md main-nav navigation fixed-top sidebar-left",
          { "navbar-expanded": this.state.navbarExpanded }
        )}
      >
        <Container>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNavbar}
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            {useOnlyDarkLogo ? (
              <img
                alt="..."
                src={require("assets/img/logo.svg")}
                className="logo logo-sticky"
              />
            ) : (
              <>
                <img
                  src={require("assets/img/logo.svg")}
                  alt="Laapp"
                  className="logo logo-sticky d-block d-md-none"
                />
                <img
                  src={require("assets/img/logo-light.png")}
                  alt="Laapp"
                  className="logo d-none d-md-block"
                />
              </>
            )}
          </NavbarBrand>

          <div className="collapse navbar-collapse">
            <div className="sidebar-brand">
              <Link to="/">
                <img
                  src={require("assets/img/logo.svg")}
                  alt="Laapp Template"
                  className="logo"
                />
              </Link>
            </div>

            <Nav className="nav navbar-nav ml-auto" navbar>
              <NavItem>
                <NavLink href="#home">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#features">about</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">portfolio</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#contact">contact</NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink href="http://blog.datumbrain.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="svg-logo-icon-class"
                  >
                    <path d="M22.814 9.031h-1.95c-1 0-1.185-.764-1.185-1.707.001-4.045-3.272-7.324-7.308-7.324h-5.062c-4.037 0-7.309 3.279-7.309 7.324v9.352c0 4.045 3.272 7.324 7.309 7.324h9.383c4.036 0 7.308-3.279 7.308-7.324v-6.457c0-.657-.531-1.188-1.186-1.188zm-15.428-3.031h4.229c.765 0 1.385.671 1.385 1.5s-.62 1.5-1.386 1.5h-4.228c-.766 0-1.386-.671-1.386-1.5s.62-1.5 1.386-1.5zm9.134 12h-9.04c-.817 0-1.48-.672-1.48-1.5 0-.83.663-1.5 1.48-1.5h9.039c.817 0 1.48.67 1.48 1.5.001.828-.662 1.5-1.479 1.5z" />
                  </svg>
                  blog
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <img
                  src={require("../../assets/img/upwork_icon.png")}
                  style={{
                    height: "30px",
                    transform: "translateX(10px)",
                  }}
                  alt=""
                />
                <NavLink
                  target={"blank"}
                  href="https://www.upwork.com/ag/datumbrain/"
                  style={{}}
                >
                  Upwork
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </nav>
    );
  }
}

export default DefaultNavbar;
