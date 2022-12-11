/* eslint-disable react/prop-types */
import React from "react";

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menuOpen: false
      };
    }
  
    handleMenuClick() {
      this.setState({ menuOpen: !this.state.menuOpen });
    }
  
    handleLinkClick() {
      this.setState({ menuOpen: false });
    }
  
    render() {
      const styles = {
        container: {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 9,
          opacity: 0.9,
          display: "flex",
          alignItems: "center",
          background: "white",
          width: "100%",
          color: "black",
          fontFamily: "Lobster",
          boxShadow: "black 0px 1px 20px 0px"
        },
        logo: {
          margin: "0 auto"
        },
        body: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          filter: this.state.menuOpen ? "blur(2px)" : null,
          transition: "filter 0.5s ease"
        }
      };
      const menu = ["About Me", "Portfolio", "Contact Me"];
      const menuItems = menu.map((val, index) => {
        return (
          <MenuItem
            key={index}
            delay={`${index * 0.1}s`}
            onClick={() => {
              this.handleLinkClick();
            }}
          >
            {val}
          </MenuItem>
        );
      });
  
      return (
        <div>
          <div style={styles.container}>
            <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color="black"
            />
            <div style={styles.logo}>Alex Watto</div>
          </div>
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        </div>
      );
    }
  }

  
  class MenuItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hover: false
      };
    }
  
    handleHover() {
      this.setState({ hover: !this.state.hover });
    }
  
    render() {
      const styles = {
        container: {
          opacity: 0,
          animation: "1s appear forwards",
          animationDelay: this.props.delay
        },
        menuItem: {
          fontFamily: `'Open Sans', sans-serif`,
          fontSize: "1.2rem",
          padding: "1rem 0",
          margin: "0 5%",
          cursor: "pointer",
          color: this.state.hover ? "gray" : "#fafafa",
          transition: "color 0.2s ease-in-out",
          animation: "0.5s slideIn forwards",
          animationDelay: this.props.delay
        },
        line: {
          width: "90%",
          height: "1px",
          background: "gray",
          margin: "0 auto",
          animation: "0.5s shrink forwards",
          animationDelay: this.props.delay
        }
      };
      return (
        <div style={styles.container}>
          <div
            style={styles.menuItem}
            onMouseEnter={() => {
              this.handleHover();
            }}
            onMouseLeave={() => {
              this.handleHover();
            }}
            onClick={this.props.onClick}
          >
            <a className="nav" href={this.props.children}>{this.props.children}</a>
          </div>
          <div style={styles.line} />
        </div>
      );
    }
  }
  
  class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: this.props.open ? this.props.open : false
      };
    }
  
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({ open: nextProps.open });
      }
    }
  
    render() {
      const styles = {
        container: {
          position: "absolute",
          top: 0,
          left: 0,
          height: this.state.open ? "100vh" : 0,
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          background: "#0033c0",
          opacity: 0.95,
          color: "#fafafa",
          transition: "height 0.3s ease",
          zIndex: 2
        },
        menuList: {
          paddingTop: "3rem"
        },
        main: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh"
            }
      };
      return (
        <div style={styles.container}>
          {this.state.open ? (
            <div style={styles.menuList}>{this.props.children}</div>
          ) : null}
        </div>
      );
    }
  }
  
  class MenuButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: this.props.open ? this.props.open : false,
        color: this.props.color ? this.props.color : "black"
      };
    }
  
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({ open: nextProps.open });
      }
    }
  
    handleClick() {
      this.setState({ open: !this.state.open });
    }
  
    render() {
      const styles = {
        container: {
          height: "32px",
          width: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          padding: "4px"
        },
        line: {
          height: "2px",
          width: "20px",
          background: this.state.color,
          transition: "all 0.2s ease"
        },
        lineTop: {
          transform: this.state.open ? "rotate(45deg)" : "none",
          transformOrigin: "top left",
          marginBottom: "5px"
        },
        lineMiddle: {
          opacity: this.state.open ? 0 : 1,
          transform: this.state.open ? "translateX(-16px)" : "none"
        },
        lineBottom: {
          transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
          transformOrigin: "top left",
          marginTop: "5px"
        },
        main: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh"
            }
      };
      return (
        <div
          style={styles.container}
          onClick={
            // eslint-disable-next-line react/prop-types
            this.props.onClick
              ? this.props.onClick
              : () => {
                  this.handleClick();
                }
          }
        >
          <div style={{ ...styles.line, ...styles.lineTop }} />
          <div style={{ ...styles.line, ...styles.lineMiddle }} />
          <div style={{ ...styles.line, ...styles.lineBottom }} />
        </div>
      );
    }
  }

  
  export default class Main extends React.Component {
    render() {
      const styles = {
        main: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%"
        }
      };
  
      return (
        <div style={styles.main}>
          <Navbar />
        </div>
      );
    }
  }