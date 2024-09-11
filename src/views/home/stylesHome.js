import styled from "styled-components";

export const StylesHome = styled.div`
    section {
        display: block;
        unicode-bidi: isolate;
        width: 100%;
        height: fit-content;
        clear: both;
        float: left;
    }

    @media (max-width: 1080px) {
        .brush_1 {
            display: none;
        }

        .brush_2 {
            display: none;
        }
    }
`;
