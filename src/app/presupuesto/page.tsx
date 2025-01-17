import Image from "next/image"
import Form from "./Form"

const Presupuesto = () => {
   


    // Expresiones regulares para los campos del formulario
    const nombreRegex = /^[\s\S]{2,25}$/i
    const apellidoRegex = /^[\s\S]{2,25}$/i // eslint-disable-next-line
    const telefonoRegex = /^[+()0-9\- ]*$/im // eslint-disable-next-line
    const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i


    return (
        <main className="formularioContainer">
            <h1>FORMULARIO DE PRESUPUESTO</h1>
            <div className='formularioP'>
                <div className="formImgContainer">
                    <Image src='/Images/presupuesto/presupuesto.png' layout='fill' objectFit='contain' alt='picante serigrafia' className="prespImg"></Image>

                    {/* <a target="_blank" href="https://wa.me/+5493415442366?text=Hola.%20Buen%20día.%20Necesito%20digitalizar%20mi%20diseño." rel="noopener noreferrer">
                        
                        <img src='/Images/presupuesto/btn-01.svg' alt='picante serigrafia' className="btn-01"></img>
                    </a> */}
                    <a target="_blank" href='./Images/presupuesto/infografia.png' rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src='/Images/presupuesto/btn-02.svg' alt='picante serigrafia' className="btn-02"></img>
                    </a>

                </div>
            </div>

            <Form/>
        </main>
    )
}

export default Presupuesto