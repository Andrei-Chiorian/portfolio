import styled, { keyframes } from "styled-components";

const fadeInLayout = keyframes`
  0% {
    opacity: 0; 
  }
  100% {
    opacity: 1; 
  }
`;

export const StylesLayout = styled.div`
  --from-bg-color: ${(props) => props.theme.bgColorFrom};
  --to-bg-color: ${(props) => props.theme.bgColorTo};

  
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
  animation: ${fadeInLayout} 0.3s ease-in-out;
  background-image: linear-gradient(
    to bottom,
    var(--from-bg-color),
    var(--to-bg-color)
  );


  .main-section {
    flex: 1;    
  }
`;
