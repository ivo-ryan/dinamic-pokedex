import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

`;

export const Ul = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        list-style:none;
        gap: 10px;
        padding-top: 20px;

        a{
            text-decoration: none;
        }

        li{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            border: 1px solid black;
            border-radius: 8px;
            width: 200px;
            height: 200px;
           
            img{
                width: 90px;
                height: 90px;
            }

          
        }
`;


export const ButtonViewMore = styled.button`
           margin: 10px;
           padding: 10px;
           border-radius: 10px;
           border: none;
           font-weight: 700;
           font-size: 16px;
           background-color: rgb(251, 84, 23);
           cursor: pointer;          
`;

export const Container = styled.div`    
        transition: 0.3s ease-in; 
        min-height: 100vh; 
        background: ${props => props.theme.divBackground};
        
`;

export const PokemonsContainer = styled.div`         
            text-align: center;
            
`;
