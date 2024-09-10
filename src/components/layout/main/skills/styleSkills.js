import styled from "styled-components";

export const StylesSkills = styled.div`

.container {
    max-width: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding: 0 40px;
    position: relative;
    clear: both;
}

.skills-main-title {
    width: 100%;
    max-width: 680px;
    height: auto;
    clear: both;
    text-align: center;
    margin: 0 auto;
}

.brush_1 {
    position: absolute;
    top: 300px;
    left: 0;
}

.brush_2 {
    position: absolute;
    top: 0;
    right: 0;
}

@media (max-width: 1600px) {
    .container {
        max-width: 1170px;
    }
    .dizme_tm_main_title {
        max-width: 550px;
    }
}

` 