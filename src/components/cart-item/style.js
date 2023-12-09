import styled from "styled-components";

export const IconContainer = styled.div`
            display: flex;
            width: 50%;
            justify-content: space-between;
            align-items: center;
            margin-left: 20px;

            p span {
                  padding: 0 5px;
            }
  `;

  export const InfoContainer = styled.div`
            display: flex;

            p{
                svg{
                    color: white;
                }
            }

            span{
                color: green;
                font-weight: 700;
                font-size: 25px;
            }

            .remove{
                color: red;
                height: 30px;
                width: 25px;
            }

            @media(max-width: 425px) {
                span{
                    font-size: 15px;
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
            background: white;

            img{
                    width: 140px;
                    height: 140px;
                    filter: drop-shadow(15px 10px 4px #232323);                 
            }

            @media(max-width: 425px) {
                height: 150px;
                width: 120px;

                img{
                    width: 80px;
                    height: 80px;
                    filter: drop-shadow(5px 10px 4px #232323)
                }
            }

`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 18px;

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