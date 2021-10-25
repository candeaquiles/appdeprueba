import {useState} from "react"
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Nav/Footer';
import Main from './components/Main';
import ListContainer from "./components/ListContainer";


function App() {
  //let contador = 0;

 //const resultado = useState("Hola")
 //const estado = resultado[0];
 //const setEstado = resultado[1];
 //console.log(resultado);

 /*const [saludo, setSaludo] = useState("Hola")*/
 const [contador, setContador] = useState(0)
 
  
 
 
  /*const hacerLog = () =>{
   // contador = contador + 1;
    //console.log(contador);
    //setEstado("Chau")
    //setSaludo("Chau")
    setContador(contador + 1)
  }*/



  const sumarContador = () =>{
    /*console.log("Sumar");*/
    setContador(contador + 1)
  }

  return (
    <div className="App">

     <ListContainer stock="10" initial="0" />

      
      <button onClick={sumarContador}>Aumentar</button>
      <p>El contador va {contador}</p>
      
      <Header nombre="Candelaria" apellido="Aquiles" />
  
      <Footer/>

      <Main elNombre="Soy un valor">

        <p>Hola soy un props</p>
        <p>Hola soy otro prop</p>
      </Main>

    </div>
  );
}

export default App;
