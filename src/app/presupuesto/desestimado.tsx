'use client'
import Image from "next/image"
import { useState } from "react"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import Loader from "@/app/_components/Loader/Loader";
import { handleSubmit } from "@/lib/actions"


const Input = ({ placeholder, name, label, foo }: { placeholder: string, name: string, label: string, foo: any }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input required placeholder={placeholder} className="userInput" type="text" name={name} id={name} onChange={foo}></input>
        </>
    )
}

const Presupuesto = () => {

    const [loading, setLoading] = useState(true)

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        soporte: "Tela",
        medida: "",
        cantidadColores: "",
        cantidad: "",
        descripcion: "",
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setUser({            
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    }



    const sendData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("🚀 ~ Presupuesto ~ user:", user, selectedFile)
        // setLoading(true)

        // if (selectedFile) {

        //     /* limitar el tamaño del archivo */
        //     if (selectedFile.size > 10000000) {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Oops...',
        //             text: 'El archivo es demasiado grande, el tamaño máximo es de 10MB',
        //         })
        //         setLoading(false)
        //         return
        //     }

        //     const formData = new FormData();
        //     formData.append("file", selectedFile);
        //     formData.append('nombre', user.nombre);
        //     formData.append('apellido', user.apellido);
        //     formData.append('telefono', user.telefono);
        //     formData.append('email', user.email);
        //     formData.append('soporte', user.soporte);
        //     formData.append('medida', user.medida);
        //     formData.append('cantidadColores', user.cantidadColores);
        //     formData.append('cantidad', user.cantidad);
        //     formData.append('descripcion', user.descripcion);

        //     axios.post("https://picante-server.onrender.com/send-budget", formData)
        //         .then(response => {
        //             console.log('respuesta del server', response.data);
        //             setLoading(false)
        //             Swal.fire({
        //                 html: 'Gracias por tu consulta<BR/>Te responderemos luego de analizar tu proyecto',
        //                 confirmButtonText: "VOLVER AL INICIO"
        //             })
        //             setTimeout(() => {
        //                 router.push("/")
        //             }, 500);
        //         })
        //         .catch(error => {
        //             console.log('error del server', error);
        //             setLoading(false)
        //         })
        // }
    }     



    // Expresiones regulares para los campos del formulario
    const nombreRegex = /^[\s\S]{2,25}$/i
    const apellidoRegex = /^[\s\S]{2,25}$/i // eslint-disable-next-line
    const telefonoRegex = /^[+()0-9\- ]*$/im // eslint-disable-next-line
    const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i


    return (
        <>
            {loading && <Loader />}
            <main className="formularioContainer">
                <h1>FORMULARIO DE PRESUPUESTO</h1>
                <div className='formularioP'>
                    <div className="formImgContainer">
                        <Image src='/Images/presupuesto/presupuesto.png' layout='fill' objectFit='contain' alt='picante serigrafia' className="prespImg" onLoad={() => setLoading(false)}></Image>

                        {loading !== true &&
                            <>
                                <a target="_blank" href="https://wa.me/+5493415442366?text=Hola.%20Buen%20día.%20Necesito%20digitalizar%20mi%20diseño." rel="noopener noreferrer">
                                    
                                    <img src='/Images/presupuesto/btn-01.svg' alt='picante serigrafia' className="btn-01"></img>
                                </a>
                                <a target="_blank" href='./Images/presupuesto/infografia.png' rel="noopener noreferrer">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src='/Images/presupuesto/btn-02.svg' alt='picante serigrafia' className="btn-02"></img>
                                </a>
                            </>
                        }
                    </div>
                </div>

                <form className="formulario" onSubmit={sendData}>
                    {/* <legend>Formulario de Presupuesto</legend>    */}
                    <Input placeholder="NOMBRE" name="nombre" label="Nombre" foo={handleInputChange} />
                    <Input placeholder="APELLIDO" name="apellido" label="Apellido" foo={handleInputChange} />
                    <Input placeholder="TELEFONO (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" foo={handleInputChange} />
                    <Input placeholder="E-MAIL" name="email" label="Email" foo={handleInputChange} />
                    <label htmlFor="soporte">Soporte de Trabajo</label>
                    <select className="form-control mb-3" name="soporte" id="soporte" onChange={handleInputChange}>

                        <option>Tela</option>
                        <option>Papel</option>
                        <option>Carton</option>
                        <option>Chapa</option>
                        <option>Plastico</option>
                        <option>Otros</option>
                    </select>
                    <Input placeholder="MEDIDA DEL TRABAJO EN cm" name="medida" label="Medida del Trabajo" foo={handleInputChange} />
                    <Input placeholder="CANTIDAD DE COLORES (máximo 5)" name="cantidadColores" label="Cantidad de Colores" foo={handleInputChange} />
                    <Input placeholder="CANTIDAD DE COPIAS A REALIZAR" name="cantidad" label="Cantidad de Copias" foo={handleInputChange} />
                    <Input placeholder="DESCRIPCION DEL TRABAJO A REALIZAR" name="descripcion" label="Breve Descripción" foo={handleInputChange} />

                    <>

                        <label className="fileSelectorLabel" htmlFor="file">ADJUNTE UNA IMAGEN DE REFERENCIA - MAX 10MB</label>
                        <input className="fileSelector" type="file" name="file" id="file" onChange={handleFileSelect} />

                    </>

                    {/* <label htmlFor='descripcion'>Breve Descripción</label>
        <input required placeholder='DESCRIPCION DEL TRABAJO A REALIZAR' className="userInput lastInput" type="text" name='descripcion' id='descripcion' onChange={handleInputChange}></input> */}

                    {nombreRegex.test(user.nombre) && apellidoRegex.test(user.apellido) && telefonoRegex.test(user.telefono) && emailRegex.test(user.email) && user.medida && user.cantidad && user.descripcion && selectedFile
                        ? <button className="col-2 enviarBtn" type="submit">Enviar</button>
                        : <button className="col-2 enviarBtnDesabilitado" disabled type="submit">ENVIAR</button>
                    }

                </form>

            </main>
        </>
    )
}

export default Presupuesto