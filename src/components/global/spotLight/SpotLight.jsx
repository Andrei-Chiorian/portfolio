import React, { useState, useEffect } from "react";
import styled from "styled-components";



const SpotlightWrapper = styled.div`
  position: relative;
  background-color: #1e1b4b;
`;


const LightEffect = styled.div`
  position: fixed;
  pointer-events: none;
  width: 400px; 
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.027) 10%, 
    rgba(255, 255, 255, 0.027) 30%,
    transparent 60%
  );
  border-radius: 50%;
  mix-blend-mode: screen;
  transition: transform 0.07s ease-out;
`;

const Spotlight = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
   
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <SpotlightWrapper>
      <LightEffect
        style={{        
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`, // Ajuste por tamaño más grande
        }}
      />
      {children}
    </SpotlightWrapper>
  );
};

export default Spotlight;
