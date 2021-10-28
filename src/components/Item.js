

const Item = ({id, name, imgUrl, stock}) => {
    
    return (
        <div key={id}>
        
        <img alt={name} src={imgUrl}/>
            <h1> nombre: {name} <h1/>
                <p>{stock}<p/>
            
            
        </div>
    )
}

export default Item
