import Image from "next/image"
import Link from "next/link"
import Galerias from "./_components/Galerias/Galerias"
//import Ad from "../Ad/Ad"
import { useEffect, useState } from "react"


const Inicio = () => {

    return (
        <div className="inicioContainer">

            {/* {aciveAd && <Ad closeAd={closeAd}/>} */}



            {/* <div className="homeImgA"><Image src='/Images/home/bienvenidos.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
            <div className="homeImgB"><Image src='/Images/home/a.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div> */}

            <div className="homeContainer">
                <div className="homeImgC">
                    <Image src='/Images/home/picante.svg' height={600} width={1500} alt="Home Banner" />
                </div>

                <button className="clickme">
                    <a href="#homeInfo">CLICK<br />ME</a>
                </button>
            </div>


            <div className="homeInfo" id="homeInfo">
                <div className="homeInfoText">
                    <h2>QUE ES PICANTE?</h2>
                    <p>
                        Bienvenidos a tu destino para explorar el fascinante mundo de la serigrafía, taller fundado en 2016.<br/>
                        En nuestro taller, nos enorgullecemos de ofrecer una experiencia única donde la creatividad se fusiona con la técnica para dar vida a diseños vibrantes y originales.<br/>
                        Espacio dedicado a inspirar y capacitar a artistas, emprendedores y entusiastas de la serigrafía.
                    </p>
                </div>

                <div className="imgA"><Image src='/Images/home/home01.jpg' height={400} width={600} alt="Home Banner"></Image></div>
                <div className="imgB"><Image src='/Images/home/home02.jpg' height={400} width={600} alt="Home Banner"></Image></div>
                <div className="imgA imgC"><Image src='/Images/home/home03.jpg' height={400} width={600} alt="Home Banner"></Image></div>
                <div className="imgA imgMiddleA"><Image src='/Images/home/home05.jpg' height={400} width={600} alt="Home Banner"></Image></div>
                <div className="imgB imgMiddleB"><Image src='/Images/home/home04.jpg' height={400} width={600} alt="Home Banner"></Image></div>
            </div>

            <Galerias />

            <p className="inicioPresupuesto">
                <span>TENES ALGUN TRABAJO EN MENTE?</span><br />
                COMPLETÁ EL FOMRULARIO DE PRESUPUESTO.<br />EVALUAREMOS TU PROYECTO, Y TE ENVIAREMOS LA COTIZACIÓN.<br />GRACIAS POR CONFIAR EN NUESTRO TRABAJO :)
            </p>

            <Link href="/presupuesto" className="toFormulario">
                <p>IR A FORMULARIO</p>
                <div className="arrowsContainer">
                    <img src="/Images/arrow.svg" alt="arrox" />
                    <img src="/Images/arrow.svg" alt="arrox" />
                    <img src="/Images/arrow.svg" alt="arrox" />
                </div>
            </Link>

        </div>
    )
}

export default Inicio