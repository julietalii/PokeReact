import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);
    const [nombre, setNombre] = useState("");
    const [imgFrontUrl, setImgFrontUrl] = useState();
    const [imgBackUrl, setImgBackUrl] = useState();
    const [baseHP, setBaseHP] = useState();
    const [baseAttack, setBaseAttack] = useState();
    const [baseDefense, setBaseDefense] = useState();

    const params = useParams();

    /*al useeffect se le pasa funcion, la peticion se lanza cuando
     tiene lugar el efecto */

    useEffect(() =>{
        //la sintaxis más moderna es async-await
        axios.get("https://pokeapi.co/api/v2/pokemon/" + ID)
        .then(response => {
            setNombre(response.data.name);
            setImgFrontUrl(response.data.sprites.front_default);
            setImgBackUrl(response.data.sprites.back_default);
            setBaseHP(getStat("hp", response.data.stats));
            setBaseAttack(getStat("attack", response.data.stats));
            setBaseDefense(getStat("defense", response.data.stats));
            
        })

    }, [])

    /*segundo parametro de useeffect, si pasas array vacio, peticion
    de red, se ejecuta inicialmente y ya esta */

    const ID = params.id; //como prueba pongo uno y luego lo configuro

    //metodo 
    function getStat(nombreStat, arrayStats){
        const filteredArray = arrayStats.filter(s => s.stat.name === nombreStat);
        if (filteredArray.length === 0){
            return -1
        }
        return filteredArray[0].base_stat;
    }

    

    const onSubirNivel = (event) => { // on cuando suceda esto, buenas prácticas para nombres de f
        setNivel(nivel_antiguo => nivel_antiguo + 1)
    }
    const onBajarNivel = (event) => { // on cuando suceda esto, buenas prácticas para nombres de f
        setNivel(nivel_antiguo => nivel_antiguo - 1)
    }

    const calcularHP  = () => {
        //TODO: USAR LA FÓRMULA REAL
        //This one is made up
        return baseHP + nivel * 3;
    }
    
    const calcularAtaque = ()  => {
        return baseAttack + (nivel * 2)
    }

    const calcularDefensa = ()  => {
        return baseDefense + (nivel * 2)
    }

    return <div>
        <img src={imgFrontUrl}></img>
        <img src={imgBackUrl}></img>
        <h1>{nombre}</h1>
        <p>Nivel: {nivel} </p>
        <button onClick = {onSubirNivel}>Subir nivel</button>
        <button onClick = {onBajarNivel}>Bajar nivel</button>
        <p>HP: { calcularHP() }</p>
        <p>Ataque: { calcularAtaque() } </p>
        <p>Defensa: { calcularDefensa() } </p>
    </div>
}
export default Pokemon;