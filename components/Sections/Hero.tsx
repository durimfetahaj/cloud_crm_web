import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.background};
`;

const HeroHeading = styled.h1`
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: var(--font-size-lg);

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
    margin-bottom: 1rem;
  }
`;

const HeroText = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: var(--font-size-sm);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: var(--font-size-xs);
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroHeading>Welcome to my website</HeroHeading>
        <HeroText>This is a simple hero section created with Next.js</HeroText>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
