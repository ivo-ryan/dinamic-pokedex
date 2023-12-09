import { useSelector } from "react-redux";
import { Navbar } from "../../components/header";
import { Container, PokedexContainer, Ul } from "./style";
import { PokedexItem } from "../../components/pokedex-item" ;
import { useContext } from "react";
import { ThemeContext } from "../../context";



export const Pokedex = () => {

    const { products } = useSelector(root => root.cartReducer);
    const { theme } = useContext(ThemeContext)

    return (

        <Container theme={theme} >

        <Navbar hide/>

        <PokedexContainer >

            <Ul theme={theme}>
                {products.map((pokemon, index) => {
                    return (
                        
                       <PokedexItem id={pokemon.id}
                                    moves={pokemon.moves}
                                    name={pokemon.name}
                                    types={pokemon.types}
                                    abilities={pokemon.abilities}
                                    sprites={pokemon.sprites}
                                    index={index}
                       />
                )})}
            </Ul>
        </PokedexContainer>

        </Container>

    )
}