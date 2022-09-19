import React,{useState, useRef, useEffect} from 'react';
import Icon_blanco from "../img/Iconicon_blanco.png";
import "../App.css";


export default function Component_input(){

    var unidad1;
    var unidad2;
    
    const [valorSelect, setValorSelect] = useState('km_millas');
    const [valorInput, setValorInput] = useState(0);
    const [valorResultado, setValorResultado] = useState(false);
    const numeroRef = useRef();
    const resultadoRef = useRef();
    const spanInputRef = useRef();
    var resultado;

    if(valorSelect === 'km_millas'){
        resultado = km_millas(valorInput);
        unidad1 = 'millas';
        unidad2 = 'km';
    }else if(valorSelect === 'millas_km') {
        resultado = millas_km(valorInput);
        unidad1 = 'KM'
        unidad2 = 'millas'
    }else if(valorSelect === 'pies_metros') {
         resultado = pies_metros(valorInput);
        unidad1='metros';
        unidad2 = 'pies';

    }else if(valorSelect === 'metros_pies'){
        resultado = metros_pies(valorInput);
        unidad1 = 'pies';
        unidad2 = 'metros';

    }else if(valorInput === 'cm_pulgadas'){
         resultado = cm_pulgadas(valorInput);
        unidad1 = 'pulgadas';
        unidad2 = 'cm';
    }else {
         resultado = pulgadas_cm(valorInput);
        unidad1 = 'cm';
        unidad2 = 'pulgadas';
    }
    
    function km_millas(valorInput) {
        let valor = valorInput * 0.62137;
        return valor.toFixed(2);
    }
    function millas_km (valorInput) {
        let valor = valorInput * 1.609;
        return valor.toFixed(2);
    }
    function pies_metros(valorInput){
        let valor = valorInput * 0.3048;
        return valor.toFixed(2);
    }
    function metros_pies(valorInput){
        let valor = valorInput * 3.281;
        return valor.toFixed(2);
    }

    function cm_pulgadas(valorInput){
        let valor = valorInput * 0.3937;
        return valor.toFixed(2);
    }
    function pulgadas_cm(valorInput){
        let valor = valorInput * 2.54;
        return valor.toFixed(2);
    }
  
    
    function cambiarResultado(){
          

        //tipo number
        var numero = numeroRef.current.value;
        //tipo String
        var resultado = resultadoRef.current.innerText;
        var numero_nuevo =  resultado.split(" ");
        numeroRef.current.value = parseFloat(numero_nuevo[0]);
        spanInputRef.current.innerText = numero_nuevo[1];

        //Span del input anterior
        if(valorResultado){
        resultadoRef.current.innerText = numero + " " + unidad1;
        }else {
            
        resultadoRef.current.innerText = numero + " " + unidad2;
        }

   
    }
    

    return <div className="component_input">
        <form>
        <label for=""></label>
        <select  onChange={(e) => setValorSelect((e.target.value))}>
            <option value="km_millas">KM -> Milles</option>
            <option value="millas_km">Milles -> KM</option>
            <option value="pies_metros">Pies -> metros</option>
            <option value="metros_pies">metros -> Pies</option>
            <option value="cm_pulgadas">cm -> pulgadas</option>
            <option value="pulgadas_cm">pulgadas -> cm</option>
        </select>
       <button className='btn-convertidor' onClick={() =>{cambiarResultado(); 
                                                         setValorResultado(!valorResultado);}}  type="button"><img src={Icon_blanco}></img></button>
        <input id="numero" ref={numeroRef} type="number" onChange={(e) => setValorInput(e.target.value)}></input><span className='spanInput' ref={ spanInputRef}>{unidad2}</span>
        <div id="resultado" className="resultado" ref={ resultadoRef} >{resultado} {unidad1}</div>
        </form>
    </div>
}