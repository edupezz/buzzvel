import styled from "styled-components";

export const ButtonContainer = styled.div`

  display: flex;
  width: auto;
  height: 5vh;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  border: solid medium #581C87;

    &:hover {
      background-color: firebrick;
    }

    &:active {
      background-color: darkblue;
    }

    grid-area: button;
  
`;
