import './footer.css';
import Facebook from './img/facebook.png';
import Twitter from './img/gorjeo.png';
import ig from './img/instagram.png';
import youtube from './img/youtube.png';

function footer() {
 return(
    <footer>
        <div className="iconos-footer">
         <img src={Facebook} alt="FACEBOOK" />
         <img src={Twitter} alt="FACEBOOK" />
         <img src={ig} alt="FACEBOOK" />
         <img src={youtube} alt="FACEBOOK" />
        </div>
        <div className="texto">
            <p>Año de produccion 2021</p>
            <p>Creadores: Agustin Acuña - Marcos Zurdo - Federico Luna</p>
            <p>REALIZADO PARA BOOTCAMP MATTEA ©</p>
        </div>
    </footer>
 )
}

export default footer;