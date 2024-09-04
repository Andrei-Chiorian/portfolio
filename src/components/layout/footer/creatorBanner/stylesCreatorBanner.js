import styled from "styled-components";

export const StylesCreatorBanner = styled.div`
text-align: center;
color: ${props => props.theme.creatorColor};
margin-top: 15px; 

span {
    color: ${props => props.theme.creatorSpanColor} !important;
    font-weight: 600;
}
`