import styled from "styled-components";
import { theme } from "@/styles/theme";

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Next.js landing page</p>
    </FooterContainer>
  );
};

export default Footer;
