import React from 'react'
import './navbar.css'


function Navbar () {
    return(
        <nav id = 'navbar' className="navbar navbar-expand-lg navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a id = 'navbar' href="#">Lulu's Cupcake</a>
                </div>

                <ul  className="navbar-nav">
                    <li className="nav-item"><a  id = 'txtnavbar'href="#">Home</a></li>
                    <li className="nav-item"><a  id = 'txtnavbar'href="#">Nosotros</a></li>
                    <li className="nav-item"><a  id = 'txtnavbar'href="#">Pedido</a></li>
                    <li className="nav-item"><a  id = 'txtnavbar'href="#">Contacto</a></li>
                </ul>
                
            </div>
        </nav>
    )

}

export default Navbar