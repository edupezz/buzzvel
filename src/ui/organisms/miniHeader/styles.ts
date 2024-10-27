import styled from "styled-components";

export const MiniHeaderContainer = styled.div`
    
    width: 100%;
    background-color: slategray;
    display: grid;
    grid-template-rows: 1fr;
	grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
        "logoMenu  empty contactButton";

`