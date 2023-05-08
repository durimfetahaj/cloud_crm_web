import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppBar, Toolbar, IconButton, Drawer, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "data/dummy";
import Logo from "@/Logo";

const StyledAppBar = styled(AppBar)<{ scrolled: boolean }>`
  justify-content: center;
  background-color: ${({ theme, scrolled }) =>
    scrolled ? "#fff" : theme.palette.secondary.main};
  min-height: 75px;
  box-shadow: none;
  box-shadow: ${({ scrolled }) =>
    scrolled && "rgba(149, 157, 165, 0.2) 0px 8px 24px"};
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;

  @media (min-width: 1440px) {
    justify-content: space-around;
    padding: 0 120px;
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

const NavItem = styled.li<{ scrolled?: boolean }>`
  a {
    color: ${({ theme, scrolled }) =>
      scrolled ? theme.palette.text.primary : theme.palette.text.secondary};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const MenuButton = styled(IconButton)<{ scrolled: boolean }>`
  display: none;

  svg {
    color: ${({ theme, scrolled }) =>
      scrolled ? theme.palette.text.primary : theme.palette.text.secondary};
  }

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
      padding: 10px;
      a {
        color: ${({ theme }) => theme.palette.text.primary};
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
  const [scrolled, setScrolled] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledAppBar position="fixed" scrolled={scrolled}>
      <StyledToolbar>
        <Logo
          imageUrl={scrolled ? "/images/logo-dark.svg" : "/images/logo.svg"}
        />
        <Navigation>
          <NavList>
            {menuItems.map(({ label, id }) => (
              <NavItem key={label} scrolled={scrolled}>
                <a
                  href={id}
                  className={activeLink === id ? "active" : ""}
                  onClick={() => {
                    setActiveLink(id);
                  }}
                >
                  {label}
                </a>
              </NavItem>
            ))}
          </NavList>
        </Navigation>
        <MenuButton
          edge="start"
          color="inherit"
          onClick={handleMenuOpen}
          scrolled={scrolled}
        >
          <MenuIcon />
        </MenuButton>

        {/* Mobile navigation */}
        <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuClose}>
          <DrawerContent>
            <DrawerHeader>
              <Logo imageUrl="/images/logo-dark.svg" />
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
                    {label}
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
