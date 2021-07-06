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
                    <a >Lulu's Book Cat-ffe</a>
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item"><span  id = 'txtnavbar'>Home</span></li>
                    <li className="nav-item"><span  id = 'txtnavbar'>Nosotros</span></li>
                    <li className="nav-item"><span  id = 'txtnavbar'>Pedido</span></li>
                    <li className="nav-item"><span  id = 'txtnavbar'>Contacto</span></li>
                </ul>
            
                <CartWidgetComponent />

            </div>

        </nav>
    )

}
