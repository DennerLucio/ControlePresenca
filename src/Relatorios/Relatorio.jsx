import './Relatorio.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button00 } from '../Utilitario/Botoes/Button00';

export function Relatorio({ }) {

  const [ano, setAno] = useState("");
  const [classeSelecionado, setClasseSelecionado] = useState("");
  const [mesSelecionado, setMesSelecionado] = useState("");
  const [dataFormatada, setDataFormatada] = useState("");
  const [classeFinal, setClasseFinal] = useState("");
  var teste = 4

  function trocaClasse(event) {
   setClasseSelecionado(event.target.value);
      
  }

  function handleSelectChange(event) {
    setMesSelecionado(event.target.value);
   
  }
  function trocaAno(e) {
    setAno(e.target.value)
  }
  
  function Pesquisar(e) {
    e.preventDefault()
    setDataFormatada("")

    if (mesSelecionado === "" && ano !== "" || ano === "" && mesSelecionado !== "") {
      alert("Ano ou Mes não preenchidos")
      setDataFormatada("")
    } 
    if (mesSelecionado !== "" && ano !== "" ) {
      setDataFormatada(ano+"-"+mesSelecionado+"-01")
    }
     
    



    setClasseFinal(classeSelecionado)
   
  }




// // Função para verificar se a data é maior que a data atual
// function isDateGreaterThanToday(userInputDate) {
//   const currentDate = new Date();
//   const userDate = new Date(userInputDate);

//   return userDate > currentDate;
// }

// // Exemplo de uso:
// const userDateInput = "2023-07-30"; // Substitua pela data recebida do front-end

// if (isDateGreaterThanToday(userDateInput)) {
//   console.log("A data é maior que a data atual.");
// } else {
//   console.log("A data não é maior que a data atual.");
// }







  

  const [res, setRes] = useState([])

  const getRes = async () => {


    try{
      const response = await axios.get(`https://localhost:5001/Relatorio?classeId=${classeFinal}&data=${dataFormatada}`) 
      
      const data = response.data
      setRes(data)

    }catch(error){
        console.log(error)
    }

  }
  useEffect(() => { getRes()}, [classeFinal, dataFormatada])
    
    return (
      <div className="Relatorio">
        <div className='filtro_relatorios'>
          <form onSubmit={Pesquisar}>
          <div className='grupo_relatorios'>
          <h3>Classe: </h3>
          <select  name='classeSelecionado' value={classeSelecionado} onChange={trocaClasse}>
            <option value=""> Geral</option>
            <option value="1"> Classe 1</option>
            <option value="2"> Classe 2</option>
            <option value="3"> Classe 3</option>
            <option value="4"> Classe 4</option>
            
          </select>

          </div>
          
          <div className='grupo_relatorios'>
          <h3>Mês: {mesSelecionado}</h3>
          <select value={mesSelecionado} onChange={handleSelectChange}>
            <option value=""> selecione</option>
            <option value="01"> janeiro</option>
            <option value="02"> Fevereiro</option>
            <option value="03"> Março</option>
            <option value="04"> Abril</option>
            <option value="05"> Maio</option>
            <option value="06"> Junho</option>
            <option value="07"> Julho</option>
            <option value="08"> Agosto</option>
            <option value="09"> Setembro</option>
            <option value="10"> Outubro</option>
            <option value="11"> Novembro</option>
            <option value="12"> Dezembro</option>
          </select>

          </div>

          <div className='grupo_relatorios'>
            <h3>Ano:</h3>
            <input type="texto" value={ano} onChange={trocaAno}/>
          </div>

          <div className='grupo_relatorios'>
            <button type='submit' className='btn btn-primary'>Pesquisar</button>

          </div>
          </form>

        </div>
        
        
        <div className='lista_relatorios'>
      <div className='linha_corpo'>
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
           {res.slice(0,teste).map((resposta) => {
          return(
            <tr key={resposta.relatorioId}>
              <th scope="row">{resposta.id}</th>
              <td>{resposta.data}</td>
              <td>{resposta.data}</td>
              <td>{resposta.data}</td>
              
              <td><Button00 texto='visualizar relatório' endereco='/relatoriopessoal'/></td>
            </tr>
            )
            })}
    </tbody>
  </table>

          </div>
        </div>

      </div>
    )
  }