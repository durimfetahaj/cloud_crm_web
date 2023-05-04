import styled, { css } from "styled-components";

interface ButtonProps {
  outlined?: boolean;
  fullWidth?: boolean;
  text?: boolean;
  primary?: boolean;
  onClick?: () => void;
}

const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;

  ${({ text, theme }) =>
    text &&
    css`
      background-color: transparent;
      color: ${theme.colors.secondary.main};
      border: none;
    `}

  ${({ outlined, theme }) =>
    outlined &&
    css`
      background-color: transparent;
      color: ${theme.colors.common.white};
      border: 2px solid ${theme.colors.border.main};
    `}

  ${({ primary, theme }) =>
    primary &&
    css`
      background-color: ${theme.colors.secondary.main};
      color: ${theme.colors.common.white};
      border: none;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default Button;
