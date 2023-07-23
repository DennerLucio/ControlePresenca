
import './Barra_Relatorios.css'

export function Barra_Relatorios({ mes, data }) {
    
  
    return (
      <div className="Barra_Rel">      
            <div> <p> {mes} {data} </p></div>
            <div> <button>Visualizar </button> </div>
            <div> <button>Editar</button></div>
            <div> <button>Excluir</button></div>
            <div> <button>Download</button></div>     
      </div>
    )
  }