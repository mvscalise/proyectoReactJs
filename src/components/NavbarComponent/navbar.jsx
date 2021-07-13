import './Navbar.scss'
import Logo from './logo.png'
import {CartWidgetComponent} from '../CartWidgetComponent.jsx'
import {Link} from 'react-router-dom'


export function NavbarComponent () {

    // Nota: se coloca el style={{ textDecoration: 'none' }} en esta seccion ya que no lo toma cuando se configura desde scss

    return(
        <section className="miNavBar">
           
           	<div className="titulo">
                <Link to={"/"} > <img src={Logo} alt="logo" /> </Link>  
				<h1> Lulu's Book Cat-ffe </h1>
			</div>

			<div  className="container nav justify-content-end">

                <div id= "navegacion" className="row">

					<div className="col-sm-6 col-md-6 col-lg-2">
                        <Link to={"/"} style={{ textDecoration: 'none' }} > <span> Home</span> </Link>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-2">
                        <Link to={"/category/cuentos_infantiles"} style={{ textDecoration: 'none' }} > <span> Kids</span> </Link>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-2">
                        <Link to={"/category/novelas"} style={{ textDecoration: 'none' }} > <span> Novelas</span> </Link>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-2">
                        <span>Contacto</span>
					</div>

                    <CartWidgetComponent />

                </div>
			</div>
    

            
        </section>
    )

}
