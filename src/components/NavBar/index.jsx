import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { Button, Menu, MenuItem } from "@material-ui/core";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const ButtonLink = ({ to, className, children }) => {
  return (
  <Button
    size="large"
    to={to}
    className={`text-capitalize font-weight-normal nav-item nav-link active${className}`}
    component={Link}
  >
    {children}
  </Button>
  );
}

const NavBar = () => {
  const [anchorResource, setAnchorResource] = useState(null);

  const handleResourceClose = () => setAnchorResource(null);
  const handleResourceClick = (event) => setAnchorResource(event.currentTarget);

  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <ButtonLink className="navbar-brand" to="/">
          Stop uOttawa surveillance
        </ButtonLink>
        <div className="navbar-nav">
          <ButtonLink to="Petition">
            Petition
          </ButtonLink>
          <ButtonLink to="Privacy">
            Privacy
          </ButtonLink>
          <Button
            className="text-capitalize font-weight-normal navbar-light nav-item nav-link active"
            onClick={handleResourceClick}
          >
            Resources
          </Button>
          <ButtonLink to="Contact">
            Contact
          </ButtonLink>
        </div>
        <Menu
          id="resource-menu"
          anchorEl={anchorResource}
          onClose={handleResourceClose}
          open={Boolean(anchorResource)}
          keepMounted
          className="navbar navbar-expand-sm navbar-light"
        >
          <MenuItem component={Link} to="/letter" onClick={handleResourceClose}>
            Open Letter
          </MenuItem>
          <MenuItem component={Link} to="/analysis" onClick={handleResourceClose}>
            Policy Analysis
          </MenuItem>

        </Menu>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
