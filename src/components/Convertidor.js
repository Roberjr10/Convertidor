import "../App.css";
import Component_input from "./Component_input";
import corazon from "../img/Iconcorazon.png"
import React,{useState, useRef} from 'react';


export default function Convertidor() {
  
  
    var elementos = localStorage.getItem('convert');
   var JSONElemnt = JSON.parse(elementos);

  if(JSONElemnt === null){
    JSONElemnt = [];
  }
    const [count, setCount] = useState(JSONElemnt.length);
    const [cookieState, arrayCookie] = useState(JSONElemnt);
  const reload = () => {
    window.location.reload(true);
  }
   
    function guardar(){
        
    
        
        var numero = document.querySelector("#numero").value;
        var resultado = document.querySelector('#resultado').innerHTML;
       setCount(count+1);
      
        
        if(resultado.includes('millas')){
           if(numero===""){ numero = 0};
            var cookie = {
                id: count,
                valor1: numero,
                unidad1: 'km',
                valor2: resultado
            }
            cookieState.push(cookie)
            localStorage.setItem('convert', JSON.stringify(cookieState))
            
        }else{
            if(numero===""){ numero = 0};
            var cookie = {
                id:count,
                valor1: numero,
                unidad1: 'millas',
                valor2: resultado
            }
            cookieState.push(cookie)
            localStorage.setItem('convert', JSON.stringify(cookieState))
        }
        
       
        reload();
    }

    
    return <div className="convertidor">
        <h3>Convert</h3>
        <Component_input ></Component_input>
        <br></br>
       
            <button className="btn-corazon"  onClick={guardar} type="reset" >
            <img src={corazon} className="corazon"></img>
         
            </button>
        
    </div>
}