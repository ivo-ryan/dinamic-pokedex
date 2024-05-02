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
            background: rgb(47, 28, 101);
            padding-bottom: 15px;
            position: relative;
            margin-bottom: 25px;
            transition: 0.3s ease-in;

            &:hover{

            }

            h4{
                padding: 10px 0;
                color: #fff;
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
            padding-top: 10px;
            font-size: 16px;
`;


export const Details = styled.p`
            display: flex;
            justify-content: center;
            width: 110px;
            color: #efefef;
            cursor: pointer;
                background-color: #AA1DEF;
                    border-radius: 40px;
                    box-shadow: 0 0 10px #AA1DEF;
                    text-decoration: none;
                    padding: 4px 6px;
                    font-weight: 600;
                    font-size: 14px ;
                    transition: .5s ease-in;
                    position: absolute ;
                    z-index: 1;
                    bottom: -9%;
                    left: 24%;
                    border: none;
    
                    &:hover{
                        box-shadow: none;
                    }
`;

export const Types = styled.p`
            padding-bottom: 15px;
            color: white;
`;