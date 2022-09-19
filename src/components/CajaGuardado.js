import React from 'react'
import imagenX from '../img/marca-x 1x.png'

export const CajaGuardado = (props) => {
  const reload = () => {
    window.location.reload(true);
  }
    
  function borrarDatos(){
   if(localStorage.length < 1){
    localStorage.removeItem('convert');
   }else {
  
    var jsonLocalStorage = JSON.parse(localStorage.getItem('convert'));
    

    var buscaIndice = jsonLocalStorage.findIndex(obj => obj.id === props.id);
    
    jsonLocalStorage.splice(buscaIndice, 1);

  
    var stringLocalStorage = JSON.stringify(jsonLocalStorage);

   localStorage.setItem('convert', stringLocalStorage);
   }
  //Una vez borrado hay que ordenarlo desde aqui en el local storage;

   reload();

  }
  
  
  return (
    <div className='cajaGuardados'>
        <p>{props.valor1+ ' ' + props.unidad1} ->  {props.valor2} <img src={imagenX} className="imagenX" onClick={borrarDatos}></img>  </p> 
        
    </div>
  )
}
