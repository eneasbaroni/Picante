'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import database from '../../../db/database'


const Feria = () => {

    const [imgGrande, setImgGrande] = useState(false)
    const [imgGrandeSrc, setImgGrandeSrc] = useState("")
    const [visible, setVisible] = useState("0%")

    const handleClick = (e: any) => {
        setImgGrandeSrc(e.target.alt)
        setImgGrande(true);
        setTimeout(() => {
            setVisible("100%")
        }, 1);
    }

    const offImgGrande = () => {
        setVisible("0%")
        setTimeout(() => {
            setImgGrande(false)
        }, 500);
    }

    const getRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    }


    return (

        <main className="galeriaContainer">
            <h1>FERIA PICANTE</h1>

            <div className="imagesGalleryContainer">
                {database.feria.map((obra, i) => (
                    <div className="imageContainer" style={{ transform: `rotate( ${getRandom(-5, 10)}deg )` }} key={i} onClick={handleClick}>
                        <Image src={`/Images/feria/${obra.src}`} objectFit='cover' height={800} width={600} alt={obra.src} />
                    </div>
                ))}
            </div>

            {imgGrande &&
                <div className="imgGrandeContainer" style={{ opacity: visible }} onClick={offImgGrande}>
                    <div className="imgGrande">
                        <Image objectFit='contain' height={1023} width={1536} src={`/Images/feria/${imgGrandeSrc}`} alt="imgGrande" />
                    </div>
                </div>
            }

            <p className="inicioPresupuesto">
                <span>QUERES PARTICIPAR DE LA FERIA?</span><br />
                COMPLETÁ EL FORMULARIO DE PARTICIPACION PARA QUE NOS PODAMOS PONER EN CONTACTO CON VOS
            </p>

            <Link href="/presupuesto" className="toFormulario">
                <div className="arrowsContainer">
                    <img src="/Images/arrow.svg" alt="arrox" />
                    <img src="/Images/arrow.svg" alt="arrox" />
                    <img src="/Images/arrow.svg" alt="arrox" />                    
                </div>
                <p>IR A FORMULARIO</p> 
            </Link>

            <Link href="/" className="toFormulario">
                <div className="arrowsContainer">
                    <img src="/Images/arrow.svg" alt="arrox" />
                    <img src="/Images/arrow.svg" alt="arrox" />
                    <img src="/Images/arrow.svg" alt="arrox" />                    
                </div>
                <p>BACK TO HOME</p> 
            </Link>
            
        </main>
    )
}

export default Feria