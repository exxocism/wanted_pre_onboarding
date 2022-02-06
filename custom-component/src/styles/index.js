import styled from 'styled-components';

export const Box = styled.div`
  width: 90%;
  height: 20rem;
  /* text-align: center; */
  margin: 1rem auto;
  border-radius: 10px;
  border: 1px solid rgb(184, 184, 184);
  background-color: white;
  box-shadow: 1px 1px 3px rgb(210, 210, 210);
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  float: left;
  margin: 10px;
  /* color: #4000c7; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
`;

export const CustomComponentTitle = styled.div`
  font-size: 3rem;
  margin: 1rem;
  text-align: center;
  color: #4000c7;
  font-family: 'Raleway', sans-serif;
`;
