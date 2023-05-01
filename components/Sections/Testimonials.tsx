import styled from "styled-components";

const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const TestimonialsHeading = styled.h2`
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-size: var(--font-size-md);
`;

const TestimonialsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TestimonialItem = styled.li`
  margin: 2rem;
`;

const TestimonialText = styled.p`
  margin-bottom: 1rem;
  font-size: var(--font-size-sm);
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  font-size: var(--font-size-xs);
`;

type TestimonialProps = {
  text: string;
  author: string;
};

const Testimonial = ({ text, author }: TestimonialProps) => {
  return (
    <TestimonialItem>
      <TestimonialText>{text}</TestimonialText>
      <TestimonialAuthor>{author}</TestimonialAuthor>
    </TestimonialItem>
  );
};

type TestimonialsProps = {
  testimonials: TestimonialProps[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <TestimonialsContainer>
      <TestimonialsHeading>What our clients say</TestimonialsHeading>
      <TestimonialsList>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </TestimonialsList>
    </TestimonialsContainer>
  );
};

export default Testimonials;
