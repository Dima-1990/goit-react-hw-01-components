import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
  border: 2px solid black;
  width: 360px;
  border-collapse: collapse;
  margin: 40px auto;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border: 1px solid grey;
  }
  & th {
    background-color: green;
    font-weight: bold;
    border-bottom: 2px solid grey;
  }

  & tr:nth-of-type(odd) {
    background-color: lightgrey;
  }

  & tr:nth-of-type(even) {
    background-color: white;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }
`;
