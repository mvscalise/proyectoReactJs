import './Footer.scss'
import Instagram from './instagram.png'
import Facebook from './facebook.png'
import Mail from './mail.png'

export function FooterComponent () {

  
    return(
        <section className="footer">

            <div className="rrss">
                <div className="face">
                    <img src={Facebook} alt="Logo de Facebook"/>
                    <p> LuluCat-Caffe </p>
                </div>

                <div className="insta">
                    <img src={Instagram} alt="Logo de Instagram"/>
                    <p> @LuluCat-Caffe </p>
                </div>

                <div className="mail">
                    <img src={Mail} alt="Logo de mail"/>
                    <p> pedidoscupcake@mail.com </p>
                </div>
            </div>

            <div className="derechos">
                <p> Copyright © 2021 Todos los derechos reservados.</p>
            </div>
    
        </section>
    )

}
