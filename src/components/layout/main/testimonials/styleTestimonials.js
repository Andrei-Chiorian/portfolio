import styled from "styled-components";

export const StylesTestimonials = styled.div`
    position: relative;

    .testi-main-title {
        width: 100%;
        height: auto;
        clear: both;
        text-align: center;
        margin: 0 auto;
    }

    .list_wrapper {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        position: relative;
    }

    .testi-main-title span {
        font-size: 24px;
        font-weight: 500;
        color: #f75023;
        font-family: Jost, sans-serif;
        display: inline-block;
        margin-bottom: 6px;
    }

    .testi-main-title h3 {
        font-size: 48px;
        line-height: 1.25;
        margin-bottom: 23px;
        color: ${({ theme }) => theme.text};
    }

    .testi-main-title p {
        color: ${({ theme }) => theme.text};
    }

    .list-wrapper {
        margin-top: 80px !important;
    }

    .list-wrapper .total {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        position: relative;
        margin-bottom: 200px;
    }

    .list-wrapper .total .in {
        width: 100%;
        max-width: 900px;
        text-align: center;
        margin: 0 auto;
    }

    .swiper {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        padding: 0 20px;
    }

    .in .icon {
        margin-bottom: 35px;
        text-align: center;
    }

    .svg {
        width: 65px;
        height: 65px;
        color: #f75023;
        fill: currentcolor;
    }

    .in .text {
        margin-bottom: 51px;
    }

    .in .text p {
        font-size: 30px;
        font-style: italic;
        line-height: 1.6;
        color: ${({ theme }) => theme.text};
    }

    .in .short {
        margin-bottom: 90px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .in .short .image {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }

    .in .short .image .main {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        border-radius: 8px;
    }

    .in .detail {
        text-align: left;
        padding-left: 25px;
    }

    .in .detail h3 {
        font-size: 24px;
        color: ${({ theme }) => theme.text};
        margin-bottom: 10px;
    }

    .in .detail span {
        font-size: 17px;
        color: ${({ theme }) => theme.text};
    }

    .swiper-pagination-bullet {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-color: #f75023;
        position: relative;
        margin: 0 12px !important;
        border-radius: 50%;
        cursor: pointer;
    }

    .swiper-pagination-bullet:before {
        position: absolute;
        content: "";
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border-radius: 100%;
        border: 2px solid #ffb324;
        transition: all 0.5s ease;
    }

    & .brush_1 {
        position: absolute;
        top: -120px;
        right: 20px;
    }

    & .brush_1 img {
        vertical-align: middle;
        overflow-clip-margin: content-box;
        overflow: clip;
        max-width: 100%;
    }

    .swiper {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        padding: 0 20px;
    }

    @media (max-width: 1080px) {
        .swiper {
            padding: 0 20px;
        }
    }

    @media (max-width: 1600px) {
        .testi-main-title {
            max-width: 550px;
        }

        .testi-main-title span {
            font-size: 22px;
        }

        .testi-main-title h3 {
            font-size: 38px;
            margin-bottom: 16px;
        }

        .in .text p {
            font-size: 19px;
        }

        .list-wrapper .total .in {
            max-width: 600px;
        }

        .in .detail h3 {
            font-size: 22px;
        }

        .in .short .image {
            width: 70px;
            height: 70px;
        }
    }
`;
