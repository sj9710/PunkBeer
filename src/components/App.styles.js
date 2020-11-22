import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  height: 750px;
  overflow: auto;
`;

export const Loading = styled.div`
  width: 200px;
  margin: 20px auto;
  text-align: center;
`;

export const CustomGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;
