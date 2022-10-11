import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatSection = styled.section`
  width: 500px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.08),
    0px 10px 10px rgba(0, 0, 0, 0.12);
`;

export const StatTitle = styled.h2`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  width: 100px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-align: center;
  color: ${p => p.theme.colors.white};
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Percentage = styled.span`
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;
