import styled from "styled-components";

export const StylesMainLoader = styled.div`
  background: rgb(30, 27, 72);
  background: -moz-radial-gradient(
    circle,
    rgba(30, 27, 72, 1) 32%,
    rgba(48, 48, 48, 1) 100%,
    rgba(12, 74, 110, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(30, 27, 72, 1) 32%,
    rgba(48, 48, 48, 1) 100%,
    rgba(12, 74, 110, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(30, 27, 72, 1) 32%,
    rgba(48, 48, 48, 1) 100%,
    rgba(12, 74, 110, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e1b48",endColorstr="#0c4a6e",GradientType=1);
  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .name-text-loader {
    text-align: center;
  }

  .absolute {
    position: absolute;
  }

  .inline-block {
    display: inline-block;
  }

  .loader {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100vw;
  }

  .w-2 {
    width: 0.5em;
  }

  .dash {
    animation: dashArray 1.2s ease-in-out, dashOffset 1.2s linear;
  }

  .spin {
    animation: spinDashArray 1ms.2 ease-in-out infinite,
      spin 8s ease-in-out infinite, dashOffset 2.5s linear infinite;
    transform-origin: center;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }

    50% {
      stroke-dasharray: 0 359 1 0;
    }

    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes spinDashArray {
    0% {
      stroke-dasharray: 270 90;
    }

    50% {
      stroke-dasharray: 0 360;
    }

    100% {
      stroke-dasharray: 250 90;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 385;
    }

    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }

    12.5%,
    25% {
      rotate: 270deg;
    }

    37.5%,
    50% {
      rotate: 540deg;
    }

    62.5%,
    75% {
      rotate: 810deg;
    }

    87.5%,
    100% {
      rotate: 1080deg;
    }
  }
`;
