import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  h5{
    font-size: 14px;
    color: #FFFFFF;
    position: fixed;
    top: 12px ; left: 12px;
  }

  h1.top{
    font-size: 64px;
    color: #FFFFFF;
    opacity: 0;
  }

  div.container-circle{
    height: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    width: 224px;
    min-width: 224px;
    background-color: teal;

    div.circle{
      height: 64px;
      width: 64px;
      border-radius: 50%;
      background-color: #000000;
      position: absolute;
    }
  }
`;

export const Section = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  position: relative;

  &.border{
    border-top: 1px solid #F3F3F3;
    border-bottom: 1px solid #F3F3F3;
  }

  h1.title{
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    margin-left: 5vw;
    margin-bottom: 10vh;
    color: white;
  }

  div.line{
    width: 190vw;
    height: 1px;
    background-color: white;
    margin-bottom: 8vh;
    margin-left: 5vw;
    margin-right: 5vw;
    display: none;
    flex-direction: row;
    align-items: center;
    position: relative;

    div.before{
      width: 98%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #2950ff;
    }

    div.square{
      height: 12px;
      width: 12px;
      position: absolute;
      background-color: white;
      left: 0;
      top: -6px;

      &.marked{
        background-color: #2950ff;
      }
    }

    div.ball{
      height: 12px;
      width: 12px;
      position: absolute;
      border-radius: 50%;
      background-color: white;
      left: 25vw;
      top: -6px;

      &.marked{
        background-color: #2950ff;
      }
    }

    div.end{
      height: 18px;
      width: 1px;
      position: absolute;
      border-radius: 50%;
      background-color: white;
      right: 0;
      top: -9px;

      &.marked{
        background-color: #2950ff;
      }
    }
  }

  div.content{
    width: 90%;
    display: flex;
    justify-content: space-between;
    div.text{
      display: flex;
      flex-direction: column;
      gap: 2px;

      h2{
        font-size: 32px;
        color: #FFFFFF;
        margin: 0;
        font-weight: 400;
      }
    }
  }
`;

export const Section2 = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;

  div.content{
    width: 90%;
    display: flex;
    justify-content: space-between;
    div.text{
      display: flex;
      flex-direction: column;
      gap: 2px;

      h2{
        font-size: 32px;
        color: #FFFFFF;
        margin: 0;
        font-weight: 400;
        opacity: 0;
        margin-top: 40;
      }
    }
  }


`;

export const Scroller = styled.div`
  width: 200vw;
  min-width: 200vw;
  height: 72vh;
  gap: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  position: relative;

  &::before{
    content: '';
    width: 190vw;
    height: 1px;
    background-color: #BCBCBC;
    position: absolute;
    top: -32px;
    left: 5vw;
  }

  div.square{
    height: 12px;
    width: 12px;
    position: absolute;
    background-color: white;
    left: 5vw;
    top: calc(-32px - 6px);

    &.marked{
      background-color: #2950ff;
    }
  }

  div.ball{
    height: 12px;
    width: 12px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
    left: 30vw;
    top: calc(-32px - 6px);

    &.marked{
      background-color: #2950ff;
    }
  }

  div.end{
    height: 18px;
    width: 1px;
    position: absolute;
    background-color: white;
    right: 5vw;
    top: calc(-32px - 9px);

    &.marked{
      background-color: #2950ff;
    }
  }

  div.line-marked{
    height: 1px;
    width: 48%;
    max-width: 190vw;
    border-radius: 50%;
    position: absolute;
    background-color: #2950ff;
    left: 5vw;
    top: -32px;
  }

  &::after{
    content: 'Trilha empresarial NWB';
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    position: absolute;
    top: -104px;
    left: 5vw;
  }

  div.panel{
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    gap: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    div.text{
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 156px;


      h4{
        font-size: 12px;
        font-weight: 300;
        color: white;
        margin: 0;
      }

      h2{
        font-size: 28px;
        font-weight: 400;
        color: white;
        margin: 0;
      }
    }
  }
`;
