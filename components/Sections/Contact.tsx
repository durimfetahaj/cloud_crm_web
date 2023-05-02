import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacing.xl};
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const ContactHeading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const ContactInput = styled.input`
  padding: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const ContactButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;

  &:hover {
    background-color: #0052cc;
  }
`;

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactHeading>Contact Us</ContactHeading>
      <ContactForm>
        <ContactLabel htmlFor="name">Name</ContactLabel>
        <ContactInput type="text" id="name" />

        <ContactLabel htmlFor="email">Email</ContactLabel>
        <ContactInput type="email" id="email" />

        <ContactLabel htmlFor="message">Message</ContactLabel>
        <ContactInput as="textarea" id="message" rows={4} />

        <ContactButton>Submit</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
