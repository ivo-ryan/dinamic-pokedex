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
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
           margin: 10px;
           padding: 10px;
           border-radius: 10px;
           border: none;
           
           cursor: pointer; 
           width: 150px ;
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
            opacity: 0;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;


        }

        &:active{
            color:#000;
        }

        &:active&:after {
            background: transparent;
        }

        &:hover&:before{
            opacity:1;
        }

        &:after{
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000;
            left: 0;
            top: 0;
            border-radius: 10px;
        }
        @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
        }


           p{
            font-weight: 700;
            font-size: 16px;
            color: #fff;
           }
           
           img{
            border-radius: 50%;
            width: 20%;
            animation: rotat 2s linear infinite ;
            filter: drop-shadow(0 0 5px red );

            @keyframes rotat {
                to{
                    transform: rotateZ(360deg);
                }
            }

           }

           @media (max-width: 375px) {
                width: 120px;
                p{
                    font-size: 14px;

                }
           }
`;

export const Container = styled.div`    
        transition: 0.3s ease-in; 
        min-height: 100vh; 
        background: ${props => props.theme.divBackground};
        
`;

export const PokemonsContainer = styled.div`       
            text-align: center;
            
`;

export const ContainerButton = styled.div`
            display: inline-block;
            padding: 20px  0 30px 0;
`;
