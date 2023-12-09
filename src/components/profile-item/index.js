import { useContext } from "react"
import { Navbar } from "../header"
import { ContainerAbout, Id, ProfileContainer, SectionContainer, InfoContainer, TypesContainer, TypeName } from "./style"
import { ThemeContext } from "../../context"

export const ProfileItem = ({ pokemon, moves , ability }) => {

    const { theme } = useContext(ThemeContext)

    return (

        <>
        <Navbar hideProfile/>
        <SectionContainer theme={theme}>

        <ProfileContainer>
        
        <InfoContainer>
            <Id>#{pokemon.id}</Id>

            <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name}/>

            <h3>{pokemon.name}</h3>

            <TypesContainer>
                <p>Types:</p>
                <span>{pokemon.types[0]?.type.name}</span>

                {
                    pokemon.types[1] && (
                        <span>{pokemon.types[1]?.type.name}</span>
                    )
                }
                
            </TypesContainer>
        </InfoContainer>
        <ContainerAbout>

            <h3>Movements</h3>

            <ul>
                {moves.map((data, index) => {
                    return(
                        <li key={index}> 
                            <p>
                                {data.move.name}
                            </p>
                        </li>
                    )
                })}
            </ul>

                <h3>Abilities</h3>
            <ul>
                {
                    ability.map((abilit, index) => {
                        return (
                            <li key={index}>
                                <TypeName>{abilit.data.name}</TypeName>

                                <p>
                                    {abilit.data.effect_entries[1].effect
                                    }
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        </ContainerAbout>
        </ProfileContainer>

        </SectionContainer>
        </>
    )
}