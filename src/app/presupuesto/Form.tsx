"use client";

import Loader from "@/app/_components/Loader/Loader";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSubmit } from "@/lib/actions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { formSchema, FormValues } from "./FormSchema";
import { SOPORTES } from "./constants";

const ErrorMsg = ({ msg }: { msg?: string }) =>
  msg ? <span className="error-msg">{msg}</span> : null;

const Form = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null | undefined>(null);

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    // Validar tamaño del archivo
    if (selectedFile.size > 10000000) {
      Swal.fire({
        icon: "error",
        title: "Archivo demasiado grande",
        text: "El archivo es demasiado grande (máx. 10MB)",
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      e.target.value = ""; // Limpiar el input
      setFile(null);
      return;
    }

    // Archivo válido
    setFile(selectedFile);
    Swal.fire({
      icon: "success",
      title: "Archivo cargado",
      text: `"${selectedFile.name}" cargado exitosamente`,
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };

  const onSubmit = async (
    _values: FormValues,
    e?: React.BaseSyntheticEvent
  ) => {
    // Validar si se cargó un archivo
    if (!file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes adjuntar una imagen de referencia antes de enviar el formulario",
      });
      return;
    }

    // Validar tamaño del archivo
    if (file.size > 10000000) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El archivo es demasiado grande, el tamaño máximo es de 10MB",
      });
      return;
    }

    setLoading(true);
    const data = new FormData(e?.target as HTMLFormElement);

    try {
      const res = await handleSubmit(data);
      if (res === "ok") {
        setLoading(false);
        Swal.fire({
          icon: "success",
          html: "Gracias por tu consulta<BR/>Te responderemos luego de analizar tu proyecto",
          confirmButtonText: "VOLVER AL INICIO",
        });
        setTimeout(() => {
          router.push("/");
        }, 500);
      } else {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El archivo es demasiado grande, el tamaño máximo es de 10MB",
        });
      }
    } catch (error) {
      console.log("error al enviar", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar el formulario",
      });
    }
  };

  return (
    <>
      {loading && <Loader />}
      <form
        className="formulario"
        onSubmit={rhfHandleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="nombre">Nombre</label>
        <input
          placeholder="NOMBRE"
          className="userInput"
          type="text"
          id="nombre"
          {...register("nombre")}
        />
        <ErrorMsg msg={errors.nombre?.message} />

        <label htmlFor="apellido">Apellido</label>
        <input
          placeholder="APELLIDO"
          className="userInput"
          type="text"
          id="apellido"
          {...register("apellido")}
        />
        <ErrorMsg msg={errors.apellido?.message} />

        <label htmlFor="telefono">Telefono</label>
        <input
          placeholder="TELEFONO (sin guiones, sin 0 y sin 15)"
          className="userInput"
          type="text"
          id="telefono"
          {...register("telefono")}
        />
        <ErrorMsg msg={errors.telefono?.message} />

        <label htmlFor="email">Email</label>
        <input
          placeholder="E-MAIL"
          className="userInput"
          type="email"
          id="email"
          {...register("email")}
        />
        <ErrorMsg msg={errors.email?.message} />

        <label htmlFor="soporte">Soporte de Trabajo</label>
        <select
          className="form-control mb-3"
          id="soporte"
          {...register("soporte")}
        >
          {SOPORTES.map((soporte) => (
            <option key={soporte} value={soporte}>
              {soporte}
            </option>
          ))}
        </select>
        <ErrorMsg msg={errors.soporte?.message} />

        <label htmlFor="medida">Medida del Trabajo</label>
        <input
          placeholder="MEDIDA DEL TRABAJO EN cm"
          className="userInput"
          type="text"
          id="medida"
          {...register("medida")}
        />
        <ErrorMsg msg={errors.medida?.message} />

        <label htmlFor="cantidadColores">Cantidad de Colores</label>
        <input
          placeholder="CANTIDAD DE COLORES EN ESTAMPA (máximo 5)"
          className="userInput"
          type="text"
          id="cantidadColores"
          {...register("cantidadColores")}
        />
        <ErrorMsg msg={errors.cantidadColores?.message} />

        <label htmlFor="cantidad">Cantidad de Copias</label>
        <input
          placeholder="CANTIDAD DE COPIAS A REALIZAR"
          className="userInput"
          type="text"
          id="cantidad"
          {...register("cantidad")}
        />
        <ErrorMsg msg={errors.cantidad?.message} />

        <label htmlFor="descripcion">Breve Descripción</label>
        <input
          placeholder="DESCRIPCION DEL TRABAJO A REALIZAR"
          className="userInput"
          type="text"
          id="descripcion"
          {...register("descripcion")}
        />
        <ErrorMsg msg={errors.descripcion?.message} />

        <>
          <label className="fileSelectorLabel" htmlFor="file">
            {file
              ? `Imagen de referencia: ${file.name}`
              : "ADJUNTE UNA IMAGEN DE REFERENCIA - MAX 10MB"}
          </label>
          <input
            className="fileSelector"
            type="file"
            name="file"
            id="file"
            onChange={handleFileChange}
          />
        </>

        <button className="col-2 enviarBtn" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
