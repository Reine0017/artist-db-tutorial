import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #43A6C6 30%, #FF8E53 90%)",
    color: "black",
  },
  nav: {
    whiteSpace: "nowrap",
    marginLeft: theme.spacing(5),
  },
  button: {
    color: "white",
  },
}));

const StyledLink = styled(NavLink)`
  &:hover {
    color: white;
  }
  ,
  &:active {
    text-decoration: none;
  }
`;

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h5">MUSICDB</Typography>
        <div className={classes.nav}>
          <Button>
            <StyledLink
              to="/"
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="selected"
              exact
            >
              HOME PAGE
            </StyledLink>
          </Button>

          <Button>
            <StyledLink
              to="/user"
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="selected"
              exact
            >
              User
            </StyledLink>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
