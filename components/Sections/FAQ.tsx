import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import { faqSectionData as data } from "data/dummy";
import { Grid } from "@mui/material";

const FaqContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 768px) {
  }

  hr {
    border-top: 2px solid;
    max-width: 80%;
    margin: 40px 0px;
  }
`;

const Faq = () => {
  return (
    <FaqContainer id="faq">
      <SectionHeading
        title={data.heading.title}
        description={data.heading.description}
      />
      <Grid container>
        {data.questions?.map((question, index) => (
          <Grid item xs={12} md={6} key={index}>
            <SectionHeading
              title={question.question}
              description={question.answer}
              fontSize="medium"
              style={{ textAlign: "left", maxWidth: "80%", marginBottom: 0 }}
            />
            <hr />
          </Grid>
        ))}
      </Grid>
    </FaqContainer>
  );
};

export default Faq;
