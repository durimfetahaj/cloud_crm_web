import styled from "styled-components";
import { Container, Grid, Typography } from "@mui/material";
import { footerSectionData as data } from "data/dummy";
import Logo from "@/Logo";

const FooterContainer = styled.footer`
  padding: 2rem 0.8rem;
  margin: 100px auto;
  text-align: center;
  background: ${({ theme }) => theme.palette.secondary.light};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: left;

  hr {
    margin: 2rem 0rem;
    border-color: ${({ theme }) => theme.palette.grey[50]};
    opacity: 0.15;
  }
`;

const FooterListTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 20px;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.secondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const CopyrightsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container style={{ maxWidth: 1440 }}>
        <Grid container spacing={5}>
          {data.map(({ heading, links }, index) => (
            <Grid item xs={6} md={2.4} key={index}>
              <FooterListTitle variant="h5">{heading}</FooterListTitle>
              <FooterList>
                {links.map((link, index) => (
                  <FooterListItem key={index}>
                    <FooterLink>{link}</FooterLink>
                  </FooterListItem>
                ))}
              </FooterList>
            </Grid>
          ))}
        </Grid>
        <hr />
        <CopyrightsWrapper>
          <Logo imageUrl="/images/logo.svg" />
          <Typography variant="body1">
            © {new Date().getFullYear()} DF
          </Typography>
        </CopyrightsWrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
