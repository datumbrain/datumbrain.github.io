import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// reactstrap components
import { NavbarBrand, NavItem, NavLink, Nav, Container } from "reactstrap";

class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarExpanded: false
    };

    this.navbar = React.createRef();

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => ({
      navbarExpanded: !prevState.navbarExpanded
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
                src={require("assets/img/logo.png")}
                className="logo logo-sticky"
              />
            ) : (
              <>
                <img
                  src={require("assets/img/logo.png")}
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
                  src={require("assets/img/logo.png")}
                  alt="Laapp Template"
                  className="logo"
                />
              </Link>
            </div>

            <Nav className="nav navbar-nav ml-auto" navbar>
              <NavItem>
                <NavLink href="#!">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#!">Contact</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </nav>
    );
  }
}

export default DefaultNavbar;
