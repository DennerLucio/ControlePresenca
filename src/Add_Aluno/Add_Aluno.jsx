import { Button00 } from '../Utilitario/Botoes/Button00'
import './Add_Aluno.css'

export function Add_Aluno() {




    
  
    return (
      <div className="Add_Aluno">
        <h1>Adicionar Aluno/Visitante</h1>
        <div className='card_alunovisitante'>        
        <div>
          <h2>Nome:</h2>
          <input className='s_addaluno'></input>

        </div>
        <div>
        <h2>Classe:</h2>
          <select className='s_addaluno'>
            <option value="valor1"> Classe 1</option>
            <option value="valor1"> Classe 2</option>
            <option value="valor3"> Classe 3</option>
            <option value="valor3"> Classe 4</option>
          </select>
        </div>
        <div>
        <h2>Tipo:</h2>
         <select className='s_addaluno'>
            <option value="valor1"> Aluno</option>
            <option value="valor1"> Visitante</option>
            <option value="valor3"> Geral</option>
          </select>
        </div>
        
        </div>
        <Button00 texto='Cadastrar Pessoa' endereco=''/>
      </div>
    )
  }