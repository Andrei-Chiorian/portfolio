import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --buttonEdge1: ${(props) => props.theme.buttonEdge1};
    --buttonEdge2: ${(props) => props.theme.buttonEdge2};
    --buttonEdge3: ${(props) => props.theme.buttonEdge3};
    --buttonEdge4: ${(props) => props.theme.buttonEdge4};
}

html {
  scrollbar-width: thin;
  scroll-behavior: smooth;
  max-width: 100vw !important;
  overflow-x: hidden;
}

*{
    margin: 0;
    padding: 0;   
    font-family: "Jost", sans-serif !important;
    font-weight: 400;
    font-style: normal;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    box-sizing: border-box;  
}

.titles{
    font-family: "Radio Canada Big", sans-serif !important;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 1.5em;
    color: ${(props) => props.theme.titles} !important;
    user-select: none;
    -webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;  

}

.subtitles{
    font-family: "Radio Canada Big", sans-serif !important;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    color: ${(props) => props.theme.text};
    user-select: none;
    -webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;  
}

.separator {
    width: 90px;
    margin: 5px 0px 20px 0px;   
    -webkit-box-shadow: 0px 0px 4px 0px  ${(props) =>
        props.theme.separatorShadowColor};
    -moz-box-shadow: 0px 0px 4px 0px  ${(props) =>
        props.theme.separatorShadowColor};
    box-shadow: 0px 0px 6px 3px  ${(props) => props.theme.separatorShadowColor};
    height: 0px;
    border: solid 1px ${(props) => props.theme.separatorColor};    
}

.sonner-toast {
  height: 50px !important;
  padding: 10px !important;
  width: 370px;
}

a{
    text-decoration: none;
}

.danger {
    color: rgb(184, 1, 1);
}

.warning {
    background-color: #ffc107 !important;
}  

.warning:hover {
    background-color:  #ffd148 !important; 
} 

.no-selectable {
    user-select: none; 
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none; 
}

.modals {
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;   
    padding: 0;
    margin: 0;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
    z-index: 99999 !important;
    overflow-y: auto;   
}


.success-button  {
  position: relative;
  background: transparent;
  border-radius: 8px;
  padding: 0px;
  border: none;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: deeppink;
  transition: filter 250ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.buttonShadow} ;
  border-radius: 14px;
  filter: blur(2px);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    var(--buttonEdge1) 0%,
    var(--buttonEdge2) 8%,
    var(--buttonEdge3) 92%,
    var(--buttonEdge4) 100%
  );
}

.front {
  display: block;
  position: relative;
  border-radius: 8px;
  background: ${(props) => props.theme.buttonBg};
  padding: 16px 32px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1rem;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.success-button:hover {
  filter: brightness(110%);
}

.success-button:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.success-button:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.success-button:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.success-button:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.success-button:focus:not(:focus-visible) {
  outline: none;
}

.readonly {
  pointer-events: none; 
}

tool-tip{
    position: absolute;
    z-index: 1;
    pointer-events: none;
    user-select: none;
    background-color: rgb(253, 251, 201);
    box-shadow: 0 0 10px black;
    padding: 10px;
    font-size: .10rem !important;
    font-weight: 600 !important;
    border-radius: 8px;
    top: 100%;
    left: 30%;
    opacity: 0;
    transition: opacity .3s ease;
    width: max-content;
    text-shadow: none;
    color: black;
}

tool-tip b{    
    font-weight: 500 !important;   
}

:has(> tool-tip){
    position: relative
}

:has(> tool-tip):hover tool-tip{
    opacity: 1;
}


.required-select__placeholder::before {
  content: '*';
  color: red; 
}

.orangeText {
  color: #f75023 !important;
}

.greenText {
    color: #1cbe59 !important;
}

.purpleText {
    color: #8067f0 !important;
}

@media (max-width: 1600px) {
  * {
        font-size: 16px;
  }
}

@media (max-width: 688px) {
  .separator {    
    margin: 5px auto 20px auto !important; 
}
}


`;
