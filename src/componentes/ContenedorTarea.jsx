/* eslint-disable react/prop-types */
import { deleteData } from "../fetch";
import Tarea from "./Tarea";

function ContenedorTarea({mostrarTareas}) {
    async function eliminar() {
        await deleteData(tarea.id)
    }


    return (
        <div className="task-List">
            <div className="contiene-tareas">
             {mostrarTareas.map((tareaActual, index) => (
                <Tarea
                    key={index}
                    titulo={tareaActual.tarea} 
                />
              ))}
            </div>
        </div>
        
    );
}

export default ContenedorTarea;
