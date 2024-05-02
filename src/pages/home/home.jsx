import { useContext, useState } from "react";
import { ButtonViewMore, Container, PokemonsContainer, Ul } from "./style";
import { Navbar } from "../../components/header";
import { Products } from "../../components/products";
import { ThemeContext } from "../../context";
import { Loader } from "../../components/loader/loader";


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

                 {limit < 1292 && (<ButtonViewMore onClick={handleLimit}>View More</ButtonViewMore>) }   
                

                {limit > 10 && (<ButtonViewMore onClick={handleResetList}> Reset list</ButtonViewMore>)}
             
        </PokemonsContainer>
                
        </Container>
    )

}