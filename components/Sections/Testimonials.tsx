import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from "@mui/material";

const TestimonialsContainer = styled.section`
  margin: 6rem 0rem;
  padding: 1rem;
  text-align: center;
  scroll-margin-top: 5vh;
  color: black;

  @media (min-width: 1440px) {
    padding: 4rem 20rem;
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
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  max-width: 250px;

  @media (min-width: 1440px) {
    max-width: 500px;
  }
`;

const ItemMedia = styled.div`
  padding-top: 40px;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
    margin-bottom: 12px;
  }
  .role {
    font-weight: 400;
    color: ${({ theme }) => theme.palette.grey[600]};
  }
`;

const ItemContent = styled.div`
  img {
    margin-bottom: 10px;
  }
`;

type TestimonialProps = {
  text: string;
  author: {
    name: string;
    role: string;
  };
  avatarUrl: string;
  companyUrl: string;
};

const Testimonial = ({
  text,
  author,
  avatarUrl,
  companyUrl,
}: TestimonialProps) => (
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

type TestimonialsProps = {
  testimonials: TestimonialProps[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const slidesToShow = isSmallScreen ? 1 : 2;

  const settings = React.useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      arrows: false,
    }),
    [slidesToShow]
  );

  return (
    <TestimonialsContainer id="testimonials">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>
    </TestimonialsContainer>
  );
};

export default Testimonials;
