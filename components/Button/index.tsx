import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = styled.button<ButtonProps>`
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
`;

export default Button;
