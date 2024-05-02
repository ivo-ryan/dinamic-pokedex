import { useContext, useMemo, useState } from "react";
import { Cart } from "../cart";
import { Button, EnterCart, Header, Img, ImgNav, ThemeContainer } from "./style";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";
import { ThemeButton } from "../theme-button";
import  logo  from "../../assets/logo.png";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import Pokebola from '../../assets/pokebola.png';


export const Navbar = ( { hide, hideProfile } ) => {

    const [ cartIsInvisible, setCartIsInvisible ] = useState('');
    const { theme } = useContext(ThemeContext)



    const { products } = useSelector(rootReducer => rootReducer.cartReducer) ;

    const productsCount = useMemo(()=> {
        return products.reduce((acc, curr) => acc + curr.quantity, 0);
    },[products]);

    const handleCartClick = () => {
        setCartIsInvisible(true)
    }
  
    return (
        <Header theme={theme}>

            { hide || hideProfile ? null : < Img src={logo} alt="Logo Pokedex"/> }

            {hide &&
            (<Link to={"/"}>
                 <ImgNav  src={logo} alt="Logo Pokedex"/>
            </Link>
           )}

            {hideProfile &&
            (<Link to={"/pokedex"}>
                 <ImgNav  src={logo} alt="Logo Pokedex"/>
            </Link>
           )}
               

            <ThemeContainer theme={theme}>

             <Cart isVisible={cartIsInvisible} setIsVisible={setCartIsInvisible}/>

          {hide || hideProfile ? <div></div> : (

            <Link to={"/pokedex"}>
            <Button >
            <p>Pokedex</p>

            <img src={Pokebola} alt="pokebola" />
            </Button>
            </Link>
          )}
           
          
        { hide || hideProfile ? <div></div> : (
        <EnterCart onClick={handleCartClick} >
            <p> {productsCount}</p>
            <AiOutlineShoppingCart/> 
           </EnterCart>)}

           <ThemeButton/>
           
            </ThemeContainer>

        </Header>
    )
}