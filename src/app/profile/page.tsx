'use client'
import { useEffect } from "react"
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Link from "next/link"

const Profile = () => {  
    
    
    //const {data: session} = useSession({required: true})
    const {data: session, status} = useSession()

    useEffect(() => {
      console.log('el estado de la sesion cambio', session);
    }, [session])    

  return (
    
        <div id="profile" className="divContainer">
          {status === "authenticated" ?
              
              <>
                <h1>BIENVENIDO</h1>
                <h2>{session.user?.name}</h2>                              
                <img src={session.user!.image!} alt="profile img" />                
                {/* @ts-ignore */}
                {session.user!.role && (session.user!.role === 'admin' || session.user!.role === 'premium') ? 
                <Link href="/curso"><button>Acceso al Curso</button></Link>:
                <>
                  <h3>Ya esta disponible el nuevo curso de serigrafía</h3>
                  <p>Para acceder al mismo u obtener mas informacion y poder disfrutar de contenido exclusivo ponte en contaco</p>
                  <Link href="https://wa.me/+5493516558094/?text=Buenos%20d%C3%ADas%2C%20quiero%20obtener%20mas%20informaci%C3%B3n%20sobre%20el%20curso%20de%20serigraf%C3%ADa" target="_blank"><button>CONTACTO</button></Link>
                  
      
                </>
                
                }  
                <button onClick={() => signOut()}>Cerrar sesión</button>
              </>:
              <>
              <h1>BIENVENIDO</h1>
              <h2>Aún no has iniciado sesión</h2> 
              <p>Para acceder a esta sección y poder disfrutar de contenido exclusivo debes iniciar sesión con tu cuenta de Google</p> 
              {/* <button className="googleBtn" onClick={() => signIn()}>Iniciar sesion <img src="https://www.svgrepo.com/show/2778/google.svg" alt="google icon" /></button> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <button className="googleBtn" onClick={() => signIn('google')}>Iniciar sesion <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="google icon" /></button>
            </>
          }
        </div>

  )
}

export default Profile

//funcion para obtener la sesion
/* export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
} */