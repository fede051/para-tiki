import React from 'react';
import Banco from './img-t/banco.png';
import Efectivo from './img-t/pago-en-efectivo.png';
import Debito from './img-t/tarjeta-de-debito.png';
import './tarjetass.css';

function Tarjeta() {

  return(
    <div className="contenedor"> 
      <div className="contenedor-a" >
          <h1>Metodos de pagos</h1>

               <div className="metodos" >
                  <div>  
                    <p> Banco </p>
                    <img src={Banco} alt="banco" />
                  </div>
                 

                  <div>  
                    <p> Efectivo </p>
                    <img src={Efectivo} alt="banco" />
                  </div>

                  <div>  
                    <p> Debito </p>
                    <img src={Debito} alt="banco" />
                  </div>

          </div>
      </div>
    </div>
  )
  
}




export default Tarjeta;