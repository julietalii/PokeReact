import axios from "axios";
import {useEffect, useState} from "react";

const PokeLista = (props) =>{
    const [pokemons, setPokemons] = useState([])

    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        // console.log(response.data);
        setPokemons(response.data.results);
    });
    }, [])

    /*
    16 d ediciembre queda pendiente para 18 dic: 

    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        // console.log(response.data);
        setPokemons(response.data.results);
    })
    */

    return <div>
        <h1>Lista: </h1>
        { pokemons.map(p => <p>Bo nadal</p>)} 
    </div>
   
}

export default PokeLista;