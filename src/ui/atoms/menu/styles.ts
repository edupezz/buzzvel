import styled from "styled-components";

export const MenuContainer = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    grid-area: logoMenu;


    span {
        font-weight: 700;
        font-size: 180%;
        color: #0F172A;
        line-height: 1.3rem;
        margin-left: 1.5vw;
    }

    a {
        padding-left: 1vw;
        text-decoration: none;
        color: #0F172A;
        font-weight: 500;
    }

`