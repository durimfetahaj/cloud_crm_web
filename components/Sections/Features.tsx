import styled from "styled-components";

const FeaturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 0px;
  }

  h3 {
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  p {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <Feature>
        <h3>Feature 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, magna ac consequat dapibus, sapien diam ultrices ante, nec
          molestie sapien libero vitae augue.
        </p>
      </Feature>
      <Feature>
        <h3>Feature 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, magna ac consequat dapibus, sapien diam ultrices ante, nec
          molestie sapien libero vitae augue.
        </p>
      </Feature>
      <Feature>
        <h3>Feature 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, magna ac consequat dapibus, sapien diam ultrices ante, nec
          molestie sapien libero vitae augue.
        </p>
      </Feature>
    </FeaturesContainer>
  );
};

export default Features;
