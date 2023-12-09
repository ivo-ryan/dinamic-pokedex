import { useEffect, useState } from "react";
import axios from 'axios'
import { ProductList } from "../product-item";

export const Products = ({ limit }) => {

    const [ pokemon, setPokemon ] = useState([]);

    useEffect(() => {

            const fetchData = async () => {
                const url = (await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)).json();
                const response = await url;
                const promiseUrl = response.results.map(res => res.url);
                const promises = axios.all(promiseUrl.map(res => axios.get(res)));
                const dataPromise = (await promises).map(res => res.data);

                setPokemon(dataPromise);
            }

            fetchData()

    },[limit]);


    return (

        <>
        {
                pokemon.map(({sprites, name , id, types, moves , abilities}, index) => {
                        return(
                           <ProductList 
                           sprites={sprites}
                           name={name}
                           id={id}
                           types={types}
                           index={index}
                           moves={moves}
                           abilities={abilities}
                           />
                        )
                    })
                }
        
        </>
    )
}  