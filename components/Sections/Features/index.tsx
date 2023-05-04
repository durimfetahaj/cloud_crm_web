import Features from "./Main";
import UltimateFeatures from "./Ultimate";
import BeyondFeatures from "./Beyond";
import styled from "styled-components";

const Container = styled.div``;

const index = () => {
  return (
    <Container>
      <Features />
      <UltimateFeatures />
      <BeyondFeatures />
    </Container>
  );
};

export default index;
