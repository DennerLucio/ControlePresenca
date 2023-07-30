import './Relatorio_Pessoal.css'
import { Nav } from '../Nav/Nav'


export function Relatorio_Pessoal() {
  const teste = "testetsettes"



    
  
    return (
      <div className="Add_Aluno">
        <Nav />
        <h1>Visualizar Relatorio de: {teste} </h1>
        <div>
          
          <h3>Presentes: </h3>
          <h3>Ofertas: </h3>
          <h3>Biblias: {teste}</h3>

        </div>
        <div className='card_alunovisitante'>        
        
        
        </div>
      </div>
    )
  }