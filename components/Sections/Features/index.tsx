import { featuresData } from "data/dummy";
import styled from "styled-components";
import Feature from "../ImageWithText";
import UltimateFeatures from "./UltimateFeatures";

const FeaturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1440px;
  scroll-margin-top: 10vh;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const Features = () => {
  return (
    <>
      <FeaturesContainer id="features">
        {featuresData.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </FeaturesContainer>
      <UltimateFeatures />
    </>
  );
};

export default Features;
