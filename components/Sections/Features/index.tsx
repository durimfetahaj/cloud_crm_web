import styled from "styled-components";
import Features from "./Features";
import UltimateFeatures from "./UltimateFeatures";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const FeaturesSection = () => {
  return (
    <Container>
      <Features />
      <UltimateFeatures />
    </Container>
  );
};

export default FeaturesSection;
