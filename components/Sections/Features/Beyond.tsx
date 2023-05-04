import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import { beyondFeaturesSection as data } from "data/dummy";
import ImageWithText from "../ImageWithText";

const Container = styled.section`
  margin: 0 auto;
  padding: 50px 12px;
  max-width: 1440px;
`;

type Props = {};

const Beyond: React.FC<Props> = () => {
  return (
    <Container>
      <SectionHeading title={data.heading} description={data.description} />
      <ImageWithText
        data={data?.features}
        actionsUrl={data?.actionsUrl}
        md={2}
        imageSize="70px"
      />
    </Container>
  );
};

export default Beyond;