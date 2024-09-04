import styled from "styled-components";

export const StylesBubblesBg = styled.div`
  z-index: 0;  
  max-width: 100vh !important;
  overflow-x: hidden;

  & div {
    background-color: rgba(204, 251, 241, 0.1);    
    border-radius: 100%;
    position: absolute;    
    bottom: 0;
    z-index: 0;
    animation: animatebubbles 8s linear infinite;
  }

  & div:nth-child(1) {
    width: 20px;
    height: 15px;
    left: 10%;
    animation-duration: 8s;
  }

  & div:nth-child(2) {
    width: 40px;
    height: 35px;
    left: 15%;
    animation-duration: 14s;
  }

  & div:nth-child(3) {
    width: 14px;
    height: 11px;
    left: 40%;
    animation-duration: 12s;
  }

  & div:nth-child(4) {
    width: 45px;
    height: 40px;
    left: 50%;
    animation-duration: 17s;
  }

  & div:nth-child(5) {
    width: 45px;
    height: 40px;
    left: 65%;
    animation-duration: 19s;
  }

  & div:nth-child(6) {
    width: 30px;
    height: 28px;
    left: 85%;
    animation-duration: 16s;
  }

  & div:nth-child(7) {
    width: 15px;
    height: 12px;
    left: 22%;
    animation-duration: 11s;
  }

  & div:nth-child(8) {
    width: 15px;
    height: 12px;
    left: 30%;
    animation-duration: 9s;
  }

  & div:nth-child(9) {
    width: 30px;
    height: 28px;
    left: 85%;
    animation-duration: 12s;
  }

  & div:nth-child(10) {
    width: 30px;
    height: 30px;
    left: 90%;
    animation-duration: 11s;
  } 

  @keyframes animatebubbles {
    0% {
      width: 0;
      height: 0;
    }
    3% {
      width: 20px;
      height: 17px;  
    }
    50% {     
      opacity: 0.5;  
    }
    100% {
      transform: rotate(90deg);
      bottom: 1300vh;   
    }
  }
`;
