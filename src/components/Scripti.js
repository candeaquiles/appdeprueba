import { useState } from "react"
import { useEffect } from "react"

//Para poner imagenes vme voy a dar cuenta porque al final de cada linea de codigo pongo //

export const Scripti = () => {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        setTimeout(()=>{
            setUser([
                {id:1, name: "Candelaria", img: "http://www.placehold.it/100x100"},
                {id:2, name: "Tomas", img: "http://www.placehold.it/100x100"},
                {id:3, name: "Nahuel", img: "http://www.placehold.it/100x100"}
            ])

        }, 3000);

    }, [])

    if(user.length === 0){
        return <p>Loading</p>;

    }else{
        return (        
        <div>
            <h1>EJERCICIO</h1>

            {user.map((e,i)=>{
                return(
                    <>
                     <p key={e.id}>{e.name}</p>
                     <img key={e.id} alt="fotito" src={e.img} /> 
                     </>
                )
            })}

        </div>
        )
    }
}

/*abrir parentesis, seguido de una etiqueta vacia, poner los valores a mostrar, y cerrar todo nuevamente*/




 /*useEffect(()=>{

            setTimeout(()=>{

                setProducto[
                    {id:1, name: "Alfaflores", img: img/alfaflores.jpg, stock: "10"},
                    {id:2, name: "Marroc", img: img/marroc.jpg, stock: "10"},
                    {id:3, name: "cookies", img: img/cookies.jpg, stock: "10"}
                ]
            }, 2000);
        }, []),*/