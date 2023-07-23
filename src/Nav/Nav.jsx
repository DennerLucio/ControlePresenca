import './Nav.css'
import { Button00 } from '../Utilitario/Botoes/Button00'
export function Nav() {
    
  
    return (
      <div className="Nav">
        <div className='container_nav' id='firt_container_nav'>
          <h1>MADENN</h1>
        </div>
        <div className='container_nav' id='second_container_nav'>
           <h3>Fulano</h3>
            <Button00 texto='Sair da Conta'  classeAdicional='teste'/>
        </div>
      </div>
    )
  }