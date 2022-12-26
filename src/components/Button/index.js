import {ConteudoDoBotao} from './style';
const Button = ({label,onClick})=> {
    return (
     <ConteudoDoBotao onClick = {onClick}>
      {label}
     </ConteudoDoBotao>
    );
  }
  
  export { Button};
  