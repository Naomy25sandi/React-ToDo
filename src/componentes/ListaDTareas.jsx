import { useState } from "react"
import { postData } from "../fetch"

const ListaDTareas = ()=>{
    const enter = (e) =>{
        if (e.key === "Enter") {
            agregarDatos()
        }
    }

    const [tarea, setTarea] = useState("");

    const inputChange = (e) => {
        setTarea(e.target.value);
    }

    const agregarDatos = async ()=> {
        if (tarea.trim() === "") {
            alert("No se pueden agregar espacios vacios");
            return;
        }

        try {
            await postData(tarea);
            setTarea ("");
            window.location.reload();

         } catch (error) {
             console.log (error);
            }
        
    }
    return(
        <>
       <div className="contenedorInput">
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={tarea} onChange={inputChange} onKeyDown={enter} />
            <button onClick={agregarDatos}>Agregar</button>

        </form>
        <div>
            <input  type="number" className="contador" id="" />
            <p>Tareas completadas</p>
        </div>
        
       </div>
        </>
    )
}
export default ListaDTareas