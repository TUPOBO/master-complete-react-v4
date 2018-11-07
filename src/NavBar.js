/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "@reach/router";
import styled, { keyframes } from "react-emotion";
import colors from "./colors";
const Container = styled("header")`
  background-color: ${colors.primary};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const SpyGlass = styled("span")`
  display: inline-block;
  animation: ${props => props.frequency}s ${spin} linear infinite;
`;

class NavBar extends React.Component {
  state = {
    frequency: 10
  };
  halfFrequency = () => {
    this.setState({
      frequency: this.state.frequency / 2
    });
  };
  render() {
    return (
      <Container>
        <NavLink to="/">Adopt Me!</NavLink>
        <NavLink to="/search-params">
          <SpyGlass
            onClick={this.halfFrequency}
            frequency={this.state.frequency}
            aria-label="search"
            role="img"
          >
            🔍
          </SpyGlass>
        </NavLink>
        <a href="https://github.com/TUPOBO/master-complete-react-v4">
          <span>Github</span>
        </a>
      </Container>
    );
  }
}

export default NavBar;
