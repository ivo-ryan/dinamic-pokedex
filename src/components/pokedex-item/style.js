import styled from "styled-components";

export const  Li = styled.li`
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border: 1px solid black;
            border-radius: 8px;
            width: 200px;
            height: 200px;
            background: ${props => props.theme.cardBackground};
            color: ${props => props.theme.color};
            padding-bottom: 15px;
            position: relative;
            margin-bottom: 25px;
            transition: 0.3s ease-in;

            &:hover{

            }

            h4{
                padding: 10px 0;
            }

            p span + span{
                margin-left: 10px;
            }
            img{
                filter: drop-shadow(15px 15px 4px #232323);
                width: 80px;
                height: 80px;
            }

            span{
                font-weight: 600;
                border: 1px solid black;
                padding: 5px 8px;
                border-radius: 10px;
            }


           
`;

export const Id = styled.p`
            display: flex;
            justify-content: flex-end;
            width: 80%;
            font-weight: 700;
            color: orange;
            padding-top: 5px;
            font-size: 16px;
`;


export const Details = styled.p`
            display: flex;
            justify-content: center;
            width: 110px;
            font-size: 14px;
            font-weight: 600;
            background-color: orange;
            color: white;
            padding: 6px 5px;
            border-radius: 10px;
            position: absolute;
            z-index: 1;
            bottom: -9%;
            left: 24%;
            transition : 0.3s ease-in;

            &:hover{
                color: black;
                background: rgb(251, 84, 23);
            }
`;

export const Types = styled.p`
            padding-bottom: 15px;
`;