import { useContext, useState } from "react";
import { ButtonViewMore, Container, ContainerButton, PokemonsContainer, Ul } from "./style";
import { Navbar } from "../../components/header";
import { Products } from "../../components/products";
import { ThemeContext } from "../../context";
import { Loader } from "../../components/loader/loader";
import Pokebola from '../../assets/pokebola.png';


export const Home = ( ) => {
    
    const [ limit, setLimit ] = useState(10);
    const { theme } = useContext(ThemeContext);
    const [ isLoading, setIsLoading ] = useState(false)


    const handleLimit = () => {
        setLimit(limit + 10)
    }

    const handleResetList = () => {
        setLimit(limit - limit + 10)
    }


    return (
        
        <Container  theme={theme}>

            <Navbar />
           
        <PokemonsContainer >

            

            <Ul>
               <Products limit ={limit} setIsLoading={setIsLoading}/>
            </Ul>
  
        { isLoading && <Loader/> }

                 {limit < 1292 && 
                 (<ContainerButton>
                 <ButtonViewMore onClick={handleLimit}><p>View More</p> <img src={Pokebola} alt="pokebola" /></ButtonViewMore>
                 </ContainerButton>
                 ) }   
                

                {limit > 10 && (<ContainerButton>
                <ButtonViewMore onClick={handleResetList}><p> Reset list</p></ButtonViewMore>
                </ContainerButton>
                )}
             
        </PokemonsContainer>
                
        </Container>
    )

}