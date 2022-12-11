import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './normalize.css'
import './index.css'


//Mis componentes
import Header from "./component/Header"
import Seccion from "./component/Seccion"
import Footer from "./component/footer"

ReactDOM.createRoot(document.getElementById('root')).render(     
      
    <React.StrictMode>
        <Header /> 
        <Seccion />
        <Footer />
    </React.StrictMode>
  
)
