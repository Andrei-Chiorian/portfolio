import styled from "styled-components";

export const StylesContact = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
   
    .contact-inputs-container {
        display: flex;
        flex-direction: column;
        gap: 14px;
        overflow-y: hidden;
    }

    .contact-inputs-container button{
        color: white;
    }

    .footer-contact-inputs {
        color: ${(props) => props.theme.footerText};
    }

    @media (max-width: 688px){
    .mobile-position-contact svg{
        position: absolute;
        left: 153px;
    }
  }
 
`