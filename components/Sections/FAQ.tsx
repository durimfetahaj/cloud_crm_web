import styled from "styled-components";

const FaqContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const Question = styled.h3`
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-size: ${(props) => props.theme.fontSizes.md};
`;

const Answer = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const Faq = () => {
  return (
    <FaqContainer id="faq">
      <Question>What is your refund policy?</Question>
      <Answer>
        We offer a 30-day money back guarantee for all purchases. If you&apos;re
        not satisfied with your purchase for any reason, simply contact us
        within 30 days and we&apos;ll issue a full refund.
      </Answer>
      <Question>How can I cancel my subscription?</Question>
      <Answer>
        You can cancel your subscription at any time by logging in to your
        account and clicking the &ldquo;Cancel Subscription&rdquo; button.
      </Answer>
      <Question>Do you offer a free trial?</Question>
      <Answer>
        Yes, we offer a 14-day free trial for all new customers. Sign up today
        to get started!
      </Answer>
    </FaqContainer>
  );
};

export default Faq;
