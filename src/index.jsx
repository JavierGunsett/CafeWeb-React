import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Estilos
import './style/normalize.css'
import './style/style.css'


//Mis componentes
/*import Header from "./component/Header"
import Seccion from "./component/Seccion"
import Footer from "./component/Footer"*/ 


ReactDOM.createRoot(document.getElementById('root')).render(   

    <StrictMode>
        <App />
    </StrictMode>   
)
