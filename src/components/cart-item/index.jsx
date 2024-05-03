import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {BiXCircle} from 'react-icons/bi'
import { AddAndRemove, IconContainer, Id, InfoContainer, Name, ProductStyle } from "./style"
import { useDispatch } from "react-redux";
import { decreaseProduct, increaseProduct, removeProductToCart } from "../../redux/cart/actions";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export const CartItem = ({ product }) => {


    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext)

    const handleRemoveProducts = () => {
        dispatch(removeProductToCart(product.id))
    }

    const handleIncreaseProduct = () => {
        dispatch(increaseProduct(product.id))
    }

    const handleDecreaseProduct = () => {
        dispatch(decreaseProduct(product.id))
    }

    return (
        <InfoContainer>
            <ProductStyle key={product.id}>

                <Id>#{product.id}</Id>
                
                <img src={product.sprites?.other.dream_world.front_default} alt={product.name} />

                <Name >{product.name}</Name>
            </ProductStyle>

            <IconContainer theme={theme}>
                <AddAndRemove onClick={handleDecreaseProduct}>

                    <AiOutlineMinus  />

                    </AddAndRemove>

                    <span>{product.quantity}</span>
                    <AddAndRemove  onClick={handleIncreaseProduct}>
                    <AiOutlinePlus  />
                    </AddAndRemove>

                <BiXCircle onClick={handleRemoveProducts} className="remove"/>

            </IconContainer>

        </InfoContainer>
    )

}