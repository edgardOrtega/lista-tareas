// components/Tareas.jsx
import { useState } from "react";
import { tareasIniciales } from "../data/TareasIniciales";

const Tareas = () => {
    const [nombreTarea, setNombreTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(tareasIniciales);




    // Funcion al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault();
        setListaTareas([...listaTareas,{nombre:nombreTarea, completada:false}]) // Se Agrega tarea
        setNombreTarea("") // Vaciamos el formulario
    }

    //Funcion al escribir sobre el input del formulario
    const capturarInput = (e) => { 
        setNombreTarea(e.target.value);
    }
    const completarTarea = (tarea) =>{
        const nuevasTareas = [...listaTareas] //Copiamos las tareas anteriores
        const index = nuevasTareas.findIndex(el => el.nombre === tarea.nombre)  // findIndex para saber el indice de la tarea
        // Buscamos la tarea a completar en la lista
        nuevasTareas[index].completada = true
        setListaTareas(nuevasTareas)

    }
    // Eliminar tarea
    const eliminarTarea = (tarea) => {
        const listaFiltrada = listaTareas.filter(el => el.nombre !== tarea.nombre)
        setListaTareas(listaFiltrada)
    }

    return(
        <>
            <form onSubmit={enviarFormulario}>
                <input name="nombreTarea" onChange={capturarInput} placeholder="Agregar Tarea"/>
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {listaTareas.map((tarea,index) => 
                (<li 
                    key={index} onClick={()=> console.log(tarea)}
                    style={tarea.completada === true ? {textDecoration: 'line-through'} :{}}>
                        {tarea.nombre}
                        {tarea.completada === false ? <button onClick={() =>
                        completarTarea(tarea)}> Completar </button> : ''}
                        <button onClick={() => eliminarTarea(tarea)}> Borrar</button>

                </li>))}
            </ul>
        
        </>
    )


}
export default Tareas