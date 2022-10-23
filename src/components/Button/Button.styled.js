import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p =>
    p.disabled ? p.theme.colors.gray : p.theme.colors.green};
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
  }
`;
