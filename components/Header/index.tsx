import Image from "next/image";
import React, { useState } from "react";
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

  @media (max-width: 768px) {
    justify-content: space-around;
    padding: 1rem ${({ theme }) => theme.spacing.sm};
  }
`;

const Logo = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.common.white};
`;

const Navigation = styled.nav<{ isMenuOpen: boolean }>`
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
    color: ${({ theme }) => theme.colors.common.white};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  /* hide navigation on mobile */
  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: calc(100% - 50px);
    background-color: ${({ theme }) => theme.colors.common.white};
    z-index: 998;
    text-align: center;

    ul {
      flex-direction: column;
      width: 100%;

      li {
        width: 100%;
        padding: 24px 0px;
        border-top: 1px solid #eeeeee;
        text-decoration: none;

        &:last-child {
          border-bottom: 1px solid #eeeeee;
        }

        a {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.common.white};

  /* show menu icon on mobile */
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Image src="/images/logo.svg" alt="Logo" width={200} height={40} />
      </Logo>
      <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
      <Navigation isMenuOpen={isMenuOpen}>
        <ul>
          <li onClick={toggleMenu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
