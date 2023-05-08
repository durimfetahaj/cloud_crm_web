import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import { faqSectionData as data } from "data/dummy";
import { Grid } from "@mui/material";

const FaqContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;

  hr {
    border-top: 2px solid;
    margin: 40px 0px;
    max-width: 90%;

    @media (max-width: 768px) {
      max-width: 100%;
    }
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
          <Grid item xs={12} md={6} key={index} px={"12px"}>
            <SectionHeading
              title={question.question}
              description={question.answer}
              fontSize="medium"
              style={{ textAlign: "left", marginBottom: 0, maxWidth: "90%" }}
            />
            <hr />
          </Grid>
        ))}
      </Grid>
    </FaqContainer>
  );
};

export default Faq;
