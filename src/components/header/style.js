import styled from "styled-components";

export const Header = styled.header`
        display: flex;
        height: 70px;
        padding: 10px;
        justify-content: space-between;
        transition: 0.3s ease-in;
        background: ${props => props.theme.headerBackground};
        color: ${props => props.theme.color};

    
`;
export const Img = styled.img`
        width: 150px;
        height: 50px;
        filter: drop-shadow(15px 10px 4px #232323);
`;

export const ImgNav = styled.img`
        width: 150px;
        height: 50px;
        transition: 0.3s ease-in;
        filter: drop-shadow(10px 8px 5px #232323);

        &:hover{
                transform: scale(1.05);
                filter: drop-shadow(10px 10px 4px rgb(182, 182, 182));
        }
`;

export const EnterCart = styled.div`
        cursor: pointer;
`;

export const CartDiv = styled.div`
        width:50%;
        z-index: 1;

`;

export const Button = styled.button`
        background: transparent;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: 600;

        &:hover{
                border-bottom: 1px solid ;
        }
`;