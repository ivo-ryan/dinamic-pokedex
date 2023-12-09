import styled from "styled-components";

export const Id = styled.p`
            display:flex;
            justify-content: flex-end;
            width: 80%;
            padding-top: 20px;
            font-size: 18px;
            font-weight: 800;
            color: orange;
`;

export const AddProduct = styled.button`
            background-color: orange;
            color: ${props => props.theme.color};
            border-radius: 30px;
            cursor: pointer;
            border: 0;
            padding: 10px;
            font-weight: 700;
            transition: 0.3s ease-in-out;
            margin-bottom: 20px;


`;

export const Name = styled.p`
            padding: 5px 0;
            font-weight: 700;

`;

export const Li = styled.li`
            background: ${props => props.theme.cardBackground};
            color: ${props => props.theme.color};
            transition: 0.3s ease-in;
`;
