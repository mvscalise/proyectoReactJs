import React from 'react'
import './navbar.scss'
import Logo from './logo.png'
import {CartWidgetComponent} from '../CartWidgetComponent.jsx'


export function NavbarComponent () {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <div id = 'navbar' className="navbar-brand">
                    <img src={Logo}  alt="logo" className="logo"/> 
                    <a >Lulu's Cupcake</a>
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item"><a  id = 'txtnavbar'>Home</a></li>
                    <li className="nav-item"><a  id = 'txtnavbar'>Nosotros</a></li>
                    <li className="nav-item"><a  id = 'txtnavbar'>Pedido</a></li>
                    <li className="nav-item"><a  id = 'txtnavbar'>Contacto</a></li>
                </ul>
            
                <CartWidgetComponent />

            </div>

        </nav>
    )

}
