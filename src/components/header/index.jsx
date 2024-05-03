import { useContext, useMemo, useState } from "react";
import { Cart } from "../cart";
import { Button, EnterCart, Header, Img, ImgNav, ThemeContainer } from "./style";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";
import { ThemeButton } from "../theme-button";
import  logo  from "../../assets/logo.png";
import {AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai';
import Pokebola from '../../assets/pokebola.png';
import { BiXCircle } from "react-icons/bi";


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

    const viewDisplay = {
        view: 'flex',
        hidde: 'none'
    };

    const [ menu, setMenu ] = useState(true);
    const [ bx, setBx ] = useState(false);
    const [ display, setDisplay ] = useState(viewDisplay.hidde);
   
    const handleClickMenu = () => {
        if (menu === true) {
            setMenu(false);
            setBx(true);
            setDisplay(viewDisplay.view)
        }

        if (bx === true) {
            setBx(false);
            setMenu(true);
            setDisplay(viewDisplay.hidde)
        }
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

           {
            menu === true && (<AiOutlineMenu id='menu-icon'  onClick={() => handleClickMenu() } /> ) 
        }

        {        
            bx === true && (<BiXCircle className='bx-x'  onClick={() => handleClickMenu() }  /> )   
        }
       
               

            <ThemeContainer theme={theme} display={display}>

             <Cart isVisible={cartIsInvisible} setIsVisible={setCartIsInvisible}/>

             <li>


          {hide || hideProfile ? <div></div> : (
              
            <Link to={"/pokedex"}>
            <Button >
            <p>Pokedex</p>

            <img src={Pokebola} alt="pokebola" />
            </Button>
            </Link>
          )}
           
              </li>

              <li>

          
        { hide || hideProfile ? <div></div> : (
        <EnterCart onClick={handleCartClick} >
            <p> {productsCount}</p>
            <AiOutlineShoppingCart/> 
           </EnterCart>)}
              </li>

            
            <li>

           <ThemeButton/>
            </li>
           
            </ThemeContainer>

        </Header>
    )
}