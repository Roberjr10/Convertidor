import React, {useState} from 'react'
import Icon_blanco from "../img/Iconicon_blanco.png";

export default function Cambio() {
    
    const [valorResultado, setValorResultado] = useState('');

    function cambiarResultado(valorResultado){
        if(valorResultado === 'km_millas'){
            console.log('cambiar arriba las millas abajo los km')
        }else if(valorResultado === 'millas_km') {
          console.log('cambiar arriba km abajo millas');
        }else if(valorResultado === 'pies_metros') {
            console.log('arriba metros abajo pies');
        }else if(valorResultado === 'metros_pies'){
            console.log('arriba pies abajo metros');
    
        }else if(valorResultado === 'cm_pulgadas'){
            console.log('arriba pulgadas abajo cm')
        }else {
          console.log('arriba cm abajo pulgadas');
        }
    }
  return (
 
   <button className='btn-convertidor' onClick={cambiarResultado({valorResultado})}><img src={Icon_blanco}></img></button>

  )
}
