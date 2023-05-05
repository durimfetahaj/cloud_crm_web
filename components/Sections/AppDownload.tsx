import React from "react";
import styled from "styled-components";
import { appDownloadSectionData as data } from "data/dummy";
import ImageWithText from "./ImageWithText";

const Container = styled.section`
  margin: 0 auto;
  padding: 200px 12px;
  max-width: 1200px;
  scroll-margin-top: 5vh;
`;

type Props = {};

const UltimateFeatures: React.FC<Props> = () => {
  return (
    <Container>
      <ImageWithText data={data.appDownload} actionsData={data.actionsData} />
    </Container>
  );
};

export default UltimateFeatures;
