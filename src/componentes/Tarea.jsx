/* eslint-disable react/prop-types */
const Tarea = ({titulo,eliminar,completar})=>{

    return(
        <div className="contiene-tarea">
       <input type="checkbox"  checked={completar}/>
        <p>{titulo}</p>
        <button onClick={eliminar}>Eliminar</button>
       
        </div>
    )
}
export default Tarea