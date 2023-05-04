import styled from "styled-components";
import { Button, Typography } from "@mui/material";

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body1">
        © {new Date().getFullYear()} Next.js landing page
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
