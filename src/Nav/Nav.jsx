import './Nav.css'
import { Link } from 'react-router-dom'
import { Button00 } from '../Utilitario/Botoes/Button00'
export function Nav() {
    
  
    return (
      <div className="Nav">
        <div className='container_nav' id='firt_container_nav'>
          <Link to='/classes' className="" >
            <h1 id='logo'>MADENN</h1>
            </Link> 
        </div>
        <div className='container_nav' id='second_container_nav'>
           <h3>Fulano</h3>
            <Button00 texto='Sair da Conta'  classeAdicional='teste' endereco='/'/>
        </div>
      </div>
    )
  }