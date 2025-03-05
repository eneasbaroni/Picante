"use client";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user?: {
            role?: string;
        } & DefaultSession["user"];
    }
}
import Link from "next/link";
import { useEffect, useState } from "react";

const Curso = () => {
    const [loadSession, setLoadSession] = useState(true);
    const { data: session, status } = useSession();

    useEffect(() => {
        setTimeout(() => {
            setLoadSession(false);
        }, 500);
    }, [session]);

    return (
        <>
            {/* @ts-ignore */}
            {status === "authenticated" &&
            session &&
            session.user != null &&
            session.user != undefined &&
            session.user.role &&
            (session.user!.role === "admin" ||
                session.user!.role === "premium") ? (
                <div id="curso">
                    <div className="titlesContainer">
                        <h2>SERIGRAFÍA CREATIVA</h2>
                        <h3>Sección exclusiva para amantes del arte visual</h3>
                    </div>

                    <div className="init">
                        <h2>HOLA :)</h2>
                        <video autoPlay loop muted className="video">
                            <source
                                src="videos/Picante Stickers.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <p>
                            Bienvenid@s, mi nombre es Eve y te invito a explorar
                            y a divertirte, con esta hermosa técnica de
                            impresión manual.
                            <br />
                            Con la Serigrafía podrás crear varias reproducciones
                            de un mismo diseño.
                            <br />
                            Basándote en el estarcido (técnica primitiva) donde
                            pigmentos/tintas se aplican en ciertas zonas de una
                            plantilla pre-diseñada.
                        </p>
                    </div>

                    <div id="indice">
                        <h3>INDICE</h3>
                        <a href="#herramientas">HERRAMIENTAS</a>
                        <a href="#action">PASAR A LA ACCION</a>
                        <a href="#hans">MANOS A LA OBRA</a>
                        <a href="#crear">MOMENTO CREAR</a>
                        <a href="#iluminar">MOMENTO ILUMINAR</a>
                        <a href="#magico">MOMENTO MÁGICO</a>
                        <a href="#tinta">MOMENTO TINTA</a>
                        <a href="#recuperar">RECUPERAR/LAVAR</a>
                    </div>

                    <div id="herramientas">
                        <h3>HERRAMIENTAS</h3>
                        <h4>Kit básico para iniciar</h4>

                        <div className="hGroupContainer">
                            <div className="hContainer">
                                <div className="imgContainer imgMobile">
                                    <img
                                        src="/Images/curso/shablon2.svg"
                                        alt="shablon"
                                    />
                                </div>
                                <div className="imgContainer">
                                    <img
                                        src="/Images/curso/shablon2.svg"
                                        alt="shablon"
                                    />
                                </div>
                                <div className="infoContainer ">
                                    <p className="tLeft">
                                        <span>
                                            SHABLON / BASTIDOR / PLANTILLA
                                        </span>
                                        <br />
                                        Marco de aluminio, caño o madera donde
                                        se tensa una tela/malla.
                                        <br />
                                        La tela que se tensa en el marco está
                                        compuesta por hilos de poliéster.
                                        <br />
                                        Existen muchos tipos de telas, la
                                        principal diferencia es la cantidad de
                                        hilos que la componen.
                                        <br />
                                        Ejemplo: En una tela de 90 hilos, en
                                        cada centímetro cuadrado hay una trama
                                        de 90 hilos muy finos.
                                    </p>
                                </div>
                            </div>

                            <div className="hContainer">
                                <div className="imgContainer imgMobile">
                                    <img
                                        src="/Images/curso/emul2.svg"
                                        alt="emulsion"
                                    />
                                </div>
                                <div className="infoContainer ">
                                    <p className="tRight">
                                        <span>EMULSÍON</span>
                                        <br />
                                        Es una sustancia química fotosensible
                                        que se aplica al Shablon con una
                                        CUBETA/EMULSIONADOR (No es necesarias,
                                        podés utilizar otras herramientas).
                                        <br />
                                        Con la emulsión podemos crear la matriz.
                                        La emulsión se endurece cuando se expone
                                        a una luz potente y solo se puede
                                        eliminar con productos especiales.
                                    </p>
                                </div>
                                <div className="imgContainer">
                                    <img
                                        src="/Images/curso/emul2.svg"
                                        alt="emulsion"
                                    />
                                </div>
                            </div>

                            <div className="hContainer">
                                <div className="imgContainer imgMobile">
                                    <img
                                        src="/Images/curso/emulsionador2.svg"
                                        alt="emulsionador"
                                    />
                                </div>
                                <div className="imgContainer">
                                    <img
                                        src="/Images/curso/emulsionador2.svg"
                                        alt="emulsionador"
                                    />
                                </div>
                                <div className="infoContainer ">
                                    <p className="tLeft">
                                        <span>EMULSIONADOR</span>
                                        <br />
                                        Sirve para aplicar una capa fina de
                                        emulsión sobre la tela.
                                        <br />
                                        Posee un borde recto y liso que permite
                                        extender la emulsión de manera uniforme.
                                    </p>
                                </div>
                            </div>

                            <div className="hContainer">
                                <div className="imgContainer imgMobile">
                                    <img
                                        src="/Images/curso/espatula2.svg"
                                        alt="espatula"
                                    />
                                </div>
                                <div className="infoContainer ">
                                    <p className="tRight">
                                        <span>CINTA, ESPÁTULA</span>
                                        <br />
                                        Aquí te muestro herramientas claves para
                                        el proceso de producción.
                                        <br />
                                        Las espátulas pueden reemplazarse por
                                        cucharas, palitos chinos, etc.
                                        <br />
                                        Mientras más elementos tengas, podrás
                                        trabajar más comod@.
                                    </p>
                                </div>
                                <div className="imgContainer">
                                    <img
                                        src="/Images/curso/espatula2.svg"
                                        alt="espatula"
                                    />
                                </div>
                            </div>

                            <div className="hContainer ">
                                <div className="imgContainer imgMobile">
                                    <img
                                        src="/Images/curso/tinta2.svg"
                                        alt="tinta"
                                    />
                                </div>
                                <div className="imgContainer">
                                    <img
                                        src="/Images/curso/tinta2.svg"
                                        alt="tinta"
                                    />
                                </div>
                                <div className="infoContainer ">
                                    <p className="tLeft">
                                        <span>TINTAS</span>
                                        <br />
                                        Según el tipo de soporte/superficie a
                                        imprimir, debemos seleccionar la tinta
                                        indicada.
                                        <br />
                                        Existen opciones ecológicas, algunas que
                                        derivan del petróleo, otras que
                                        necesitan de 2 componentes para su
                                        correcto secado y endurecimiento.
                                    </p>
                                </div>
                            </div>

                            <div className="hContainer">
                                <div className="imgContainer imgMobile">
                                    <img
                                        src="/Images/curso/manigueta2.svg"
                                        alt="espatula"
                                    />
                                </div>
                                <div className="infoContainer ">
                                    <p className="tRight">
                                        <span>MANIGUETA</span>
                                        <br />
                                        Con esta herramienta, hacemos pasar la
                                        tinta por la tela de nuestro SHABLON.
                                        <br />
                                        Consta de dos partes: Mango o cuerpo de
                                        aluminio o madera y una hoja de goma.
                                        <br />
                                        La goma puede tener diferentes ángulos y
                                        también diferentes grados de dureza.
                                        <br />
                                        *También se puede utilizar para colorar
                                        emulsión*
                                    </p>
                                </div>
                                <div className="imgContainer">
                                    <img
                                        src="/Images/curso/manigueta2.svg"
                                        alt="espatula"
                                    />
                                </div>
                            </div>

                            <div className="hContainer">
                                <div className="imgContainer imgMobile">
                                    <img
                                        src="/Images/curso/bisagra2.svg"
                                        alt="tinta"
                                    />
                                </div>
                                <div className="imgContainer">
                                    <img
                                        src="/Images/curso/bisagra2.svg"
                                        alt="tinta"
                                    />
                                </div>
                                <div className="infoContainer ">
                                    <p className="tLeft">
                                        <span>BISAGRA</span>
                                        <br />
                                        Existen diferentes formas y tamaños.
                                        <br />
                                        Para iniciar, recomiendo invertir
                                        primero en este tipo de herramientas, ya
                                        que su costo no es elevado y permite
                                        practicar sin limitaciones.
                                        <br />
                                        SI está dentro de tus posibilidades,
                                        también podrás invertir en una Calesita,
                                        o mesas lineales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="action">
                        <h3>PASAR A LA ACCIÓN</h3>
                        <h4>Comienza la diversión</h4>
                        <p>
                            Ahora, ya conoces algunos de los materiales básicos
                            para poder comenzar a trabajar, pero falta algo MUY
                            IMPORTANTE: <br />
                            <span>EL DISEÑO</span>
                        </p>

                        <div className="example">
                            <img
                                src="/Images/curso/ejemplo.svg"
                                alt="ejemplo"
                            />
                            <p>
                                Ejemplo, de <span>DISEÑO DIGITAL</span> que
                                contiene lineas y tramas de punto para crear
                                efecto de sombra y volumen.{" "}
                            </p>
                        </div>

                        <p>
                            Para la creación de los diseños en formato digital,
                            es necesario tener en cuenta algunos detalles, ya
                            que pasar una idea desde un formato virtual/digital
                            a la realidad puede tener sus limitaciones a la hora
                            de aplicarlo. A continuación, te dejo unos consejos
                            para que puedas aplicar :)
                        </p>

                        <div className="consejos">
                            <p>Usar máxima calidad, mínomo 300 dpi</p>
                            <p>Usar Formatos AI, PDF o PNG</p>
                            <p>
                                Tamaño maximo 35x40cm, consultar por mayores
                                medidas
                            </p>
                            <p>Valor de línea: Superior a 1pt</p>
                            <p>
                                Tipografías: superior a 8pt., convertidas a
                                CURVAS
                            </p>
                            <p>Enviar referencia de colores específicas</p>
                            <p>Archivos separados por color a estampar</p>
                            <img src="/Images/curso/logo.svg" alt="ejemplo" />
                        </div>
                        <p>
                            Trabajar con el paquete de ADOBE (Photoshop,
                            Illustrator), permite tener mayores posibilidades,
                            te aconsejo que siempre trabajes en CMYK, para
                            lograr una impresión 100% negra modificando los
                            valores del color de tu diseño. A continuación, te
                            dejo unos consejos para que puedas aplicar :)
                        </p>

                        <img
                            src="/Images/curso/palette.png"
                            alt="paleta"
                            className="paleta"
                        />

                        <div className="digital">
                            <img src="/Images/curso/fibra2.svg" alt="fibra" />
                            <p>
                                <span>DISEÑO ANALOGICO/MANUAL</span>
                                <br />
                                Esta es una opción más experimental, creativa.{" "}
                                <br />
                                Podés utilizar fibrones, estilógrafos, fibras.
                                <br />
                                <span>IMPORTANTE! </span>
                                <br />
                                Tu dibujo, palabra, etc. deberá ser plasmado
                                sobre papel vegetal o filmina.
                                <br />
                                El cual deberá ser NEGRO (Los colores plenos
                                deberán ser bien trabajados, y las líneas no
                                podrán ser muy finas).
                                <br />
                                <span>DATO IMPORTANTE</span>
                                <br />
                                El color NEGRO bloquea la luz cuando se realiza
                                la exposición/revelado, esto permite que donde
                                se encuentre el color negro, cuando lavemos por
                                primera vez la emulsión, se quite fácilmente.
                            </p>
                        </div>

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="hans">
                        <h3>MANOS A LA OBRA</h3>
                        <h4>Ahora si te quiero ver</h4>
                        <p>
                            Ahora, te toca ponerte creativ@, te invito a{" "}
                            <span>CREAR UN DISEÑO</span> (Digital o Analógico).
                            El día que asistas al taller, deberás traer tu
                            diseño impreso o dibujado sobre PAPEL VEGETAL
                            (Tendré diseños disponibles el día del taller, por
                            si aún no tenés el tuyo).
                        </p>
                        <h4>ATENCIÓN</h4>
                        <p>
                            *El tamaño NO debe superar 10*10 cm.
                            <br />
                            *Seguir los consejos para evitar fallas técnicas.
                        </p>

                        <img
                            src="/Images/curso/squezee.svg"
                            alt="squezee"
                            className="cursoIll"
                        />

                        <p>
                            Para llegar a este momento ya pasamos por la etapa
                            de lectura, interiorización con las herramientas que
                            necesitamos y creación de un diseño.
                            <br />
                            Ahora, toca la parte más divertida y desafiante.
                            <br />
                            Para este oficio es necesario desarrollar varias
                            cualidades/habilidades, la más importante es la
                            Paciencia :)
                            <br />
                            Debemos ser tolerantes con nosotr@s, y al “fracaso”,
                            ya que es posible que al principio puedan suceder
                            algunos imprevistos técnicos, o situaciones que aún
                            son completamente desconocidas.
                            <br />
                            Intentar, equivocarse, y seguir adelante.
                        </p>

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="crear">
                        <h3>MOMENTO DE CREAR :)</h3>
                        <h4>A mover las manos</h4>
                        <p>
                            Conectar con nuestros sentidos, percibir texturas.
                            <br />
                            En este apartado, te dejaré tips que van a servirte
                            luego de realizar el curso. <br />
                            Para que recuerdes y refresques algunas cosas :) lo
                            demás lo veremos completamente el día al que asistas
                            al taller.
                        </p>

                        <h4>Elementos necesarios:</h4>
                        <p>
                            *Emulsión
                            <br />
                            *Espátula/Cuchara
                            <br />
                            *Emulsionador
                        </p>

                        <img
                            src="/Images/curso/curso-01.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <div className="curseGroup">
                            <img src="/Images/curso/emul2.svg" alt="emulsion" />
                            <p>
                                CONSEJO: Mezclá la emulsión, sobre todo si hace
                                mucho tiempo no la usas.
                            </p>
                        </div>

                        <img
                            src="/Images/curso/curso-02.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <div className="curseGroup">
                            <img
                                src="/Images/curso/emulsionador2.svg"
                                alt="emulsion"
                            />
                            <p>
                                CONSEJO: Calculá la cantidad de material según
                                el tamaño del shablon para evitar desperdicios.
                                <br />
                                Recordá que también podés utilizar una manigueta
                                para emulsionar.
                            </p>
                        </div>

                        <img
                            src="/Images/curso/curso-03.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <p>
                            Aplicá una capa fina de emulsión y secá.
                            <br />
                            No es necesario secar con pistola de calor, podes
                            utilizar secador de pelo, o dejar un ventilador
                            frente al shablon emulsionado.
                        </p>

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="iluminar">
                        <h3>MOMENTO DE ILUMINAR :)</h3>
                        <h4>El tiempo es oro</h4>
                        <p>
                            Recordá siempre que el positivo debe quedar fijo y
                            debe recibir luz pareja e intensa sobre toda la
                            superficie del shablón. No olvides aplicar peso
                            sobre el shablón (con libros, tintas, etc) para
                            lograr un buen resultado..
                        </p>

                        <img
                            src="/Images/curso/curso-04.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />

                        <div className="curseGroup">
                            <img
                                src="/Images/curso/process.svg"
                                alt="proceso"
                                className="imgLarge"
                            />
                            <p>
                                El tiempo de exposición a la luz, dependerá del
                                tipo de luz, la distancia y el tipo de shablón
                                que escojas. En la mesa picante 1.30¨{" "}
                            </p>
                        </div>

                        <img
                            src="/Images/curso/curso-05.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="magico">
                        <h3>MOMENTO MÁGICO :)</h3>
                        <h4>Gracias pacha</h4>
                        <img
                            src="/Images/curso/curso-06.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            IMPORTANTE: Utilizar el menor recurso de agua
                            posible para el proceso de revelado, en otras
                            palabras... CUIDA EL AGUA
                        </p>

                        <img
                            src="/Images/curso/curso-07.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />

                        <div className="curseGroup">
                            <img src="/Images/curso/sponge.svg" alt="esponja" />
                            <p>
                                CONSEJO: De manera suave, con movimientos
                                circulares, frotá una esponja sobre el shablón.{" "}
                                <br />
                                Hacelo por sus 2 lados, esta acción afloja de
                                manera más pareja la capa superficial de la
                                matriz..
                            </p>
                        </div>

                        <img
                            src="/Images/curso/curso-08.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <p>Dejá secando al sol tu matriz :)</p>

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="tinta">
                        <h3>MOMENTO TINTA :)</h3>
                        <h4>Posibilidades infinitas</h4>
                        <img
                            src="/Images/curso/curso-09.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            Una vez que tu matriz este completamente seca, es
                            momento de conectar con la parte del proceso más
                            esperada.
                        </p>

                        <div className="curseGroup">
                            <img src="/Images/curso/cinta.svg" alt="cinta" />
                            <p>
                                CONSEJO: Cubrí los bordes del shablón de manera
                                prolija para evitar que la tinta pase por
                                lugares que no deseamos.
                            </p>
                        </div>

                        <div className="curseGroup">
                            <img
                                src="/Images/curso/bisagra2.svg"
                                alt="bisagra"
                            />
                            <p>
                                Es momento de:
                                <br />
                                AJUSTAR: El shablón a la bisagra.
                                <br />
                                MEDIR: Que el soporte coincida con la matriz,
                                tomar referencias.
                                <br />
                                CONTROLAR: Todo lo anterior y también los
                                materiales que deberás tener disponibles a la
                                hora de imprimir.
                                <br />
                                OBSERVAR: Sé minucios@ chequeá 2 veces todo.
                            </p>
                        </div>

                        <img
                            src="/Images/curso/curso-10.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />

                        <div className="curseGroup">
                            <img
                                src="/Images/curso/pegamento.svg"
                                alt="pegamento"
                            />
                            <p>
                                Aquí te presento un producto auxiliar, ADHESIVO
                                PARA MESA.
                                <br />
                                Este producto es clave, ya que fija el soporte
                                (Tela, papel, cartón, etc) a la mesa de trabajo.
                                <br />
                                CONSEJO: Aplicá una capa fina, y dejá secar.
                            </p>
                        </div>

                        <h3>TINTAAAAAAA :)</h3>
                        <img
                            src="/Images/curso/curso-11.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />

                        <div className="curseGroup">
                            <img src="/Images/curso/tinta2.svg" alt="tinta" />
                            <p>
                                IMPORTANTE: Vamos a trabajar con tintas de base
                                acuosa, son más amigables con el medio ambiente
                                y con nosotros también :)
                            </p>
                        </div>

                        <img
                            src="/Images/curso/curso-12.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            Aquí lo más importante, es sentir. Conectar con
                            todos tus sentidos y experimentar sin “pensar
                            tanto”. Cada copia que realices será única e
                            irrepetible. Esa es la magia de la Serigrafia.
                        </p>

                        <img
                            src="/Images/curso/curso-13.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            Cada copia, va requerir que cargues tinta y luego la
                            descargues haciendo presión. <br />
                            CONSEJO: La manigueta, deberá aplicar la tinta a 45°
                            (Generalmente), puede haber momentos en que varíe,
                            esto dependerá del soporte y de la viscosidad de la
                            tinta.
                            <br />
                            Practicá sobre muchas superficies, permítete
                            equivocarte, porque de los errores se aprende un
                            montón :)
                        </p>

                        <img
                            src="/Images/curso/curso-14.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            ATENCIÓN: No te olvides de este truquito, que te va
                            permitir colocar los soportes de manera correcta,
                            para que la impresión/copia baje siempre en el mismo
                            lugar.{" "}
                        </p>

                        <img
                            src="/Images/curso/curso-15.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            Cada vez que realizás una copia, tenés la
                            posibilidad de corregir errores (si los hubiese, lo
                            importante es estar conecad@ con el momento presente
                            y disfrutar :){" "}
                        </p>

                        <img
                            src="/Images/curso/curso-16.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            Al final la producción, es muy importante LAVAR.
                            <br />
                            Quitar todo el excedente de tinta, mojar el shablón
                            y suavemente quitarle los restos de material
                            utilizado.
                            <br />
                            MIENTAS MAS LIMPIO QUEDE, MEJOR SERÁ :)
                        </p>

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="recuperar">
                        <h3>RECUPERAR/LAVAR</h3>
                        <h4>Re-utilizar tu shablón</h4>
                        <p>
                            Este proceso te va permitir borrar el diseño que
                            utilizaste y luego de unos minutos poder tener el
                            shablón limpio para trabajos futuros.
                        </p>
                        <img
                            src="/Images/curso/curso-17.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />

                        <h4>KIT DE LIMPIEZA</h4>

                        <div className="curseGroup">
                            <img
                                src="/Images/curso/desgrabador.svg"
                                alt="desgrabador"
                            />
                            <p>
                                DESGRABADOR & PASTA ALCALINA
                                <br />
                                Estos productos son altamente corrosivos y
                                peligrosos, es necesario que SIEMPRE utilices
                                guantes especiales.
                            </p>
                        </div>

                        <div className="curseGroup">
                            <img src="/Images/curso/sponge.svg" alt="esponja" />
                            <p>
                                ESPONJA
                                <br />
                                Te sugiero que puedas tener 1 esponja destinada
                                100% a este proceso.
                            </p>
                        </div>

                        <div className="curseGroup">
                            <img src="/Images/curso/estopa.svg" alt="estopa" />
                            <p>
                                ESTOPA
                                <br />
                                Nuestra aliada para aplicar los productos
                                auxiliares.
                            </p>
                        </div>

                        <div className="curseGroup">
                            <img
                                src="/Images/curso/diluyente.svg"
                                alt="diluyente"
                            />
                            <p>
                                C3/DILUYENTE <br />
                                Este tipo de producto, al fusionarse con la
                                pasta alcalina genera un efecto químico potente,
                                quita cualquier mancha, resto de material que
                                haya quedado sobre el shablón.
                            </p>
                        </div>

                        <div className="curseGroup">
                            <img src="/Images/curso/gloves.svg" alt="guantes" />
                            <p>
                                GUANTES (Acronitrilo DPS verde) <br />
                                Recomiendo este guante ya que soportan los
                                líquidos y pastas que utilizamos para este
                                proceso.
                            </p>
                        </div>

                        <img
                            src="/Images/curso/curso-18.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            Mojá el shablón por sus 2 lados, y aplicá una capa
                            fina de DESGRABADOR.
                        </p>

                        <img
                            src="/Images/curso/curso-19.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        />
                        <br />
                        <br />
                        <p>
                            Así debería verse la emulsión aflojandosé, refregar
                            por sus 2 lados de manera circular haciendo presión
                            (no muy fuerte). Enjuagá y colocá PASTA ALCALINA.
                        </p>

                        <div className="curseGroup">
                            <img
                                src="/Images/curso/diluyente.svg"
                                alt="diluyente"
                            />
                            <p>
                                Es momento de utilizar C3, en una estopa coloca
                                el producto hasta que la misma quede húmeda.
                                <br />
                                *Frotá por los 2 lados del shablón eliminando
                                cualquier excedente de la etapa anterior.
                                <br />
                                *Enjuagá con agua a presión (puede ser con una
                                manguera, o con hidrolavadora).
                                <br />
                                *Por último, LAVA CON DETERGENTE : Los guantes,
                                el shablón y las herramientas que utilizaste.
                            </p>
                        </div>

                        <h3>
                            LISTO!!
                            <br />
                            VOLVER A EMPEZAR
                        </h3>
                        <h4>¿Ya tenés tu nuevo diseño?</h4>

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>

                    <div id="DTF">
                        <h3>GUÍA PARA OBTENER UN BUEN DISEÑO DTF TEXTIL</h3>
                        <h4>Creación del Diseño</h4>
                        <p>
                            EUtilizar software como Photoshop, Illustrator o
                            CorelDRAW.
                            <br />
                            Diseñar con fondo transparente.
                            <br />
                            Mantener una resolución de al menos 300 DPI.
                            <br />
                            Usar perfil de color RGB (según requerimiento del
                            proveedor).
                        </p>
                        <br />
                        <br />

                        <h4>Preparación del Archivo</h4>
                        <p>
                            Guardar en formatos PNG, PSD, AI o PDF.
                            <br />
                            Asegurar que el diseño tenga bordes limpios y bien
                            definidos.
                            <br />
                            Convertir los textos en contornos o curvas para
                            evitar problemas de compatibilidad.
                        </p>
                        <br />
                        <br />

                        <h4>Transferencia a la Prenda</h4>
                        <p>
                            Se coloca la película sobre la prenda y se presiona
                            con calor.
                            <br />
                            Se retira la película en frío o caliente, según el
                            tipo de DTF.
                        </p>
                        <br />
                        <br />

                        <h4>Finalización</h4>
                        <p>
                            Se puede hacer un prensado adicional para mejorar la
                            fijación.
                            <br />
                            Revisar la calidad y resistencia del estampado.
                        </p>
                        <br />
                        <br />

                        <h4>Beneficios de la Técnica DTF</h4>
                        <p>
                            Ideal para pequeñas producciones y personalización
                            de prendas.
                            <br />
                            Resistente a lavados y desgaste por fricción.
                            <br />
                            Permite imprimir colores degradados y detalles
                            complejos.
                            <br />
                            Puede aplicarse en prendas claras y oscuras sin
                            perder calidad.
                        </p>
                        <br />
                        <br />

                        <h3>DTF VS. SERIGRAFIA</h3>
                        <h4>Costo en Producciones a Gran Escala</h4>
                        <p>
                            Mientras que el DTF es ideal para tiradas cortas y
                            personalización, para grandes volúmenes la
                            serigrafía suele ser más económica, ya que
                            distribuye el costo de la malla y la preparación en
                            muchas unidades.
                        </p>
                        <br />
                        <br />
                        <h4>Sensación y Textura en la Prenda</h4>
                        <p>
                            Los diseños DTF pueden presentar una sensación
                            ligeramente más &quot;plástica&quot; o rígida,
                            mientras que la serigrafía, al integrarse más al
                            tejido, ofrece un acabado que muchos consideran más
                            suave al tacto.
                        </p>
                        <br />
                        <br />
                        <h4>Reproducción de Colores Sólidos</h4>
                        <p>
                            La serigrafía permite aplicar capas de tinta que
                            ofrecen una saturación intensa y uniforme, ideal
                            para colores sólidos. En algunos casos, el DTF puede
                            presentar limitaciones en la intensidad y
                            uniformidad de ciertos colores.
                        </p>
                        <br />
                        <br />
                        <h4>Mantenimiento y Calibración del Equipo</h4>
                        <p>
                            Las impresoras DTF requieren de calibraciones y
                            cuidados técnicos constantes para mantener la
                            calidad de impresión, lo que puede implicar mayores
                            desafíos técnicos y costos de mantenimiento en
                            comparación con equipos de serigrafía tradicionales.
                        </p>
                        <br />
                        <br />
                        <h4>Durabilidad en Aplicaciones Específicas</h4>
                        <p>
                            Aunque el DTF tiene una buena durabilidad, la
                            serigrafía con tintas específicas (como la
                            plastisol) y procesos de curado .
                        </p>
                        <br />
                        <br />

                        <button className="indiceBtn">
                            <a href="#indice">Volver al índice</a>
                        </button>
                    </div>
                </div>
            ) : loadSession ? (
                <div id="curso">
                    <div className="titlesContainer">
                        <h2>CARGANDO....</h2>
                    </div>
                </div>
            ) : (
                <div id="curso">
                    <div className="titlesContainer">
                        <h2>ACCESO DENEGADO</h2>
                        <h3>
                            Inicia sesión y adquiere el curso para poder acceder
                            al material de estudio
                        </h3>
                        <Link href="/profile">
                            <button className="indiceBtn">
                                Iniciar sesión
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Curso;
