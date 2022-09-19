import React from 'react';
import { CajaGuardado } from './CajaGuardado';


export default function Guardados() {
  var elementos = localStorage.getItem('convert');
   var JSONElemnt = JSON.parse(elementos);

  if(JSONElemnt === null){
    JSONElemnt = [];
  }
//  var elementos = localStorage.getItem('convert');
//  var JSONElemnt;
//  if(elementos === null){
 
  
//  }else {
//   JSONElemnt = JSON.parse(elementos);
//  }


    
  return (
    <>
    <div className='containerSaved'>
    <h2 className='saved'>Saved</h2></div>
    <div className='containerGuardados'>
    {JSONElemnt.map(dato => {
            return (
               <CajaGuardado id={dato.id} valor1={dato.valor1} unidad1={dato.unidad1} valor2={dato.valor2}></CajaGuardado>
            )
        })}
    
    </div>
    </>
  )
}
