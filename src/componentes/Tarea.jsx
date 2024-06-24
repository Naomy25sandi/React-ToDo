const Tarea = ({titulo,eliminar,completar})=>{
    return(
        <>
        <h3>{titulo}</h3>
        <button onClick={eliminar}>Eliminar</button>
        <input type="checkbox"/>
        </>
    )
}
export default Tarea