import { useState } from "react"

const ListContainer = ({stock, initial, onAdd}) => {

    const [sumar, setRestar] = useState(0)

    const operando = () => {

        setRestar(sumar + 1)

    }

    const restando = () => {

        setRestar(sumar - 1)


    }



    return (
        <div>
                   <span className="material-icons">shopping_cart</span>
                   <button onClick={operando}>Agregar</button>

                   <p>Usted tiene {sumar}</p>

                   <button onClick={restando}>Quitar</button>
        </div>
    )
}

export default ListContainer
