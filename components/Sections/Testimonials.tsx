import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TestimonialsContainer = styled.section`
  margin: 6rem 0rem;
  padding: 4rem 35rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const TestimonialItem = styled.div`
  display: flex;
  text-align: start;
  justify-content: center;
  gap: 30px;
`;

const TestimonialText = styled.p`
  margin-bottom: 1rem;
  line-height: 30px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  max-width: 600px;
`;
const ItemMedia = styled.div`
  padding-top: 40px;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  .role {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey.primary};
  }
`;

const ItemContent = styled.div`
  img {
    margin-bottom: 10px;
  }
`;

type TestimonialProps = {
  text: string;
  author: { name: string; role: string };
  avatarUrl: string;
  companyUrl: string;
};

const Testimonial = ({
  text,
  author,
  avatarUrl,
  companyUrl,
}: TestimonialProps) => {
  return (
    <TestimonialItem>
      <ItemMedia>
        <Image alt={author.name} src={avatarUrl} height={60} width={60} />
      </ItemMedia>
      <ItemContent>
        <Image alt={author.name} src={companyUrl} height={30} width={100} />
        <TestimonialText>{text}</TestimonialText>
        <TestimonialAuthor>
          <p className="name">{author.name}</p>
          <p className="role">{author.role}</p>
        </TestimonialAuthor>
      </ItemContent>
    </TestimonialItem>
  );
};

type TestimonialsProps = {
  testimonials: TestimonialProps[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  //todo: make two slides on large screen and one on small screen
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <TestimonialsContainer id="testimonials">
      <div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
