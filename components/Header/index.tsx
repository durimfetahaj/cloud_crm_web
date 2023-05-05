import React, { useState } from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ListItemText,
  Button,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "data/dummy";

const StyledAppBar = styled(AppBar)`
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  min-height: 75px;
  box-shadow: none;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;

  @media (min-width: 900px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  @media (min-width: 900px) {
    margin-right: 100px;
  }
`;

const Navigation = styled.nav`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1440px) {
    margin-right: 100px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 16px;

  li:not(:last-child) {
    margin-right: 2rem;
  }

  li:last-child {
    padding-right: 2rem;
  }

  .active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.palette.common.white};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.palette.secondary};
    }
  }
`;

const MenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const DrawerContent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (min-width: 768px) {
    width: 50vw;
  }

  ul {
    flex-direction: column;
    height: 100%;
    li {
      width: 100%;
      border-top: 1px solid #deeaff;
      padding: 12px;
      a {
        color: black;
      }
    }

    li:last-child {
      border-bottom: 1px solid #deeaff;
    }
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin: 16px 0px;

  svg {
    color: #0f2137bf;
  }
`;

const DrawerFooter = styled.div`
  padding: 24px 12px;

  button {
    width: 100%;
  }
`;

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Logo>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={200}
            height={40}
            priority
          />
        </Logo>
        <Navigation>
          <NavList>
            {menuItems.map(({ label, id }) => (
              <NavItem key={label}>
                <a
                  href={id}
                  className={activeLink === id ? "active" : ""}
                  onClick={() => {
                    setActiveLink(id);
                  }}
                >
                  <ListItemText primary={label} />
                </a>
              </NavItem>
            ))}
          </NavList>
        </Navigation>
        <MenuButton edge="start" color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </MenuButton>
        <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuClose}>
          <DrawerContent>
            <DrawerHeader>
              <Logo>
                <Image
                  src="/images/logo-dark.svg"
                  alt="Logo"
                  width={200}
                  height={40}
                />
              </Logo>
              <IconButton
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
              >
                <CloseIcon />
              </IconButton>
            </DrawerHeader>
            <NavList>
              {menuItems.map(({ label, id }) => (
                <NavItem
                  key={label}
                  onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                >
                  <a
                    href={id}
                    className={activeLink === id ? "active" : ""}
                    onClick={() => {
                      setActiveLink(id);
                    }}
                  >
                    <ListItemText primary={label} />
                  </a>
                </NavItem>
              ))}
            </NavList>
            <DrawerFooter>
              <Button variant="contained">Purchase Now</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Button
          variant="contained"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Purchase Now
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavigationBar;
