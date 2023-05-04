import styled from "styled-components";

const FooterContainer = styled.footer`
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
