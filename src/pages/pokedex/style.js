import styled from "styled-components";

export const Ul = styled.ul`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        list-style:none;
        gap: 10px;
        background: ${props => props.theme.divBackground};

        a{
            text-decoration: none;
        }

`;

export const PokedexContainer = styled.div`
        padding-top: 20px;
`;

export const Container = styled.div`
        height: 100vh;
        background: ${props => props.theme.divBackground};
        transition: 0.3s ease-in;
`;