import Item from "./Item"

const ItemList = (props) => {


        return (
            <div>
                {
                    props.productos.map((producto) =>{
                    return( 
                        <Item key={producto.id} nombre={producto.name} imgUrl={producto.imgUrl} stock={producto.stock}/>
                    )
                })
            }
            </div>
        )



}

export default ItemList
