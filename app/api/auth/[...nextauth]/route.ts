import { db } from "@/app/_lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // estou pegando meu usuário ID do banco e colocando dentro da session para gente poder utilizar o data.user.id da desestruturação do: const { data } = useSession()
      session.user = {
        ...session.user,
        id: user.id,
      } as any
      return session
    },
  },
})

export { handler as GET, handler as POST }
