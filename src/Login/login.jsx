import { Button00 } from '../Utilitario/Botoes/Button00'
import './login.css'

export function Login() {




    
  
    return (
      <div className="pai_login">
        <div className='login'>
        <h3>Login</h3>
        <div className='login_campos'><h4> Usuário: </h4><input className='login_inputs' type="text" /></div>
        <div className='login_campos'> <h4>Senha:</h4> <input className='login_inputs' type="text" /> </div>
        <Button00 texto='Login' endereco='' classeAdicional='login_enviar'/>
          
        <Button00 texto='Login com Google' endereco='https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=686934782381-05r2o0rcdkagb151fq39r7u90a96l5ha.apps.googleusercontent.com&scope=email%20profile&redirect_uri=https://localhost:5001/signin-google-callback' classeAdicional='login_google'/>
        
        </div>




       
      </div>
    )
  }