import Image from 'next/image'

const Nosotros = () => {
    return (
        <main className='nosotrosContainer'>
            <h1> EQUIPO</h1>
            <h2> PICANTE</h2>
            <div className='equipoInfo'>
                <h3>ARTE MAGIA Y COLABORACION</h3>
                <p>
                    Hola, mi nombre es Eva, creadora de Picante ; desde el año 2016 donde comenzaron a surgir las primeras estampas/impresiones soy la encargada de la gestión y producción del proyecto.<br />
                    Estudié algunas carreras que me llevaron a explorar sobre la comunicación visual y sus formas de expresión; aprendí el oficio de manera autodidacta, luego necesité perfeccionar la técnica y realicé algunos cursos específicos sobre este sistema de impresión.<br />
                    En la actualidad contamos con colaboradores que trabajan en los diferentes sectores y tareas del taller; gracias a su ayuda logramos mejorar los niveles de producción y podemos llegar más lejos.<br />
                    Creemos que cada proyecto es único e irrepetible, por eso deseamos brindarte la mejor experiencia ♥
                </p>
            </div>
            <div className='equipoImg'>
                <Image src='/Images/Eve_02.jpg' height={600} width={800} alt='equipo' />
            </div>

        </main>
    )
}

export default Nosotros