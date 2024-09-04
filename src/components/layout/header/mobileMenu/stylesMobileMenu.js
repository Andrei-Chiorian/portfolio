import styled from "styled-components";



export const StylesMobileMenu = styled.div`

    .dropdown-menu {
        background-color: ${(props) => props.theme.headerBg};
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        display: block;
        animation: fadeIn .2s;
    }
  
    .dropdown-opened {        
        display: block !important;
    }

    .dropdown-inner {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        padding: 25px 40px;
    }

    .anchor_nav {
        margin: 0;
        list-style-type: none;
    }

    .anchor_nav li {
        margin: 0;
        float: left;
        width: 100%;
    }

    .anchor_nav .menu-item a {
        color: ${(props) => props.theme.text};
        text-decoration: none;  
        display: inline-block;
        padding: 0 0;
        font-family: Jost, sans-serif !important;
        font-weight: 500;  
        height: 30px;
    }

    .dropdown-inner ul li a.active-section{
        color: #f75023 !important;
    }

    .download-cv {
        padding-top: 15px;      
    }
    .download-cv a{
        text-decoration: none;  
        transition: all .3s ease;
        border: 2px solid #f75023;
        border-radius: 50px;
        padding: 10px 35px;
        position: relative;
        overflow: hidden;
        display: inline-block;
        background-color: #f75023 !important;
        
    }
    .download-cv a span{
        position: relative;
        z-index: 2;    
        font-size: 17px;
        font-weight: 500;
        color: ${(props) => props.theme.text};   
        
    }

    @keyframes fadeIn {
  from {
    opacity: 0; /* Comienza invisible */
  }
  to {
    opacity: 1; /* Termina completamente visible */
  }
}
    
    
`;
