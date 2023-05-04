import styled from "styled-components";
import React from "react";
import { Button, Grid } from "@mui/material";
import Image from "next/image";

const Container = styled(Grid)`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

const ImageWrapper = styled(Grid)<{ imageSize: string }>`
  display: flex;
  justify-content: center;
  img {
    width: ${({ imageSize }) => imageSize && imageSize};
    height: ${({ imageSize }) => imageSize && imageSize};
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const TextWrapper = styled(Grid)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
  }

  h3 {
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: 500;
    line-height: 55px;
    letter-spacing: -1px;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: 400;
    line-height: 36px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px;
    width: 100%;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

type FeatureProps = {
  imageUrl: string;
  heading: string;
  text: string;
  actionsText: string;
};

type ImageWithTextProps = {
  data: FeatureProps[];
  md?: number;
  imageSize?: string;
  actionsUrl: string;
};

const ImageWithText = ({
  data,
  md = 6,
  imageSize = "100%",
  actionsUrl,
}: ImageWithTextProps) => {
  return (
    <Container container columnSpacing={3} rowSpacing={12}>
      {data?.map(({ imageUrl, heading, text, actionsText }, index) => (
        <React.Fragment key={index}>
          <ImageWrapper item xs={12} md={md} imageSize={imageSize}>
            <Image src={imageUrl} alt={heading} height="50" width="50" />
          </ImageWrapper>
          <TextWrapper item xs={12} md={md}>
            <h3>{heading}</h3>
            <p>{text}</p>
            <Button
              endIcon={
                <Image src={actionsUrl} alt={heading} height="14" width="14" />
              }
            >
              {actionsText}
            </Button>
          </TextWrapper>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default ImageWithText;
