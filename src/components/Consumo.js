export const Consumo = () => {

    const resultado = fetch("https://pokeapi.co/api/v2/pokemon")

console.log(resultado);
//data es para ver todas las especificaciones de esta pagina eh
resultado.then((data)=>{
    console.log("Todo bien");
    const formato_json = data.json()//Se descarga en formato json
    console.log(formato_json);
    return formato_json;
   
    
    
})
 //Si estas dentro de una promesa then, la retornas, agregas un then mas a la cadena, y el segundo va a nitificar de la promesa que este atras
.then((array_de_pokemones)=>{
    console.log(array_de_pokemones);
})

resultado.catch(()=>{
    console.log("Algo salio mal");
})
    return (
        <div>
        
            
        </div>
    )
}
