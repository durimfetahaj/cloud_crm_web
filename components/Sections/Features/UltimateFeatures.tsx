import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import RcTabs from "@/Tabs";
import { ultimateFeaturesData as data } from "data/dummy";

const Container = styled.section`
  background: ${({ theme }) => theme.palette.primary.light};
  padding: 50px 12px;
  width: 100%;
`;

type Props = {};

const UltimateFeatures: React.FC<Props> = () => {
  return (
    <Container>
      <SectionHeading title={data.heading} description={data.description} />
      <RcTabs tabs={data.data} />
    </Container>
  );
};

export default UltimateFeatures;
