import styled from "styled-components";
import Image from "next/image";
import PlayIcon from "../../public/icons/Hero/PlayIcon.svg";
import { Button, Typography } from "@mui/material";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 12px 0px 12px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  height: 90vh;

  @media (max-width: 768px) {
    height: 60vh;
    padding-top: 0px;
  }
`;

const HeroContent = styled.div`
  color: ${({ theme }) => theme.palette.background};
  max-width: 700px;
`;

const HeroHeading = styled(Typography)`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const HeroText = styled(Typography)`
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.grey[400]};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  button {
    &:first-of-type {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: #fff;
    }

    &:last-of-type {
      border-color: #ffffff24;
      color: #fff;
    }
  }
`;

const HeroMedia = styled.div`
  margin-bottom: -30vh;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: -20vh;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroHeading variant="h1">
          Cloud CRM Software for entry level business enterprise
        </HeroHeading>
        <HeroText variant="body1">
          A simple and powerful erp management tools
        </HeroText>
        <HeroActions>
          <Button variant="contained">Try free trial</Button>
          <Button endIcon={<PlayIcon />} variant="outlined">
            Discover video
          </Button>
        </HeroActions>
      </HeroContent>
      <HeroMedia>
        <Image
          src="/images/Hero/dashboard-bg.png"
          alt="hero-media"
          width={500}
          height={500}
          priority
        />
      </HeroMedia>
    </HeroContainer>
  );
};

export default Hero;
