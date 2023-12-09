import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { ProfileItem } from "../../components/profile-item"

export const Profile = () => {
    const {pokemon} = useSelector(root => root.profileReducer)
    const { abilities } = pokemon
    const { moves } = pokemon

    const [ ability, setAbility ] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const url = abilities.map(res => res.ability.url)
            const response  = await axios.all(url.map(res => axios.get(res)) ).then(res => res.map(details => details))
           
            setAbility(response)
        }
        fetchData()

    },[abilities])

    return (

       <ProfileItem pokemon={pokemon} moves={moves} ability={ability} />
    )
} 