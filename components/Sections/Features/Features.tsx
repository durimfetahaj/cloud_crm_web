import React from "react";
import styled from "styled-components";
import { featuresData as data } from "data/dummy";
import ImageWithText from "../ImageWithText";

const Container = styled.section`
  margin: 0 auto;
  padding: 50px 12px;
  max-width: 1440px;
  scroll-margin-top: 5vh;
`;

type Props = {};

const UltimateFeatures: React.FC<Props> = () => {
  return (
    <Container id="features">
      <ImageWithText data={data.features} actionsUrl={data.actionsUrl} />
    </Container>
  );
};

export default UltimateFeatures;
