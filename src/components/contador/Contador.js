import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './Style.css'

export const Contador = ({numero}) => {

  const [Num, setNum] = useState(numero);

  const HandlerAdd=(e)=> {
  setNum(Num+1);  
  }
  const HandlerDel=(e)=> {
    setNum(Num-1);
  }
  const HandlerReset=(e)=> {
    setNum(numero);
  }
  return (
    <div className="Counter">
      <div>
        <h1>Contador :{Num} (Max. 30)</h1>
      </div>
      <div>
       <button className="Add" onClick={HandlerAdd} type="button" disabled={Num >=30 ? true:false}>+1</button>
       <button className="Reset" onClick={HandlerReset} type="button">Recetear</button>
       <button className="Dell" onClick={HandlerDel} type="button" disabled={Num <=0 ? true:false}>-1</button>
       {/*Num >= 1 ?  <button className="Dell" onClick={HandlerDel} type="button">-1</button>: null*/}
      </div>
    </div>
    
  )
}
Contador.propTypes = {
  numero: PropTypes.number.isRequired,
}
Contador.defaultProps = {
  numero: 0
};