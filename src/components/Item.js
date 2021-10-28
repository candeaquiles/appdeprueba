

const Item = ({id, name, imgUrl, stock}) => {
    
    return (
        <div>
            <img key={id} alt="fotito" src={imgUrl}/>
            <h1 key={id}>nombre: {name}</h1>
            <p key={stock}></p>
            
        </div>
    )
}

export default Item
