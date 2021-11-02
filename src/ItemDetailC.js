import { useState } from "react"
import { useEffect } from "react"
import DetalC from "./DetalC"

const ItemDetailC = () => {

    const [consumo, setConsumo] = useState()

    useEffect(() => {
        const api = fetch("https://pokeapi.co/api/v2/pokemon?limit=1")
        api.then((data)=>{
            const fJason = data.json()

            return fJason

        })

        .then((array_de_json)=>{
            setConsumo(array_de_json.results)
        })

    }, [])


    return (
        <div>

            <DetalC consumos={consumo}/>
            
        </div>
    )
}

export default ItemDetailC


