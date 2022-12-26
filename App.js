import {Conteudo,ConteudoCalculadora,Row} from './styles';
import {Input} from './components/Input';
import {Button} from './components/Button';
import{useState} from 'react';



const  App = ()=> {
  const [valorAtual,valorSelecionado]= useState(0);
  const [primeiroNumero,valorSelecionadoPrimeiro] =  useState('0');
  const [operação, selecionandoOperação] = useState(' ');
  
  const limparTela = ()=>{
    valorSelecionado('0'); 
    valorSelecionadoPrimeiro('0');
    selecionandoOperação('');
  }
  
  const adicionandoNumero = (numero)=>{
    valorSelecionado(prev =>`${prev === '0'?'': prev}${numero}`)

  };

const  soma =()=>{
  if (primeiroNumero === '0'){
  valorSelecionadoPrimeiro(String(valorAtual));
  valorSelecionado('0');
  selecionandoOperação('+');
}else{
const somar = Number(primeiroNumero) + Number(valorAtual);
 valorSelecionado(String(somar))
 selecionandoOperação(' ');
}
}
const diminuir = ()=>{
  if(primeiroNumero === '0'){
    valorSelecionadoPrimeiro(String(valorAtual));
    valorSelecionado('0');
    selecionandoOperação('-');
  
}else{
  const diminuição  = Number(primeiroNumero) - Number(valorAtual);
  valorSelecionado(String(diminuição));
  selecionandoOperação(' ');
}
}
const multiplicação = ()=>{
  if(primeiroNumero === '0'){
    valorSelecionadoPrimeiro(String(valorAtual));
    valorSelecionado('0');
    selecionandoOperação('x');
  
}else{
  const multi  = Number(primeiroNumero) * Number(valorAtual);
  valorSelecionado(String(multi));
  selecionandoOperação(' ');
}
}
const Divisão = ()=>{
  if(primeiroNumero === '0'){
    valorSelecionadoPrimeiro(String(valorAtual));
    valorSelecionado('0');
    selecionandoOperação('÷');
  
}else{
  const divi  = Number(primeiroNumero) / Number(valorAtual);
  valorSelecionado(String(divi));
  selecionandoOperação(' ');
}
}
const Percentual = ()=>{
  if(primeiroNumero === '0'){
    valorSelecionadoPrimeiro(String(valorAtual));
    valorSelecionado('0');
    selecionandoOperação('%');
  
}else{
  const Perc  = (Number(primeiroNumero) * Number(valorAtual))/100;
  valorSelecionado(String(Perc));
  selecionandoOperação(' ');
}
}


const RaizQuadrada = ()=>{
  if(primeiroNumero === '0'){
    valorSelecionadoPrimeiro(String(valorAtual));
    valorSelecionado(valorAtual);
    selecionandoOperação('√');
  
}else{
  const Raiz  = Math.sqrt(Number((primeiroNumero)));
  valorSelecionado(String(Raiz));
  selecionandoOperação(' ');
}
}
const Potencia = ()=>{
  if(primeiroNumero === '0'){
    valorSelecionadoPrimeiro(String(valorAtual));
    valorSelecionado('0');
    selecionandoOperação('P');
  
}else{
  const Pot  = Number((primeiroNumero))**Number((valorAtual));
  valorSelecionado(String(Pot));
  selecionandoOperação(' ');
}
}






const igual = ()=>{
  if(valorSelecionadoPrimeiro !== '0' && operação !== '' && valorAtual !== '0'){
    switch(operação){
      case '+':
        soma();
        break;
    
    
    case '-':
      diminuir();
        break;
       case 'x' :
          multiplicação();
        break;

        case '÷':
          Divisão();
          break;
          case '%':
            Percentual();
            break;
            case '√':
              RaizQuadrada();
              break;
              case 'P':
                Potencia();
                break;
      default:
        
      alert('Operação não cadastrada no banco de dados');
      break;
  };
}
}
  return (
    <Conteudo>
      <ConteudoCalculadora>
     <Input value = {valorAtual}/>
     <Row>

     <Button label='÷' onClick = {Divisão}></Button>
     <Button label='x' onClick = {multiplicação}></Button>
     <Button label='%' onClick = {Percentual}></Button>
     <Button label='√' onClick = {RaizQuadrada}></Button>
     <Button label='C' onClick = {limparTela}></Button>
     </Row>
     <Row>

     <Button label='7' onClick = {()=>adicionandoNumero('7')}></Button>
     <Button label='8' onClick = {()=>adicionandoNumero('8')}></Button>
     <Button label='9' onClick = {()=>adicionandoNumero('9')}></Button>
     <Button label='-' onClick = {diminuir}></Button>
     </Row>
     <Row>

     <Button label='4' onClick = {()=>adicionandoNumero('4')}></Button>
     <Button label='5' onClick = {()=>adicionandoNumero('5')}></Button>
     <Button label='6' onClick = {()=>adicionandoNumero('6')}></Button>
     <Button label='+' onClick = {soma}></Button>
     </Row>
     <Row>

     <Button label='1' onClick = {()=>adicionandoNumero('1')}></Button>
     <Button label='2' onClick = {()=>adicionandoNumero('2')}></Button>
     <Button label='3' onClick = {()=>adicionandoNumero('3')}></Button>
     <Button label='=' onClick = {igual}></Button>
     </Row>
     <Row>

     <Button label='0' onClick = {()=>adicionandoNumero('0')}></Button>
     <Button label='.' onClick = {()=>adicionandoNumero('.')}></Button>
     <Button label='P' onClick = {Potencia}></Button>
     
     </Row>
     </ConteudoCalculadora>
    
    </Conteudo>
  );
}

export default App;
