import { useState } from "react"
import { useEffect } from "react"
import DetalC from "./DetalC"


const ItemDetailC = () => {

    const [consumo, setConsumo] = useState()

    useEffect(() => {
        const api = fetch("https://6182ea6691d76c00172d16e7.mockapi.io/redeyes/v1/1/products/5")
        api.then((data)=>{
            const fJason = data.json()

            return fJason
            

        })    

        .then((product)=>{
            setConsumo(product)
          }),
  
        

    }, [])


    return (

        <div>

            <DetalC consumos={consumo}/>

            
        </div>
    )
}

export default ItemDetailC


