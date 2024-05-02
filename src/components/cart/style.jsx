import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;

  `

  export const CartScopeArea = styled.div`
      width: 100vw;  
      z-index: 200;

  `

  export const CartAreItem = styled.div`
        background: ${props => props.theme.divBackground};
        position: fixed;
        height: 100%;
        padding:20px;
        margin: 0 20px;
        color: black;
        width: 400px;
        z-index: 200; 
        overflow: hidden scroll;

        &::-webkit-scrollbar {
            width: 12px;
          }
        
          &::-webkit-scrollbar-track {
            background: #1f75cc2f;
          }
        
          &::-webkit-scrollbar-thumb {
            background: rgb(28, 198, 62);
            height: 30px;
            border-radius: 50px;
          }

          @media (max-width: 425px) {
                width: 230px;
          }

          h3{
            color: ${props => props.theme.color}
          }

  `;