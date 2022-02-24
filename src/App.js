import ziva from "./ziva.jpeg"
import {Box, Box2} from "./Box"
import {useState} from 'react'

function App() {

  const animais = ["Macaco", "Girafa", "Elefante"];

  let valor = 0;

  function alteraValor(){
    valor = valor +1;
  }

  const [valor2, setValor] = useState(0)

  function alteraValor2(){
    setValor(valor2 + 1)
  }

  return (
    <>
  {
    animais.map((item, index)=>{
      return(
        <Box item={item} key={index.toString}/>
      )
    })
  }

   <h1>Hello World</h1>
   <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
   <img src={ziva} alt="Foto da Ziva"/>
   <Box item="cachorro"/>
   <Box2 item="gato"/>

   <h1>{valor}</h1>
   <button onClick={alteraValor}>Aperte</button>

   <h1>{valor2}</h1>
   <button onClick={alteraValor2}>Aperte agora</button>
   </>
  );
}

export default App;

//principio da imutabilidade -> mesmmo clicando no botão, muda só no console, não no front