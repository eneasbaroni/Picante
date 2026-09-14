import Image from "next/image";
import Form from "./Form";

const Presupuesto = () => {
    return (
        <main className="formularioContainer">
            <h1 className=" mx-0 my-4 mobile:mt-16">
                FORMULARIO DE PRESUPUESTO
            </h1>
            <div className="formularioP bg-[#FFD5E1]">
                <div className="formImgContainer ">
                    <Image
                        src="/Images/presupuesto/presupuesto.png"
                        layout="fill"
                        objectFit="contain"
                        alt="picante serigrafia"
                        className="prespImg"
                    ></Image>

                    {/*   <a target="_blank" href="https://wa.me/+5493415442366?text=Hola.%20Buen%20día.%20Necesito%20digitalizar%20mi%20diseño." rel="noopener noreferrer">
           
                        <img src='/Images/presupuesto/btn-01.svg' alt='picante serigrafia' className="btn-01"></img>
                    </a> */}
                    <a
                        target="_blank"
                        href="./Images/presupuesto/infografia.png"
                        rel="noopener noreferrer"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Images/presupuesto/btn-02.svg"
                            alt="picante serigrafia"
                            className="btn-02"
                        ></img>
                    </a>
                </div>
            </div>

            <Form />
        </main>
    );
};

export default Presupuesto;
