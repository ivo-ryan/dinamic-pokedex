
import { useDispatch } from "react-redux"
import { addProductToCart } from "../../redux/cart/actions";
import { AddProduct,  Id, Li, Name } from "./style";
import { useContext } from "react";
import { ThemeContext } from "../../context";

export const ProductList = ({ id, sprites, name, types, moves, abilities , index}) => {

    const { theme } = useContext(ThemeContext)
    
    const dispatch = useDispatch();
    

    const handleProductCartToClick = () => {
          dispatch(addProductToCart({id, sprites, name, types, moves, abilities}))
    }

    return(
        
        <>
        
        <Li key={index} theme={theme}>
                            
                                <Id>#{id}</Id>
                      
                                
                                <img src={sprites?.other.dream_world.front_default } alt={name}/>

                                <Name>{name}</Name>
                
                                <AddProduct onClick={handleProductCartToClick} theme={theme}>Adicionar ao Carrinho</AddProduct>
                            </Li>


        </>
    )
} 