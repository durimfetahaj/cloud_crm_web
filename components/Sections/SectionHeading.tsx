import React from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  description?: string;
};

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.loose};
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
