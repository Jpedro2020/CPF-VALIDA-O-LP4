import React, {useEffect,useState} from 'react'
import './bootstrap.css'
import './style.css'



function App() {
  
 
  const [fundo, setFundo] = useState('')
  const [borda, setBordas]= useState('class')
  const[botao,setvalue]= useState('')
  const[entrada,setEntrada] = useState(0)
  const[resultado2, setResultado2] = useState('incorreto')

  useEffect ( () => {

    setvalue(entrada)
   // let digito1 = (Number(botao[0])*10 + Number(botao[1])*9 + Number(botao[2])*8 + Number(botao[3])*7 + Number (botao[4])*6 + Number(botao[5])*5 + Number(botao[6])*4 + Number(botao[7])*3 + Number(botao[8])*2) % 11
    let digito1 = (entrada[0]*10 + entrada[1]*9 + entrada[2]*8 + entrada[3]*7 + entrada[4]*6 + entrada[5]*5 + entrada[6]*4 + entrada[7]*3 + entrada[8]*2) % 11
    console.log(digito1)
   // let digito2 = (Number(botao[0])*11 + Number(botao[1])*10 + Number(botao[2])*9 + Number(botao[3])*8 + Number (botao[4])*7 + Number(botao[5])*6 + Number(botao[6])*5 + Number(botao[7])*4 + Number(botao[8])*3 + Number(botao[9])*2) % 11
   let digito2 = (entrada[0]*11 + entrada[1]*10 + entrada[2]*9 + entrada[3]*8 + entrada[4]*7 + entrada[5]*6 + entrada[6]*5 + entrada[7]*4 + entrada[8]*3 + entrada[9]*2) % 11 
   //let digito2 = (Number(botao[0])*11 + Number(botao[1])*10 + Number(botao[2])*9 + Number(botao[3])*8 + Number (botao[4])*7 + Number(botao[5])*6 + Number(botao[6])*5 + Number(botao[7])*4 + Number(botao[8])*3 + Number(botao[9])*2) % 11
    if(digito1 < 2){
      digito1 = 0
      console.log(digito1)
    }else{
      digito1 = 11 - digito1 
      console.log(digito1)
    }

    if(digito2 < 2){
      digito2 = 0
      console.log(digito1)
    }else{
      digito2 = 11 - digito2 
      console.log(digito2)
    }

    if(digito1 == entrada[9] && digito2 == entrada[10]){
      setResultado2('Este CPF é Valido')
      setBordas("form-control border border-success")
      setFundo("card text-white bg-success mb-3 ")
    //   setResultado(<div class="card text-white bg-dark mb-3" >
    //   <div class="card-header">{entrada}</div>
    //   <div class="card-body">
    //     <h5 class="card-title">Este CPF é Valido</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>)
     
    }else{
        setResultado2('Este CPF é Invalido')
        setBordas("form-control border border-danger")
        setFundo("card text-white bg-danger mb-3 ")
    //   setResultado(<div class="card text-white bg-dark mb-3" >
    //   <div class="card-header"></div>
    //   <div class="card-body">
    //     <h5 class="card-title">Este CPF é Invalido</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>)
     
    }
    // if(entrada.length===11)
   
    // {
    //   setResultado2("11")
    // }

  },[entrada])
  
  function clic(){
   

   
  }

  // function campoIn(event){
  //    setEntrada(event.target.value)
  //    console.log(entrada)
  // }


  return (
    <div>

    <div class="faixa">
          
    </div>

    <div id="titulo">
     
    </div>



    <div id="pesquisador" class="input-group mb-3">
        <input id="ent" type="text" class= {borda}  placeholder="digite seu CPF" aria-label="Recipient's username" aria-describedby="basic-addon2" type="number" onChange={e => setEntrada(e.target.value)} />
        <div class="input-group-append">
            <button id="botao" type="button" class="btn btn-dark" onClick={clic} >Pesquisar</button>
        </div>
    </div>

    <div id="alerta">
  

    <div class= {fundo} >
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title text-center"> {resultado2}</h5>
      </div>
    </div>

        
    </div>

    <footer class="footer">

        <div  >
            .
        </div>

    </footer>

    </div>
  );
}

export default App;
