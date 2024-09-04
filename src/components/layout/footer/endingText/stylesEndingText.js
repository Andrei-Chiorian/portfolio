import styled from "styled-components";

export const StylesEndingText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 265px;

  .endingInfo-info-container {  
    overflow-y: hidden;
    max-height: 500px;
  }

  p {
    color: ${(props) => props.theme.footerText};
    text-align: justify;
    line-height: 26px;
  }

  .endingText-icons-container {
    margin-top: 20px;
    display: flex;
    gap: 15px;
  }

  .endingText-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    height: 50px;
    width: 50px;    
    color: #333;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    background-color: ${(props) => props.theme.locationIconBg};    
    transition: 0.3s;   
  }
  
  .linkedIn-icon-container {    
    background-color: white;
    width: 35px;
    height: 35px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-left: 8px;
    background-color: #0E76A8;
    transition: 0.3s;   
  }

  .gitHub-icon-container {
    margin-left: 9px;
    background-color: black;
    border-radius: 100%;    
    height: 32px;
    width: 32px;   
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .whatsApp-icon-container {
    margin-left: 15px;    
    background-color: white;
    border-radius: 100%;    
    height: 20px;
    width: 20px;       
    display: grid;
    align-content: center;
    justify-content: center;
  }

  .whatsApp-span{
    gap: 15px;
  }
  
  #linkedIn-icon {
    color: white;          
  }

  #whatsApp-icon {    
    color: #0BC143;
    height: 35px;
    width: 35px;
  
  }

  #gitHub-icon {    
    color: white;
    height: 35px;
    width: 35px;

  }
  

  .endingText-icon span {
    width: 0px;
    overflow-x: hidden;    
    transition: 0.3s;  
  }

  .endingText-icon:hover {
    width: 150px;    
  }
  

  .endingText-icon:hover span{    
    width: 80px;
  }

  @media (max-width: 688px){
    & {
      justify-content: center;
      align-items: center;
    }
    .mobile-position-endingInfo svg{
      position: absolute;
      left: 193px;
    }
  }

  @media (min-width: 700px ) and (max-width: 1080px){
    .endingText-icon:hover {
      width: 130px;    
    }
    .endingText-icon span {
      font-size: 16px;
  }
  }
`;
