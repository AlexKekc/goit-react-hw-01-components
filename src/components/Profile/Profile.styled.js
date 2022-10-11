import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.08),
    0px 10px 10px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  display: flex;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.gray};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primaryText};

  svg {
    display: block;
    margin-right: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${p => p.theme.colors.secondaryText};
  }
`;

export const Tag = styled.p`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};

  svg {
    display: block;
    margin-right: ${p => p.theme.space[2]}px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${p => p.theme.colors.primaryText};
  }
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};

  svg {
    display: block;
    margin-right: ${p => p.theme.space[2]}px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${p => p.theme.colors.primaryText};
  }
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.lightGray};
`;

export const StatsItem = styled.li`
  width: 100px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => `1px dashed ${p.theme.colors.gray}`};
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.gray};
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
