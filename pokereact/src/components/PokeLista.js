import axios from "axios";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PokeLista = (props) =>{
    console.log("entro pokelist");
    const [pokemons, setPokemons] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response => {


        // console.log(response.data);
        setPokemons(response.data.results);
    });
    }, [])

    const funcionNavegarASnivy = () =>{
        navigate("/pokemon/495")
    }

    const funcionNavegar = (p) =>{
        //navigate("/pokemon/" + p)
        navigate(`/pokemon/${p}`)
    }

    /*
    16 d ediciembre queda pendiente para 18 dic: 

    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        // console.log(response.data);
        setPokemons(response.data.results);
    })
    */

    return <div>
    <button onClick={funcionNavegarASnivy}>Navegar a Snivy</button>
          <Link to= "/pokemon/25">Ir a PIKACHU</Link>
          <h1>Lista</h1>
          {pokemons.map(p =>{
            return <><p>Este pokemon es {p.name}</p>
            <div onClick={()=>{navigate("/pokemon/" + p.name)}}>
              Navegar</div>
            <Link to={"pokemon/"+p.name}>Navegar</Link>
            </>
          })}
      </div>
   
}

export default PokeLista;