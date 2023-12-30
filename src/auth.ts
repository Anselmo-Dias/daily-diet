import NextAuth from 'next-auth'
import authConfig from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { createUser, getUser } from './lib/actions'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            name: z.string(),
            email: z.string().email(),
            password: z.string(),
          })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { name, email, password } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) {
            const newUser = await createUser({ name, email, password })

            if (newUser) return newUser

            return null
          }
          const passwordsMatch = password === user.password

          if (passwordsMatch) return user
        }

        return null
      },
    }),
  ],
})
