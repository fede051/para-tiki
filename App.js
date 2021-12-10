import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <main className="main">
     <div className="main-error" > 
     <div className="h1"><h1>LAZ</h1></div>
     <h3><span> !! ERROR !! </span>  </h3>
        <h3>  No se puede acceder al sitio sin autenticación intente nuevamente.</h3>
        <div className="main-error-flex">
        <button>.VOLVER AL LOGIN.</button>
        </div>
    </div>
   </main>
  );
}

export default App;
