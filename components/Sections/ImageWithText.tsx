import styled from "styled-components";
import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Container = styled(Grid)``;

const ImageWrapper = styled(Grid)<{ imageSize: string }>`
  display: flex;
  justify-content: center;
  img {
    width: ${({ imageSize }) => imageSize};
    height: ${({ imageSize }) => imageSize};
  }
`;

const TextWrapper = styled(Grid)`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    text-align: start;
  }

  h3 {
    margin-bottom: 20px;
    font-weight: 500;
    line-height: 55px;
    letter-spacing: -1px;
  }

  p {
    margin-bottom: 20px;
    font-weight: 400;
    line-height: 36px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      justify-content: flex-start;
    }
  }
`;

const LinkImgWrapper = styled.div`
  display: flex-wrap;
`;

type FeatureProps = {
  imageUrl: string;
  heading: string;
  text: string;
  actionsText?: string;
};

type ActionsDataProps = {
  imageSrc: string;
  linkSrc: string;
};

type ImageWithTextProps = {
  data: FeatureProps[];
  imageColumnSize?: number;
  textColumnSize?: number;
  imageSize?: string;
  actionsData: ActionsDataProps[];
  fontSize?: "small" | "medium" | "large";
};

const ImageWithText = ({
  data,
  imageColumnSize = 6,
  textColumnSize = 6,
  imageSize = "100%",
  actionsData,
  fontSize,
}: ImageWithTextProps) => {
  return (
    <Container container columnSpacing={3} rowSpacing={{ xs: 5, md: 12 }}>
      {data?.map(({ imageUrl, heading, text, actionsText }, index) => (
        <React.Fragment key={index}>
          <ImageWrapper item xs={12} md={imageColumnSize} imageSize={imageSize}>
            <Image src={imageUrl} alt={heading} height="50" width="50" />
          </ImageWrapper>

          <TextWrapper item xs={12} md={textColumnSize}>
            <Typography variant={fontSize === "medium" ? "h5" : "h3"}>
              {heading}
            </Typography>
            <Typography variant="body2">{text}</Typography>
            {actionsData.length > 1 ? (
              <LinkImgWrapper>
                {actionsData?.map(({ imageSrc, linkSrc }, id) => (
                  <a href={linkSrc} target="_blank" key={id}>
                    <Image
                      src={imageSrc}
                      alt={heading}
                      height="50"
                      width="160"
                    />
                  </a>
                ))}
              </LinkImgWrapper>
            ) : (
              <Button
                endIcon={
                  <Image
                    src={actionsData[0].imageSrc}
                    alt={heading}
                    height="14"
                    width="14"
                  />
                }
                href={actionsData[0].linkSrc}
              >
                {actionsText}
              </Button>
            )}
          </TextWrapper>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default ImageWithText;
