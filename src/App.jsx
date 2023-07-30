import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Classes } from './Classes/Classes.jsx'
import { Login } from './Login/login.jsx'
import { Routes, Route } from 'react-router-dom'
import { Relatorio } from './Relatorios/Relatorio'
import { Cadastro } from './Cadastro/Cadastro'
import { Relatorio_Pessoal} from './Relatorio_Pessoal/Relatorio_Pessoal'
import { Add_Aluno} from './Add_Aluno/Add_Aluno'

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/relatorios' element={<Relatorio />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/cadastraaluno' element={<Add_Aluno />} />
        <Route path='/relatoriopessoal' element={<Relatorio_Pessoal />} />
      </Routes>
      
    </div>
  )
}

export default App
