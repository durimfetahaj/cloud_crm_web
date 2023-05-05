import { Typography } from "@mui/material";
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
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    opacity: 0.7;
  }
`;

function SectionHeading({ title = "", description = "" }: Props) {
  return (
    <Wrapper>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Wrapper>
  );
}

export default SectionHeading;
