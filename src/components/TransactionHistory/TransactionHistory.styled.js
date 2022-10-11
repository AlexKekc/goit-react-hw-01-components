import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 600px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  border: ${p => `1px solid ${p.theme.colors.gray}`};

  & thead {
    font-size: ${p => p.theme.fontSizes.m};
    background-color: ${p => p.theme.colors.skyBlue};
  }

  & th {
    width: 200px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.white};
  }

  & td {
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    text-align: center;
    color: ${p => p.theme.colors.gray};
    border: ${p => `1px solid ${p.theme.colors.gray}`};
  }

  & tr:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.white};
  }
`;
