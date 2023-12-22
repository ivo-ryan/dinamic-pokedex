import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { profileItem } from "../../redux/profile/action"
import { Li, Id, Details, Types } from "./style"
import { useContext } from "react"
import { ThemeContext } from "../../context"

export const PokedexItem = ({id, types, name, moves, abilities, sprites, index}) => {

    const { theme } = useContext(ThemeContext)

    const dispatch = useDispatch()

    const handleProfileClick = () => {
        dispatch(profileItem({id,types,name, moves, abilities, sprites}))
    }
    return (
        <>
                    <Li key={index} onClick={handleProfileClick} theme={theme}>
                        
                        <Id>#{id}</Id>
                        
                        <img src={sprites?.other.dream_world.front_default} alt={name}/>

                        <h4>{name}</h4>

                        <Types>
                            <span>{types[0]?.type.name}</span>

                            {types[1] && (<span>{types[1]?.type.name}</span>)}
                            
                        </Types>

                        <Link to={"/profile"}>
                        <Details>
                         View Details
                        </Details>
                        </Link>

                    </Li>
  
        </>
    )
} 