import styled from '@emotion/styled';

const setBgColor = ({ friendStatus, theme }) => {
  if (friendStatus) {
    return theme.colors.green;
  }
  return theme.colors.red;
};

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.08),
    0px 10px 10px rgba(0, 0, 0, 0.12);

  & + li {
    margin-top: ${p => p.theme.space[3]}px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  width: 80px;
  margin-left: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  margin-left: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
