import { StyledButton } from './Button.styled';

export const Button = ({
  icon = null,
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {icon}
      {children}
    </StyledButton>
  );
};
