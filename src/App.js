
import './App.css';
import Count from "./components/Count";

import ItemDetailC from './ItemDetailC';


function App() {

//Effect:

//Esto esta antes del dibujo (componentWillMount).Salvo el efecto, que pasa despues del retorno
//Contiene dos parametros: (a,b)- El primero es una funcion, el segundo es un array
//Si no usas el segundo parametro, el efecto se ejecuta siempre despues de cada render  



//Esto es mi ejemplo secundario (ej: cargar datos)
















  //let contador = 0;

 //const resultado = useState("Hola")
 //const estado = resultado[0];
 //const setEstado = resultado[1];
 //console.log(resultado);

 /*const [saludo, setSaludo] = useState("Hola")*/
 /*const [contador, setContador] = useState(0)*/
 
  
 
 
  /*const hacerLog = () =>{
   // contador = contador + 1;
    //console.log(contador);
    //setEstado("Chau")
    //setSaludo("Chau")
    setContador(contador + 1)
  }*/



  /*const sumarContador = () =>{
    /*console.log("Sumar");*/
    /*setContador(contador + 1)*/

  return (
    <div className="App">
     

      <Count/>

      <ItemDetailC/>


    </div>
  );
}

export default App;
