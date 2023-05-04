import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import RcTabs from "@/Tabs";
import { ultimateFeaturesData } from "data/dummy";

const Container = styled.section`
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 50px 12px;

  @media only screen and (min-width: 1200px) {
    /* For screens with a minimum width of 1200px, set the padding to 200px */
    padding: 50px 200px;
  }
`;

type Props = {};

const UltimateFeatures: React.FC<Props> = () => {
  return (
    <Container>
      <SectionHeading
        title="Ultimate features in one dashboard"
        description="The most intuitive design toolbox to create your next project. From ideation to user testing."
      />
      <RcTabs tabs={ultimateFeaturesData} />
    </Container>
  );
};

export default UltimateFeatures;
