'use client'
import { delay, motion} from 'framer-motion'
import Magnet from "@/app/_components/Magnet/Magnet"
import { bannerLinksAnim, logoAnim, magnetic } from '@/lib/anims'



const links = [
    { label: 'INICIO', href: '#homeInfo' },
    { label: 'GALERÍAS', href: '#galerias' },
    { label: 'CONTACTO', href: '#contact' }
]

const Banner = () => {    

    return (
        <section className="w-full h-screen flex flex-col justify-start items-center relative">
            <div className="w-full h-[calc(100vh-4vw-10vw)] tablet:h-[calc(100vh-6rem-2vw)] flex flex-col items-center justify-center border-main border relative">

                <motion.img src='/Images/home/picante.svg' alt="Home Banner" className="w-[50vw] tablet:w-[60vw] mobile:w-[80vw] filterMain"
                    variants={logoAnim}
                    initial="init"
                    animate="animate"
                >
                </motion.img>
                {/* <h2 className="font-titanium text-3xl">Taller creativo de serigrafía en Córdoba</h2> */}
                <h2 className="font-titanium text-center text-5xl tablet:text-3xl mobile:text-2xl mt-4">TALLER CREATIVO DE SERIGRAFÍA EN CÓRDOBA</h2>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/Images/Noise/noise.jpg')] bg-cover bg-center mix-blend-screen opacity-10 pointer-events-none -z-10"></div>


            </div>

            <div className='w-full flex mobile:flex-col mobile:justify-end mobile:items-end mr-[2px]'>
                <div className='w-1/4 h-[4vw] mobile:w-3/4 mobile:h-0'></div>
                {links.map((link, i) => (
                    <motion.div className="w-1/4 mobile:w-3/4 h-[4vw] mobile:h-6 bg-pinky outline outline-1 flex items-center justify-center" key={i}
                        variants={bannerLinksAnim}
                        initial="initial"
                        animate="animater"
                        custom={i}
                    
                    >
                        <motion.div className="w-full h-full flex items-center justify-center"
                            variants={magnetic}
                            initial="init"
                            whileHover="animate"
                        >
                            <Magnet classN="w-full h-full p-0 " area="0px" >
                                <a href={link.href} className="w-full h-full bg-white flex items-center justify-center outline outline-[1px] outline-main font-anton text-main text-[1.5vw] tablet:text-lg mobile:text-base text-center">                               
                                    {link.label}                            
                                </a>
                            </Magnet>
                        </motion.div>
                    </motion.div>
                ))}
            </div>


            {/* <div className="w-1/4 h-[4vw] bg-pinky outline outline-1  flex items-center justify-center self-start ml-[calc((100vw-20rem)/4-4px)]">
                    <motion.div className="w-full h-full flex items-center justify-center"
                        variants={magnetic}
                        initial="init"
                        whileHover="animate"
                    >
                        <Magnet classN="w-full h-full p-0 " area="0px" >
                            <a href="#homeInfo" className="w-full h-full bg-white flex items-center justify-between px-10  outline outline-[1px] outline-main" ref={scope}
                                onMouseEnter={handleSmileAnimate} onMouseLeave={handleSmileAnimEnd}>
                                <p className="font-anton text-main text-[1.5vw]">INICIO</p>
                                <img id='smile' src="/Images/home/smile.svg" alt="smile"
                                    className='z-20 w-10 h-10'											
                                ></img>
                            </a>
                        </Magnet>
                    </motion.div>
                </div> */}

        </section>
    )
}
export default Banner