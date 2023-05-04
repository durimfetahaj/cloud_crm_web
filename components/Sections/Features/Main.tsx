import React from "react";
import styled from "styled-components";
import { featuresData } from "data/dummy";
import ImageWithText from "../ImageWithText";

const Container = styled.section`
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 50px 12px;

  @media only screen and (min-width: 1200px) {
    /* For screens with a minimum width of 1200px, set the padding to 200px */
    padding: 50px 600px;
  }
`;

type Props = {};

const UltimateFeatures: React.FC<Props> = () => {
  return (
    <Container>
      <ImageWithText data={featuresData} />
    </Container>
  );
};

export default UltimateFeatures;
