import { FaSpinner } from 'react-icons/fa';
import * as S from './style';

export const Loader = () => {
    return (
        <S.LoadingContainer>
            <FaSpinner/>
        </S.LoadingContainer>
    )
}