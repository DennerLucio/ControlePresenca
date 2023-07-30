import './Classes.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Button00 } from '../Utilitario/Botoes/Button00'
import { Nav } from '../Nav/Nav'

export function Classes() {
  const [res, setRes] = useState([])
  const getRes = async () => {
    try{
      const response = await axios.get("https://localhost:5001/alunos")
      const data = response.data     
      setRes(data)

    }catch(error){
        console.log(error)
    }

  }
  useEffect(() => {

    getRes()

  },[])
  
    return (
      
      <div className="Classes">
         <Nav />
         <div className='btclasses'>
          <Button00 texto='Cadastrar Pessoa' endereco='/cadastraaluno'/>
          <Button00 texto='Relatórios' endereco='/relatorios'/>
         </div>
          
        <ul className='Container_Classes'>
          {res.slice(0,5).map((resposta) => {
            
            return(
              <div key={resposta.classeId}>
                <div className="Barra_Class">
                <div className='Grupo_Class'>
                   <span className='identificadores font_principal' id='identificador_maior'>{resposta.nome }</span> 
                   <div>
                   <span className='identificadores font_secundaria'>Professores:</span>         
                    <ul>
                      {resposta.professores.map((professor) => { return ( <li className='font_secundaria' key={professor.professorId}>{professor.nome} </li> 
                       )
                        })}
                    </ul>
                  </div> 
                   
                       
              </div>
                    <div className='Grupo_Class'>
                    <span className='identificadores font_secundaria'>Alunos: {resposta.quantidadeAlunos} </span>
                    <Button00 texto='Cadastrar' endereco='/cadastro'/>
                    </div>
            </div>
              </div>
            )
          })}
        </ul>
        

      </div>
    )
  }