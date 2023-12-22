import {  useSelector } from "react-redux";
import { CartAreItem, CartContainer, CartScopeArea } from "./style";

import { CartItem } from "../cart-item";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export const Cart = ({isVisible, setIsVisible}) => {
     
    const handleScopeClick = () => {
        setIsVisible( false)
    }

    const { products } = useSelector(rootReducer => rootReducer.cartReducer);

    const { theme } = useContext(ThemeContext)

    return(

        <CartContainer isVisible={isVisible} >
            <CartScopeArea onClick={handleScopeClick}/>
            <CartAreItem theme={theme}>
                <h3 theme={theme}>Seu Carrinho</h3>

                    {products.map(product => {
                        return (
                           <CartItem product={product}/>
                        )

                    })}


            </CartAreItem>
        </CartContainer>

    );
}