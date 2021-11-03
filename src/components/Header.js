import { Nav } from "./Nav/Nav"
//Los props son parametros de una funcion, y siempre llegan en forma de objeto
export const Header = (props) => {

    //const {nombre:nombre, apellido:apellido} = props;



    return (
        <>
          <header>
              <h1>Proyect's name Undefined</h1>
             <Nav/> 
             <p>Bienvenido {props.nombre} {props.apellido} </p>
              </header>  
        </>
    ) 
}


