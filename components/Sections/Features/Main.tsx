import React from "react";
import styled from "styled-components";
import { featuresData as data } from "data/dummy";
import ImageWithText from "../ImageWithText";

const Container = styled.section`
  margin: 0 auto;
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
      <ImageWithText data={data.features} actionsUrl={data.actionsUrl} />
    </Container>
  );
};

export default UltimateFeatures;
