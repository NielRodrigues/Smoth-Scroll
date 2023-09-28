import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  div.content{
    height: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    width: 224px;
    min-width: 224px;

  div.circle{
    height: 64px;
    width: 64px;
    border-radius: 50%;
    background-color: #000000;
    position: absolute;
  }
  }
`;
