
import { Botao_Cadastros } from '../Botoes/Cadastros'
import './Barra_Classe.css'

export function Barra_Class({ nome_classe, professor, quantidade }) {
    
  
    return (
      <div className="Barra_Class">
        <div className='Grupo_Class' id='GC1'>
            <p> Classe: {nome_classe} </p>
            <p> Professor: {professor} </p>  
        </div>
        <div className='Grupo_Class'>
            <p>Alunos: {quantidade} </p>
            <Botao_Cadastros />
        </div>
      </div>
    )
  }