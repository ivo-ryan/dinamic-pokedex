import styled from "styled-components";

export const IconContainer = styled.div`
            display: flex;
            width: 50%;
            justify-content: space-between;
            align-items: center;
            margin-left: 20px;
            color: ${props => props.theme.color};

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff ;
                padding: 0 8px;
                border-radius: 5px;
                color: green;
                font-weight: 600;
                font-size: 20px;
            }

            .remove{
                cursor: pointer;
                color: red;
                height: 30px;
                width: 25px;
                background-color: #fff;
                border-radius: 5px;
            }

            @media(max-width: 425px) {
                gap: 5px;
                span{
                    
                    font-size: 15px;
                    width: 15px;
                    height: 20px;
                }
                svg{
                    font-size: 10px;
                }

                .remove{
                    height: 20px;
                    width: 16px;
                }
            }
  
  `;

  export const InfoContainer = styled.div`
            display: flex;

           `

  export const ProductStyle = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            border: 1px solid black;
            border-radius: 8px;
            margin-top: 20px;
            height: 250px;
            width: 200px;
            background-color: #111;
            position:relative;
            z-index:0;
            transition: all .5s ease;


        &:before{
            content:'';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 1;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;


        }

        &:active{
            color:#000;
        }

        &:active&:after {
            background: transparent;
        }

        &:after{
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #ccc;
            left: 0;
            top: 0;
            border-radius: 10px;
        }
        @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
        }

            img{
                    width: 55%;
                    filter: drop-shadow( 5px 3px 4px #000);                 
            }

            @media(max-width: 425px) {
                height: 150px;
                min-width: 100px;

                img{
                    filter: drop-shadow(5px 10px 4px #232323)
                }
            }

`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 18px;
    color: black;

    @media(max-width: 425px) {
        font-size: 15px;
    }
`;

export const Id = styled.p`
    display: flex;
    justify-content: flex-end;
    width: 85%;
    color: orange;
    font-weight: 700;
    font-size: 20px;
    @media(max-width: 425px) {
        font-size: 15px;
    }
`;


export const AddAndRemove = styled.p`
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
        padding: 0 4px ;
        cursor: pointer;
        border-radius: 5px;
        background-color: #fff;

        svg{
            color: #000;
        }
`;