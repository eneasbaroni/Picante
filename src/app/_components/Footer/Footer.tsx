import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <footer id="contacto">
            <div className="footerContainer">

                <div className='ubication'>
                    <a href="https://g.page/picante-serigrafia?share" target="_blank" rel="noreferrer" >
                        <Image src='/Images/contact/mapa.png' height={600} width={1000} alt='mapa' />
                    </a>
                </div>

                <div className="infoTextContainer">

                    <div className='infoLinks'>
                        <p>Visitá nuestro taller con cita previa en <br /> Augusto López 1067, Córdoba AR</p>
                        <div className='linksContainer'>
                            <Link href="https://wa.me/+5493516558094">+54 9 351-6558094</Link>
                            <Link href="https://www.instagram.com/picante.serigrafia/">@picante.serigrafia</Link>
                            <Link href="mailto:picante.cba.arg@gmail.com">picante.cba.arg@gmail.com</Link>
                            <Link href="https://eneasbaroni.com.ar/">Diseño y Desarrollo x ENEAS</Link>
                        </div>
                    </div>

                    <div className='infoIcons'>
                        <div className="iconContainer"><Link href="https://wa.me/+5493516558094" className="iconsContainer"><img src='/Images/whatsapp_icon.svg' alt='whatsapp'/></Link></div>
                        <div className="iconContainer"><Link href="https://www.instagram.com/picante.serigrafia/" className="iconsContainer"><img src='/Images/instagram_icon2.svg' alt='instagram'/></Link></div>
                        <div className="iconContainer"><Link href="https://www.facebook.com/picante.serigrafia/" className="iconsContainer"><img src='/Images/facebook_icon.svg' alt='facebook'/></Link></div>
                        <div className="iconContainer"><Link href="mailto:picante.cba.arg@gmail.com" className="iconsContainer"><img src='/Images/mailIcon.svg' alt='mail'/></Link>          </div>
                    </div>
                </div>



            </div>
            

            <div className="footerImgContainer">
                <div className="image"></div>
            </div>

        </footer>
    )
}

export default Footer