import styled from "styled-components";

type ButtonProps = {
  outlined?: boolean;
  fullWidth?: boolean;
  text?: boolean;
  primary?: boolean;
  onClick?: () => void;
};

const Button = styled.button<ButtonProps>`
  background-color: ${({ outlined, text, primary, theme }) =>
    (primary && theme.colors.secondary.main) ||
    (text && "transparent") ||
    (outlined && "transparent")};
  color: ${({ text, theme }) =>
    text ? theme.colors.secondary : theme.colors.common.white};
  border: ${({ outlined, theme }) =>
    outlined ? `2px solid ${theme.colors.border}` : "none"};
  border-radius: 5px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  ${({ fullWidth }) => fullWidth && `width: 100%;`}

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default Button;
