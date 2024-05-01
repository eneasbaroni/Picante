import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const baseUrl = process.env.BASE_URL

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
      ],       

    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "b33f4c", // Hex color code
        logo: "/Images/Logo_picante.png", // Absolute URL to image
        buttonText: "b33f4c" // Hex color code
    },

    callbacks: {
        //@ts-ignore
        async signIn ({user}) {
          const { name, email, image } = user            
            try {
              const res = await fetch(`${baseUrl}/api/user`, {
              //const res = await fetch('http://localhost:3000/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, image })
              })
              if (res.ok) {
                return user 
              } else {
                return user
              }
                         
            } catch (error) {
              console.log(error)
            }
        },

        async session({ session }) {          
          try {
            const res = await fetch(`${baseUrl}/api/user?email=${session.user!.email}`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },              
            })
            if (res.ok) {
              const userData = await res.json()              
              //@ts-ignore
              session.user.role = userData.role
              return session
            } else {
              return session
            }
          } catch (error) {
            console.log(error)
            return session
          }          
        }
    },

    secret: process.env.NEXTAUTH_SECRET
    
})

export { handler as GET, handler as POST }