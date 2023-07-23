import './Button00.css'
import { Link } from 'react-router-dom'

export function Button00( { texto = "", endereco = "" , classeAdicional = ""}) {
    
    return (
      <div className={`button ${classeAdicional}`}>     
            <Link to={endereco} className="" >
              {texto}
            </Link>         
           
      </div>
    )
  }