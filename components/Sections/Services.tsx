import React from "react";
import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import { servicesSection as data } from "data/dummy";
import ImageWithText from "./ImageWithText";

const Container = styled.section`
  margin: 0 auto;
  padding: 50px 12px;
  max-width: 1260px;
  scroll-margin-top: 5vh;
`;

type Props = {};

const Beyond: React.FC<Props> = () => {
  return (
    <Container id="services">
      <SectionHeading title={data.heading} description={data.description} />
      <ImageWithText
        data={data?.features}
        actionsUrl={data?.actionsUrl}
        imageColumnSize={1}
        textColumnSize={3}
        imageSize="70px"
        fontSize="medium"
      />
    </Container>
  );
};

export default Beyond;
