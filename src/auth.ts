import NextAuth from 'next-auth'
import authConfig from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { getUser } from './lib/actions'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string(),
          })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)

          const passwordsMatch = password === user.password

          if (passwordsMatch) return user
        }

        return null
      },
    }),
  ],
})
