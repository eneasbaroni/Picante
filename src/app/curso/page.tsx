"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navContainer, navLinks } from "@/lib/anims";
import Grill from "../(index)/_components/grill/Grill";
import Menu from "./menu";

const BackBtn = () => {
  return (
    <a href="#indice" className="mobile:w-full m-auto mt-6 flex">
      <motion.div
        className="relative w-full h-full border border-main flex items-center justify-between px-4"
        variants={navContainer}
        initial="init"
        whileHover="animate"
      >
        <p className="w-full font-anton text-center z-20">Volver al índice</p>
        <div className="absolute top-0 left-0 w-full h-full bg-white"></div>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0 flex z-10  bg-pinky"
          variants={navLinks}
        ></motion.div>
      </motion.div>
    </a>
  );
};

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
      (session.user!.role === "admin" || session.user!.role === "premium") ? (
        <div
          id="curso"
          className="
                        px-40 tablet:px-20 pb-20 mobile:px-10 flex flex-col items-center mt-[6vw]
                         [&_h3]:text-4xl [&_h3]:tablet:text-2xl [&_h3]:mobile:text-xl [&_h3]:text-center
                         [&_h4]:text-3xl [&_h4]:tablet:text-xl [&_h4]:mobile:text-lg [&_h4]:text-center [&_h4]:font-titilium
                         [&_.cursoModule]:border-b-[1px] [&_.cursoModule]:px-[25%] [&_.cursoModule]:tablet:px-0 [&_.cursoModule]:py-10 [&_.cursoModule_img]:m-auto [&_.cursoModule_img]:my-4  
                         [&_.imgTextContainer]:w-full [&_.imgTextContainer]:flex [&_.imgTextContainer]:flex-row [&_.imgTextContainer]:items-center [&_.imgTextContainer]:gap-4 [&_.imgTextContainer>img]:w-[25%] [&_.imgTextContainer>img]:max-h-[200px] [&_.imgTextContainer>p]:w-[75%] 
                         [&_.imgTextContainer>p>span]:text-2xl [&_.imgTextContainer>p>span]:tablet:text-xl [&_.imgTextContainer>p>span]:mobile:text-lg [&_.imgTextContainer>p>span]:font-bold [&_.imgTextContainer>p>span]:font-anton 
                         [&_.cursoImg]:p-2 [&_.cursoImg]:mobile:p-1 [&_.cursoImg]:bg-greeny [&_.cursoImg]:rounded-xl
                    "
        >
          <Grill />
          <div className="titlesContainer w-1/2 notebook:w-full m-auto text-center mb-10">
            <h2 className="text-center mobile:mt-12">
              SERIGRAFÍA{" "}
              <span
                className="font-anton text-6xl tablet:text-4xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                style={{
                  WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",
                }}
              >
                CREATIVA
              </span>
            </h2>
            <h3 className="text-center text-4xl tablet:text-2xl mobile:text-xl">
              Sección exclusiva para amantes del arte visual
            </h3>
          </div>

          <div className="pb-6">
            <h2 className="text-center text-6xl ">HOLA :)</h2>
            <div className="w-1/2 mobile:w-full m-auto mt-4 rounded-3xl overflow-hidden  border-main p-2 bg-greeny">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl overflow-hidden"
              >
                <source src="videos/Picante Stickers.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mt-2 px-2 font-inter text-pretty text-xl tablet:text-lg mobile:text-sm w-1/2 tablet:w-3/4 mobile:w-full m-auto">
              Bienvenid@s, mi nombre es Eve y te invito a explorar y a
              divertirte, con esta hermosa técnica de impresión manual.
              <br />
              Con la Serigrafía podrás crear varias reproducciones de un mismo
              diseño.
              <br />
              Basándote en el estarcido (técnica primitiva) donde
              pigmentos/tintas se aplican en ciertas zonas de una plantilla
              pre-diseñada.
            </p>
          </div>

          <Menu />

          <div id="herramientas" className="border-y-[1px] w-full py-10">
            <h3>HERRAMIENTAS</h3>
            <h4>Kit básico para iniciar</h4>

            <div className="mt-4 flex flex-row w-full flex-wrap gap-4 justify-between [&>div]:w-[calc(50%-0.5rem)] [&>div]:tablet:w-full [&>div]:flex [&>div]:flex-row [&>div]:mobile:flex-col [&>div]:p-4 [&>div]:gap-4 [&>div]:items-center [&>div]:bg-pinky [&>div]:rounded-xl [&_.imgContainer]:w-1/3 [&_.imgContainer]:mobile:w-full [&_.imgContainer>img]:max-h-44 [&_.imgContainer>img]:mobile:max-h-32 [&_.imgContainer>img]:m-auto   [&_.imgContainer]:px-4 [&_.infoContainer]:w-2/3 [&_.infoContainer]:mobile:w-full [&_span]:font-anton [&_span]:text-2xl h-  ">
              <div className="w-full">
                <div className="imgContainer">
                  <img src="/Images/curso/shablon2.svg" alt="shablon" />
                </div>
                <div className="infoContainer">
                  <p>
                    <span>SHABLON / BASTIDOR / PLANTILLA</span>
                    <br />
                    Marco de aluminio, caño o madera donde se tensa una
                    tela/malla.
                    <br />
                    La tela que se tensa en el marco está compuesta por hilos de
                    poliéster.
                    <br />
                    Existen muchos tipos de telas, la principal diferencia es la
                    cantidad de hilos que la componen.
                    <br />
                    Ejemplo: En una tela de 90 hilos, en cada centímetro
                    cuadrado hay una trama de 90 hilos muy finos.
                  </p>
                </div>
              </div>

              <div>
                <div className="imgContainer">
                  <img src="/Images/curso/emul2.svg" alt="emulsion" />
                </div>
                <div className="infoContainer ">
                  <p>
                    <span>EMULSÍON</span>
                    <br />
                    Es una sustancia química fotosensible que se aplica al
                    Shablon con una CUBETA/EMULSIONADOR (No es necesarias, podés
                    utilizar otras herramientas).
                    <br />
                    Con la emulsión podemos crear la matriz. La emulsión se
                    endurece cuando se expone a una luz potente y solo se puede
                    eliminar con productos especiales.
                  </p>
                </div>
              </div>

              <div className="hContainer">
                <div className="imgContainer imgMobile">
                  <img
                    src="/Images/curso/emulsionador2.svg"
                    alt="emulsionador"
                  />
                </div>
                <div className="infoContainer ">
                  <p>
                    <span>EMULSIONADOR</span>
                    <br />
                    Sirve para aplicar una capa fina de emulsión sobre la tela.
                    <br />
                    Posee un borde recto y liso que permite extender la emulsión
                    de manera uniforme.
                  </p>
                </div>
              </div>

              <div className="hContainer">
                <div className="imgContainer">
                  <img src="/Images/curso/espatula2.svg" alt="espatula" />
                </div>
                <div className="infoContainer ">
                  <p>
                    <span>CINTA, ESPÁTULA</span>
                    <br />
                    Aquí te muestro herramientas claves para el proceso de
                    producción.
                    <br />
                    Las espátulas pueden reemplazarse por cucharas, palitos
                    chinos, etc.
                    <br />
                    Mientras más elementos tengas, podrás trabajar más comod@.
                  </p>
                </div>
              </div>

              <div className="hContainer ">
                <div className="imgContainer">
                  <img src="/Images/curso/tinta2.svg" alt="tinta" />
                </div>
                <div className="infoContainer ">
                  <p>
                    <span>TINTAS</span>
                    <br />
                    Según el tipo de soporte/superficie a imprimir, debemos
                    seleccionar la tinta indicada.
                    <br />
                    Existen opciones ecológicas, algunas que derivan del
                    petróleo, otras que necesitan de 2 componentes para su
                    correcto secado y endurecimiento.
                  </p>
                </div>
              </div>

              <div className="hContainer">
                <div className="imgContainer">
                  <img src="/Images/curso/manigueta2.svg" alt="espatula" />
                </div>
                <div className="infoContainer ">
                  <p>
                    <span>MANIGUETA</span>
                    <br />
                    Con esta herramienta, hacemos pasar la tinta por la tela de
                    nuestro SHABLON.
                    <br />
                    Consta de dos partes: Mango o cuerpo de aluminio o madera y
                    una hoja de goma.
                    <br />
                    La goma puede tener diferentes ángulos y también diferentes
                    grados de dureza.
                    <br />
                    *También se puede utilizar para colorar emulsión*
                  </p>
                </div>
              </div>

              <div className="hContainer">
                <div className="imgContainer">
                  <img src="/Images/curso/bisagra2.svg" alt="tinta" />
                </div>

                <div className="infoContainer ">
                  <p>
                    <span>BISAGRA</span>
                    <br />
                    Existen diferentes formas y tamaños.
                    <br />
                    Para iniciar, recomiendo invertir primero en este tipo de
                    herramientas, ya que su costo no es elevado y permite
                    practicar sin limitaciones.
                    <br />
                    SI está dentro de tus posibilidades, también podrás invertir
                    en una Calesita, o mesas lineales.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 tablet:w-full m-auto">
              <BackBtn />
            </div>
          </div>

          <div id="action" className="cursoModule">
            <h3>PASAR A LA ACCIÓN</h3>
            <h4>Comienza la diversión</h4>
            <p>
              Ahora, ya conoces algunos de los materiales básicos para poder
              comenzar a trabajar, pero falta algo MUY IMPORTANTE:{" "}
              <span className="font-bold text-2xl">EL DISEÑO</span>
            </p>

            <div className="example">
              <img
                src="/Images/curso/ejemplo.svg"
                alt="ejemplo"
                className="p-4 rounded-xl bg-pinky"
              />
              <p>
                Ejemplo, de{" "}
                <span className="font-bold text-2xl tablet:text-xl mobile:text-lg">
                  DISEÑO DIGITAL
                </span>{" "}
                que contiene lineas y tramas de punto para crear efecto de
                sombra y volumen.{" "}
              </p>
            </div>

            <p>
              Para la creación de los diseños en formato digital, es necesario
              tener en cuenta algunos detalles, ya que pasar una idea desde un
              formato virtual/digital a la realidad puede tener sus limitaciones
              a la hora de aplicarlo. A continuación, te dejo unos consejos para
              que puedas aplicar :)
            </p>

            <div className="[&>div]:flex [&>div]:flex-row [&>div]:gap-2 [&>div]:items-center [&_.point]:w-4 [&_.point]:h-4 [&_.point]:bg-greeny [&_.point]:rounded-full   ">
              <div>
                <div className="point"></div>
                <p>Usar máxima calidad, mínomo 300 dpi</p>
              </div>
              <div>
                <div className="point"></div>

                <p>Usar Formatos AI, PDF o PNG</p>
              </div>
              <div>
                <div className="point"></div>

                <p>Tamaño maximo 35x40cm, consultar por mayores medidas</p>
              </div>
              <div>
                <div className="point"></div>

                <p>Valor de línea: Superior a 1pt</p>
              </div>
              <div>
                <div className="point"></div>

                <p>Tipografías: superior a 8pt., convertidas a CURVAS</p>
              </div>
              <div>
                <div className="point"></div>

                <p>Enviar referencia de colores específicas</p>
              </div>
              <div>
                <div className="point"></div>

                <p>Archivos separados por color a estampar</p>
              </div>
              <img src="/Images/curso/logo.svg" alt="ejemplo" />
            </div>
            <p>
              Trabajar con el paquete de ADOBE (Photoshop, Illustrator), permite
              tener mayores posibilidades, te aconsejo que siempre trabajes en
              CMYK, para lograr una impresión 100% negra modificando los valores
              del color de tu diseño. A continuación, te dejo unos consejos para
              que puedas aplicar :)
            </p>

            <img
              src="/Images/curso/palette.png"
              alt="paleta"
              className="paleta"
            />

            <div className="imgTextContainer">
              <img src="/Images/curso/fibra2.svg" alt="fibra" />
              <p>
                <span>DISEÑO ANALOGICO/MANUAL</span>
                <br />
                Esta es una opción más experimental, creativa. <br />
                Podés utilizar fibrones, estilógrafos, fibras.
                <br />
                <span>IMPORTANTE! </span>
                <br />
                Tu dibujo, palabra, etc. deberá ser plasmado sobre papel vegetal
                o filmina.
                <br />
                El cual deberá ser NEGRO (Los colores plenos deberán ser bien
                trabajados, y las líneas no podrán ser muy finas).
                <br />
                <span>DATO IMPORTANTE</span>
                <br />
                El color NEGRO bloquea la luz cuando se realiza la
                exposición/revelado, esto permite que donde se encuentre el
                color negro, cuando lavemos por primera vez la emulsión, se
                quite fácilmente.
              </p>
            </div>

            <BackBtn />
          </div>

          <div id="hans" className="cursoModule">
            <h3>MANOS A LA OBRA</h3>
            <h4>Ahora si te quiero ver</h4>
            <p>
              Ahora, te toca ponerte creativ@, te invito a{" "}
              <span className="font-bold text-xl">CREAR UN DISEÑO</span>{" "}
              (Digital o Analógico). El día que asistas al taller, deberás traer
              tu diseño impreso o dibujado sobre PAPEL VEGETAL (Tendré diseños
              disponibles el día del taller, por si aún no tenés el tuyo).
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
              Para llegar a este momento ya pasamos por la etapa de lectura,
              interiorización con las herramientas que necesitamos y creación de
              un diseño.
              <br />
              Ahora, toca la parte más divertida y desafiante.
              <br />
              Para este oficio es necesario desarrollar varias
              cualidades/habilidades, la más importante es la Paciencia :)
              <br />
              Debemos ser tolerantes con nosotr@s, y al “fracaso”, ya que es
              posible que al principio puedan suceder algunos imprevistos
              técnicos, o situaciones que aún son completamente desconocidas.
              <br />
              Intentar, equivocarse, y seguir adelante.
            </p>

            <BackBtn />
          </div>

          <div id="crear" className="cursoModule">
            <h3>MOMENTO DE CREAR :)</h3>
            <h4>A mover las manos</h4>
            <p>
              Conectar con nuestros sentidos, percibir texturas.
              <br />
              En este apartado, te dejaré tips que van a servirte luego de
              realizar el curso. <br />
              Para que recuerdes y refresques algunas cosas :) lo demás lo
              veremos completamente el día al que asistas al taller.
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
            <div className="imgTextContainer">
              <img src="/Images/curso/emul2.svg" alt="emulsion" />
              <p>
                CONSEJO: Mezclá la emulsión, sobre todo si hace mucho tiempo no
                la usas.
              </p>
            </div>

            <img
              src="/Images/curso/curso-02.png"
              alt="imagen del curso"
              className="cursoImg"
            />
            <div className="imgTextContainer">
              <img src="/Images/curso/emulsionador2.svg" alt="emulsion" />
              <p>
                CONSEJO: Calculá la cantidad de material según el tamaño del
                shablon para evitar desperdicios.
                <br />
                Recordá que también podés utilizar una manigueta para
                emulsionar.
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
              No es necesario secar con pistola de calor, podes utilizar secador
              de pelo, o dejar un ventilador frente al shablon emulsionado.
            </p>

            <BackBtn />
          </div>

          <div id="iluminar" className="cursoModule">
            <h3>MOMENTO DE ILUMINAR :)</h3>
            <h4>El tiempo es oro</h4>
            <p>
              Recordá siempre que el positivo debe quedar fijo y debe recibir
              luz pareja e intensa sobre toda la superficie del shablón. No
              olvides aplicar peso sobre el shablón (con libros, tintas, etc)
              para lograr un buen resultado..
            </p>

            <img
              src="/Images/curso/curso-04.png"
              alt="imagen del curso"
              className="cursoImg"
            />

            <div className="imgTextContainer">
              <img
                src="/Images/curso/process.svg"
                alt="proceso"
                className="imgLarge"
              />
              <p>
                El tiempo de exposición a la luz, dependerá del tipo de luz, la
                distancia y el tipo de shablón que escojas. En la mesa picante
                1.30¨{" "}
              </p>
            </div>

            <img
              src="/Images/curso/curso-05.png"
              alt="imagen del curso"
              className="cursoImg"
            />

            <BackBtn />
          </div>

          <div id="magico" className="cursoModule">
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
              IMPORTANTE: Utilizar el menor recurso de agua posible para el
              proceso de revelado, en otras palabras... CUIDA EL AGUA
            </p>

            <img
              src="/Images/curso/curso-07.png"
              alt="imagen del curso"
              className="cursoImg"
            />

            <div className="imgTextContainer">
              <img src="/Images/curso/sponge.svg" alt="esponja" />
              <p>
                CONSEJO: De manera suave, con movimientos circulares, frotá una
                esponja sobre el shablón. <br />
                Hacelo por sus 2 lados, esta acción afloja de manera más pareja
                la capa superficial de la matriz..
              </p>
            </div>

            <img
              src="/Images/curso/curso-08.png"
              alt="imagen del curso"
              className="cursoImg"
            />
            <p>Dejá secando al sol tu matriz :)</p>

            <BackBtn />
          </div>

          <div id="tinta" className="cursoModule">
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
              Una vez que tu matriz este completamente seca, es momento de
              conectar con la parte del proceso más esperada.
            </p>

            <div className="imgTextContainer">
              <img src="/Images/curso/cinta.svg" alt="cinta" />
              <p>
                CONSEJO: Cubrí los bordes del shablón de manera prolija para
                evitar que la tinta pase por lugares que no deseamos.
              </p>
            </div>

            <div className="imgTextContainer">
              <img src="/Images/curso/bisagra2.svg" alt="bisagra" />
              <p>
                Es momento de:
                <br />
                AJUSTAR: El shablón a la bisagra.
                <br />
                MEDIR: Que el soporte coincida con la matriz, tomar referencias.
                <br />
                CONTROLAR: Todo lo anterior y también los materiales que deberás
                tener disponibles a la hora de imprimir.
                <br />
                OBSERVAR: Sé minucios@ chequeá 2 veces todo.
              </p>
            </div>

            <img
              src="/Images/curso/curso-10.png"
              alt="imagen del curso"
              className="cursoImg"
            />

            <div className="imgTextContainer">
              <img src="/Images/curso/pegamento.svg" alt="pegamento" />
              <p>
                Aquí te presento un producto auxiliar, ADHESIVO PARA MESA.
                <br />
                Este producto es clave, ya que fija el soporte (Tela, papel,
                cartón, etc) a la mesa de trabajo.
                <br />
                CONSEJO: Aplicá una capa fina, y dejá secar.
              </p>
            </div>

            <h3 className="mt-4">TINTAAAAAAA :)</h3>
            <img
              src="/Images/curso/curso-11.png"
              alt="imagen del curso"
              className="cursoImg"
            />

            <div className="imgTextContainer">
              <img src="/Images/curso/tinta2.svg" alt="tinta" />
              <p>
                IMPORTANTE: Vamos a trabajar con tintas de base acuosa, son más
                amigables con el medio ambiente y con nosotros también :)
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
              Aquí lo más importante, es sentir. Conectar con todos tus sentidos
              y experimentar sin “pensar tanto”. Cada copia que realices será
              única e irrepetible. Esa es la magia de la Serigrafia.
            </p>

            <img
              src="/Images/curso/curso-13.png"
              alt="imagen del curso"
              className="cursoImg"
            />
            <br />
            <br />
            <p>
              Cada copia, va requerir que cargues tinta y luego la descargues
              haciendo presión. <br />
              CONSEJO: La manigueta, deberá aplicar la tinta a 45°
              (Generalmente), puede haber momentos en que varíe, esto dependerá
              del soporte y de la viscosidad de la tinta.
              <br />
              Practicá sobre muchas superficies, permítete equivocarte, porque
              de los errores se aprende un montón :)
            </p>

            <img
              src="/Images/curso/curso-14.png"
              alt="imagen del curso"
              className="cursoImg"
            />
            <br />
            <br />
            <p>
              ATENCIÓN: No te olvides de este truquito, que te va permitir
              colocar los soportes de manera correcta, para que la
              impresión/copia baje siempre en el mismo lugar.{" "}
            </p>

            <img
              src="/Images/curso/curso-15.png"
              alt="imagen del curso"
              className="cursoImg"
            />
            <br />
            <br />
            <p>
              Cada vez que realizás una copia, tenés la posibilidad de corregir
              errores (si los hubiese, lo importante es estar conecad@ con el
              momento presente y disfrutar :){" "}
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
              Quitar todo el excedente de tinta, mojar el shablón y suavemente
              quitarle los restos de material utilizado.
              <br />
              MIENTAS MAS LIMPIO QUEDE, MEJOR SERÁ :)
            </p>

            <BackBtn />
          </div>

          <div id="recuperar" className="cursoModule">
            <h3>RECUPERAR/LAVAR</h3>
            <h4>Re-utilizar tu shablón</h4>
            <p>
              Este proceso te va permitir borrar el diseño que utilizaste y
              luego de unos minutos poder tener el shablón limpio para trabajos
              futuros.
            </p>
            {/* <img
                            src="/Images/curso/curso-17.png"
                            alt="imagen del curso"
                            className="cursoImg"
                        /> */}
            <div className="w-full mobile:w-full m-auto mt-4 rounded-3xl overflow-hidden  border-main p-2 bg-greeny">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl overflow-hidden"
              >
                <source src="videos/limpieza.mp4" type="video/mp4" />
              </video>
            </div>
            <br />
            <br />

            <h4>KIT DE LIMPIEZA</h4>

            <div className="imgTextContainer">
              <img src="/Images/curso/desgrabador.svg" alt="desgrabador" />
              <p>
                DESGRABADOR & PASTA ALCALINA
                <br />
                Estos productos son altamente corrosivos y peligrosos, es
                necesario que SIEMPRE utilices guantes especiales.
              </p>
            </div>

            <div className="imgTextContainer">
              <img src="/Images/curso/sponge.svg" alt="esponja" />
              <p>
                ESPONJA
                <br />
                Te sugiero que puedas tener 1 esponja destinada 100% a este
                proceso.
              </p>
            </div>

            <div className="imgTextContainer">
              <img src="/Images/curso/estopa.svg" alt="estopa" />
              <p>
                ESTOPA
                <br />
                Nuestra aliada para aplicar los productos auxiliares.
              </p>
            </div>

            <div className="imgTextContainer">
              <img src="/Images/curso/diluyente.svg" alt="diluyente" />
              <p>
                C3/DILUYENTE <br />
                Este tipo de producto, al fusionarse con la pasta alcalina
                genera un efecto químico potente, quita cualquier mancha, resto
                de material que haya quedado sobre el shablón.
              </p>
            </div>

            <div className="imgTextContainer">
              <img src="/Images/curso/gloves.svg" alt="guantes" />
              <p>
                GUANTES (Acronitrilo DPS verde) <br />
                Recomiendo este guante ya que soportan los líquidos y pastas que
                utilizamos para este proceso.
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
              Mojá el shablón por sus 2 lados, y aplicá una capa fina de
              DESGRABADOR.
            </p>

            <img
              src="/Images/curso/curso-19.png"
              alt="imagen del curso"
              className="cursoImg"
            />
            <br />
            <br />
            <p>
              Así debería verse la emulsión aflojandosé, refregar por sus 2
              lados de manera circular haciendo presión (no muy fuerte). Enjuagá
              y colocá PASTA ALCALINA.
            </p>

            <div className="imgTextContainer">
              <img src="/Images/curso/diluyente.svg" alt="diluyente" />
              <p>
                Es momento de utilizar C3, en una estopa coloca el producto
                hasta que la misma quede húmeda.
                <br />
                *Frotá por los 2 lados del shablón eliminando cualquier
                excedente de la etapa anterior.
                <br />
                *Enjuagá con agua a presión (puede ser con una manguera, o con
                hidrolavadora).
                <br />
                *Por último, LAVA CON DETERGENTE : Los guantes, el shablón y las
                herramientas que utilizaste.
              </p>
            </div>

            <h3>
              LISTO!!
              <br />
              VOLVER A EMPEZAR
            </h3>
            <h4>¿Ya tenés tu nuevo diseño?</h4>

            <BackBtn />
          </div>
          <div id="dtf" className="cursoModule">
            <h3>DISEÑO DTF PARA INTERVENCIÓN TEXTIL</h3>
            <h4>Paso a Paso para Obtener un Buen Diseño DTF</h4>
            <h4 className="mt-10 font-bold">
              Paso 1: Preparación del Archivo Digital
            </h4>
            <p>
              Software: Utiliza programas de diseño como Photoshop, Illustrator
              o CorelDRAW.
              <br />
              Resolución: Configura el diseño a 300 DPI para asegurar una alta
              calidad.
              <br />
              Espacio de Color: Usa el perfil RGB (según lo solicitado por el
              proveedor).
              <br />
              Fondo: Asegúrate de que el diseño tenga fondo transparente,
              permitiendo una mejor integración sobre la prenda.
              <br />
              Dimensiones: Verifica que las medidas y proporciones se ajusten al
              tamaño final de la prenda.
            </p>
            <div className="imgContainer">
              <img
                src="/Images/curso/dtfB.png"
                alt="dtf"
                className="cursoImg max-h-[50dvh]"
              />
            </div>
            <h4 className="mt-10 font-bold">Paso 2: Impresión del Diseño</h4>
            <p>
              Envío del Archivo: Remite el archivo cumpliendo las
              especificaciones técnicas indicadas (formato, tamaño, etc.).
              <br />
              Prueba de Impresión: Realiza una prueba para confirmar que los
              colores y detalles se reproducen correctamente en el soporte DTF.
              <br />
              Paso 3: Post-Proceso y Aplicación en la Prenda
              <br />
              Preparación del Diseño Impreso: Una vez impreso el diseño en el
              soporte DTF, este estará listo para su aplicación.
              <br />
              Aplicación Manual: En este taller, el proceso de adherencia se
              realizará de forma manual, permitiendo que los alumnos peguen e
              intervengan las prendas a su gusto.
              <br />
              Ajustes Creativos: Los alumnos podrán realizar intervenciones o
              modificaciones adicionales en el diseño durante el pegado,
              fomentando la creatividad.
            </p>
            <div className="imgContainer">
              <img
                src="/Images/curso/dtfA.png"
                alt="dtf"
                className="max-h-[50dvh]"
              />
            </div>
            <h4 className="mt-10 font-bold">
              Pros y Contras de la Técnica DTF
            </h4>
            <p>Pros:</p>
            <ul className="[&>li]:list-disc [&>li]:ml-6">
              <li>
                Alta Calidad de Impresión: Reproduce diseños con gran detalle y
                colores vibrantes.
              </li>
              <li>
                Versatilidad: Se adapta a diferentes tipos de tejidos y prendas.
              </li>
              <li>
                Personalización: Ideal para tiradas cortas y proyectos creativos
                personalizados.
              </li>
              <li>
                Rapidez: Proceso ágil, ideal para talleres y producciones
                pequeñas.
              </li>
            </ul>

            <p className="mt-4">Contras:</p>
            <ul className="[&>li]:list-disc [&>li]:ml-6">
              <li>
                Inversión Inicial: Requiere equipos y consumibles específicos,
                lo que puede implicar un costo elevado.
              </li>
              <li>
                Dependencia Técnica: La calidad final depende de la calibración
                y el mantenimiento del equipo.
              </li>
              <li>
                Requisitos Técnicos: Los archivos deben cumplir especificaciones
                precisas para evitar inconvenientes en la impresión.
              </li>
            </ul>
            <h4 className="mt-10 font-bold">Beneficios de la Técnica DTF</h4>
            <p>
              Flexibilidad Creativa: Permite desarrollar diseños complejos y
              detallados que pueden ser fácilmente intervenidos y
              personalizados.
              <br />
              Adaptabilidad: Es ideal para proyectos educativos y artísticos
              donde la creatividad es el centro del proceso.
              <br />
              Durabilidad: Los diseños obtenidos tienen buena adherencia y
              resistencia, manteniendo sus colores y detalles a lo largo del
              tiempo.
              <br />
              Innovación en Diseño Textil: Combina técnicas digitales y
              manuales, abriendo nuevas posibilidades en el mundo del diseño
              textil.
            </p>
            <h4 className="mt-10 font-bold">
              Posibles Aplicaciones del DTF Textil
            </h4>
            <p>
              Moda Personalizada: Aplicable en camisetas, sudaderas, gorras y
              otros productos de moda.
              <br />
              Proyectos Artísticos: Ideal para intervenciones creativas y obras
              de arte en textil.
              <br />
              Merchandising y Promoción: Creación de productos promocionales
              para empresas, eventos o marcas.
            </p>

            <BackBtn />
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
              Inicia sesión y adquiere el curso para poder acceder al material
              de estudio
            </h3>
            <Link href="/profile">
              <button className="indiceBtn">Iniciar sesión</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Curso;
