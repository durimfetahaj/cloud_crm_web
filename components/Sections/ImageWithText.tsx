import Button from "@/Button";
import Image from "next/image";
import styled from "styled-components";
import PlayIcon from "public/icons/Features/play-icon.svg";

const Container = styled.div<{ rowReverse: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: ${({ rowReverse }) => (rowReverse ? "row-reverse" : "row")};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 50%;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 50%;
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
  }
`;

type FeatureProps = {
  content: { heading: string; text: string; actionsText: string };
  imageUrl: string;
  id: number;
  rowReverse?: boolean;
};

const ImageWithText = ({
  content,
  imageUrl,
  rowReverse = false,
}: FeatureProps) => {
  return (
    <Container rowReverse={rowReverse}>
      <ImageWrapper>
        <Image alt={content.heading} src={imageUrl} height={60} width={60} />
      </ImageWrapper>
      <TextWrapper>
        <h3>{content.heading}</h3>
        <p>{content.text}</p>
        <Button text>
          {content.actionsText} <PlayIcon />
        </Button>
      </TextWrapper>
    </Container>
  );
};

export default ImageWithText;
