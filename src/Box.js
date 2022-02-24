//Criação do componente Box
//criei 2 pra aprender como exporta mais de um

function Box(props){
    return(
      <li>{props.item}</li>
    )
  }

function Box2(props){
    return(
      <li>{props.item}</li>
    )
  }  

export {
    Box,
    Box2
};