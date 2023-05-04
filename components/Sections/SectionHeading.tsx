import React from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  description?: string;
};

const Wrapper = styled.div`
  text-align: center;

  h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.loose};
    opacity: 0.7;
  }
`;

function SectionHeading({ title = "", description = "" }: Props) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </Wrapper>
  );
}

export default SectionHeading;
