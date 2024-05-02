import styled from "styled-components";

export const Id = styled.p`
            display:flex;
            justify-content: flex-end;
            width: 80%;
            font-size: 18px;
            font-weight: 800;
            color: orange;
`;

export const AddProduct = styled.button`
            background-color: orange;
            color: #fff;
                cursor: pointer;
                background-color: #AA1DEF;
                    border-radius: 40px;
                    box-shadow: 0 0 10px #AA1DEF;
                    text-decoration: none;
                    padding: 4px 6px;
                    font-weight: 600;
                    font-size: 14px ;
                    transition: .5s ease-in;
                    border: none;
    
                    &:hover{
                        box-shadow: none;
                    }

`;

export const Name = styled.p`
            font-weight: 700;
            color: #fff;

`;

export const Li = styled.li`
            background-color: rgb(47, 28, 101);
            transition: 0.3s ease-in;
            max-width: 200px;
            height: 200px;
            padding: 10px 0;

            img{
                filter: drop-shadow( 5px 5px 3px #111);
            }
`;
