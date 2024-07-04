'use client'

import Loader from "@/app/_components/Loader/Loader"
import { useState } from "react"
import { handleSubmit } from "@/lib/actions"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

const Input = ({ placeholder, name, type, label }: { placeholder: string, name: string, type: string, label: string }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input required placeholder={placeholder} className="userInput" type={type} name={name} id={name}></input>
        </>
    )
}
const Form = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<File | null | undefined>(null)

    const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        //pasar la data a FormData

        if (file!.size > 10000000) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El archivo es demasiado grande, el tamaño máximo es de 10MB',
            })
            setLoading(false)
            return
        }


        const data = new FormData(e.currentTarget)
        try {

            const res = await handleSubmit(data)
            if (res === 'ok') {
                setLoading(false)
                Swal.fire({
                    html:'Gracias por tu consulta<BR/>Te responderemos luego de analizar tu proyecto',
                    confirmButtonText: "VOLVER AL INICIO"
                  })
                  setTimeout(() => {
                    router.push("/")              
                  }, 500);              
            } else {
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El archivo es demasiado grande, el tamaño máximo es de 10MB',
                })
            }
        } catch (error) {
            console.log('error al enviar', error);            
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al enviar el formulario',
            })
        }
    }


    return (
        <>
            {loading && <Loader />}
            <form className="formulario" onSubmit={handleForm}>
                {/* <legend>Formulario de Presupuesto</legend>    */}
                <Input placeholder="NOMBRE" name="nombre" label="Nombre" type='text' />
                <Input placeholder="APELLIDO" name="apellido" label="Apellido" type='text' />
                <Input placeholder="TELEFONO (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" type='text' />
                <Input placeholder="E-MAIL" name="email" label="Email" type="email" />
                <label htmlFor="soporte">Soporte de Trabajo</label>
                <select className="form-control mb-3" name="soporte" id="soporte" >
                    <option>Tela</option>
                    <option>Papel</option>
                    <option>Carton</option>
                    <option>Chapa</option>
                    <option>Plastico</option>
                    <option>DTF (Direct transfer to film)</option>
                </select>
                <Input placeholder="MEDIDA DEL TRABAJO EN cm" name="medida" label="Medida del Trabajo" type='text' />
                <Input placeholder="CANTIDAD DE COLORES (máximo 5)" name="cantidadColores" label="Cantidad de Colores" type='text' />
                <Input placeholder="CANTIDAD DE COPIAS A REALIZAR" name="cantidad" label="Cantidad de Copias" type='text' />
                <Input placeholder="DESCRIPCION DEL TRABAJO A REALIZAR" name="descripcion" label="Breve Descripción" type='text' />

                <>

                    <label className="fileSelectorLabel" htmlFor="file">ADJUNTE UNA IMAGEN DE REFERENCIA - MAX 10MB</label>
                    <input className="fileSelector" type="file" name="file" id="file" onChange={(e) => setFile(e.target.files?.[0])} />

                </>

                <button className="col-2 enviarBtn" type="submit">Enviar</button>


            </form>
        </>
    )
}

export default Form
