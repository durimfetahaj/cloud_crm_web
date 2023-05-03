import styled from "styled-components";
import Image from "next/image";
import Button from "@/Button";
import PlayIcon from "../../public/icons/Hero/PlayIcon.svg";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 12px 0px 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  height: 90vh;
  @media (max-width: 768px) {
    height: 60vh;
    padding-top: 0px;
  }
`;

const HeroContent = styled.div`
  color: ${({ theme }) => theme.colors.background};
  max-width: 700px;
`;

const HeroHeading = styled.h1`
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: 1rem;
  }
`;

const HeroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  ${Button} {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const HeroMedia = styled.div`
  margin-bottom: -30vh;

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
        <HeroHeading>
          Cloud CRM Software for entry level business enterprise
        </HeroHeading>
        <HeroText>A simple and powerful erp management tools</HeroText>
        <HeroActions>
          <Button>Try free trial</Button>
          <Button outlined>
            Discover video <PlayIcon />
          </Button>
        </HeroActions>
      </HeroContent>
      <HeroMedia>
        <Image
          src="/images/Hero/dashboard-bg.png"
          alt="hero-media"
          width={500}
          height={500}
          unoptimized={true}
          priority
        />
      </HeroMedia>
    </HeroContainer>
  );
};

export default Hero;
