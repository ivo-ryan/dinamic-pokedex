import styled from 'styled-components';

export const LoadingContainer = styled.div`
            svg{
    text-align: center;
    font-size: 60px;
    color: rgb(43, 140, 231);
    animation: rotate 1.5s linear infinite;
    margin: 20px 0;
    filter: drop-shadow(0 0 5px rgb(43, 140, 231));
   
}

@keyframes rotate {
    from{
        -webkit-transform: rotate(0deg);
    }

    to{
        -webkit-transform: rotate(360deg);
    }
}
`;