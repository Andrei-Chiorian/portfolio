import styled from "styled-components";

export const StylesProcess = styled.div`
    display: block;
    .container {
        max-width: 1400px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        padding: 0 40px;

        clear: both;
    }

    .list {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
    }

    .list ul {
        margin: 0 0 0 -70px;
        list-style-type: none;
    }

    .list ul li {
        margin: 0 0 70px 0;
        width: 33.3333%;
        float: left;
        padding-left: 70px;
        text-align: center;
        visibility: visible;
    }

    .list ul li .list_inner {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        position: relative;
    }
    .list .icon {
        margin-bottom: 30px;
    }

    .list .icon span {
        position: relative;
        display: inline-block;
    }

    .list .icon .brush {
        max-width: 125px;
        position: relative;
    }
    .list .icon .svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
    }

    .list .title {
        margin-bottom: 20px;
    }

    .list .title h3 {
        font-size: 24px;
        color: ${({theme}) => theme.text};
    }

    .list .text p {      
        color: ${({theme}) => theme.text};
        line-height: 24px;
    }

    @media (max-width: 1600px) {
        .container {
            max-width: 1170px;
        }
        .list .icon .brush {
            max-width: 90px;
        }
        .list .icon .svg {
            width: 45px;
            height: 45px;
        }
    }
`;
