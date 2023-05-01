import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden;
`;

const Logo = styled.h2`
  margin: 0;
`;

// TODO: hide navigation on mobile. Add hamburger icon and sidebar.

const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li:not(:last-child) {
      margin-right: 2rem;
    }

    li:last-child {
      padding-right: 2rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>My Website</Logo>
      <Navigation>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
