import './Cadastro.css'
import { Barra_Cadastro } from '../Utilitario/Barras/Barra_Cadastro'
import { Button00 } from '../Utilitario/Botoes/Button00'
import { Nav } from '../Nav/Nav'

export function Cadastro() {  
    return (
      <div className="Cadastro">
        <Nav />
        <h1>Cadastrar Novo Relatorio</h1>
        <Barra_Cadastro />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
          
        </tbody>
      </table>
      <div>
        <div className='observacao'>
          <h2>Observação:</h2>
          <input type="text" />
        </div>
        <div className='botoes_cadastro'>
         <Button00 texto='Salvar'/> 
         <Button00 texto='Cadastrar Aluno' endereco='/cadastraaluno'/>
        </div>
       
      </div>
      

      </div>
    )
  }