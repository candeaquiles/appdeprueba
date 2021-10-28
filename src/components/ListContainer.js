import { useState } from "react"
import { useEffect } from "react"
import ItemList from "./ItemList";

const ListContainer = ({id, name, imgUrl, stock}) => {

    const [producto, setProducto] = useState([]);

    useEffect(()=>{

            const promise = new Promise ((res, rej)=>{
            setTimeout(()=>{
                res([
                    {id:1, name: "Alfaflores", imgUrl: '/img/alfajores.jpg', stock: "10"},
                    {id:2, name: "Marroc", imgUrltp: 'img/marroc.jpg', stock: "10"},
                    {id:3, name: "cookies", imgUrl: 'img/cookies.jpg', stock: "10"},
                ])
            }, 2000)

        })

        promise.then(item=>setProducto(item))

    }, [])
    
  return (
        
        <div>
        <ItemList productos={producto}/>    
        <div/>
    )
}

export default ListContainer

/*

const [sumar, setRestar] = useState(0)

    const aumento = () => {

        if(sumar < stock){
            setRestar(sumar + 1)
        }else{
            <p>Se ha excedido del monto</p>
        }

        console.log(sumar);


    }

    const disminuir = () => {

        if (sumar > 0){
            setRestar(sumar - 1)
        }else{
            <p>No hay mas productos</p>
        }

    }




<span className="material-icons">shopping_cart</span>
                   <button onClick={aumento}>Agregar</button>

                   <p>Usted tiene {sumar}</p>

                   <button onClick={disminuir}>Quitar</button>
                   */


           
