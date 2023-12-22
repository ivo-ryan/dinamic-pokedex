import styled from "styled-components";


export const ProfileContainer = styled.div`
            display: flex;          
            max-width: 550px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border: 1px solid black;
            border-radius: 10px;
            background: rgb(42, 19, 110);
            ul{
                list-style: none;
                width: 60%;
                text-align: center;
            }

            @media(max-width: 425px){
              width: 320px;
            }

            @media(max-width: 320px){
              width: 290px;
            }
`;


export const ContainerAbout = styled.div`
           display: flex;
           flex-direction: column;
           align-items: center;
           color: white;
           
           ul{
            overflow: hidden scroll;
            height: 100px;
            margin: 20px 0;

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
        }

`;

export const SectionContainer = styled.section`
            background: ${props => props.theme.divBackground};
            transition: 0.3s ease-in ;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
`;

export const Id = styled.p`
           color: orange;
           font-weight: 900;
           font-size: 35px;

           @media(max-width: 425px) {
            font-size: 25px;
            padding-top: 10px;
           }

`;

export const InfoContainer = styled.div`
        color: white;

           img{
            text-align: center;
            filter: drop-shadow(15px 15px 4px #232323);
            padding: 15px;
            width: 300px;
            height: 300px;

           }

           h3{
            text-align: center;
            padding: 10px 0;
            font-size: 50px;
           }

           @media(max-width: 425px){
            img{
            width: 250px;
            height: 250px;
            }

            h3{
              font-size: 40px;
            }
          }
`;

export const TypesContainer = styled.p`
          display: flex;
          jusyify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 20px;
          padding: 10px 0;

          span{
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px 8px;
            margin-left: 5px;
            background:rgb(69, 31, 183);

          }
`;

export const TypeName = styled.h4`
            color: red ;
            padding: 10px 0;
`;

