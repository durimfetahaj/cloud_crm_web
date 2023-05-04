import {
  Button,
  Grid,
  GridItem,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import styled from "styled-components";
import PlayIcon from "public/icons/Features/play-icon.svg";
import React from "react";

const Container = styled(Grid)`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding: 0px 24px;
`;

const ImageWrapper = styled(GridItem)`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

const TextWrapper = styled(GridItem)`
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
  }
`;

type FeatureProps = {
  imageUrl: string;
  heading: string;
  text: string;
  actionsText: string;
  imageSize: string;
};

const ImageWithText = ({
  data,
  templateColumns = "repeat(2, 1fr)",
}: {
  data: FeatureProps[];
  templateColumns?: string;
}) => {
  // const columns = useBreakpointValue({
  //   base: "repeat(2, 1fr)",
  //   md: "repeat(1, 1fr)",
  // });

  return (
    <Container
      alignItems="flex-start"
      templateColumns={templateColumns}
      gap={30}
    >
      {data?.map(
        ({ imageUrl, imageSize, heading, text, actionsText }, index) => (
          <React.Fragment key={index}>
            <ImageWrapper w="100%">
              <Image
                boxSize={imageSize}
                objectFit="cover"
                src={imageUrl}
                alt={heading}
              />
            </ImageWrapper>
            <TextWrapper w="100%">
              <h3>{heading}</h3>
              <p>{text}</p>
              <Button
                rightIcon={<PlayIcon />}
                colorScheme="teal"
                variant="link"
              >
                {actionsText}
              </Button>
            </TextWrapper>
          </React.Fragment>
        )
      )}
    </Container>
  );
};

export default ImageWithText;
