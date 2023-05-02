import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const AboutTitle = styled.h2`
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  max-width: 1200px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non quam
        vitae augue semper feugiat vel vitae augue. Suspendisse potenti. Sed non
        libero vitae purus vehicula laoreet at at nisl. Integer et justo vitae
        odio luctus bibendum. Nulla facilisi. Proin ultricies sapien vitae
        tincidunt congue. Sed a mi enim. Integer interdum augue vel leo
        imperdiet pretium. Sed auctor neque vel lectus fringilla, eu malesuada
        sapien molestie. Donec quis libero malesuada, pharetra elit vitae,
        rhoncus urna. Vestibulum vel pellentesque enim.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
