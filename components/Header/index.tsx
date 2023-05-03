import Button from "@/Button";
import { menuItems } from "data/dummy";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const Logo = styled.h2`
  margin: 0;
`;

const Navigation = styled.nav<{ isMenuOpen: boolean }>`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-right: 5rem;

    @media (width: 1024px) {
      margin-right: 0rem;
    }

    .active {
      color: ${({ theme }) => theme.colors.secondary};
    }

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
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 70px);
    background-color: ${({ theme }) => theme.colors.common.white};
    z-index: 998;

    button {
      margin: 32px 0px;
      width: 90%;
    }

    ul {
      flex-direction: column;
      width: 100%;
      margin-right: 0rem;

      li {
        width: 100%;
        padding: 16px;
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
  const [activeLink, setActiveLink] = useState("");

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
          {menuItems.map(({ id, label }) => (
            <li onClick={toggleMenu} key={id}>
              <a
                href={id}
                className={activeLink === id ? "active" : ""}
                onClick={() => {
                  setActiveLink(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <Button>Purchase Now</Button>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
