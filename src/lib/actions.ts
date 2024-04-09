'use server'

import { signIn } from '../auth'
import { AuthError } from 'next-auth'

interface CreateuserProps {
  name: string
  email: string
  password: string
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const rawFormData = Object.fromEntries(formData.entries())
  try {
    await signIn('credentials', rawFormData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function createUser({ name, email, password }: CreateuserProps) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }
    const response = await fetch('http://localhost:3333/user/register', options)
    const data = await response.json()

    return data
  } catch (error) {
    return `unexpected error: ${error}`
  }
}

export async function getUser(email: string) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }
  const response = await fetch('http://localhost:3333/user', options)
  const data = await response.json()

  return data
}

export async function getAllFood() {
  try {
    // const userId = '4d648095-274d-4ef7-a402-639e98f1feb4'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      `http://localhost:3333/food/foods/${'20c567ce-b35f-4f8a-a1af-052f1f2cb178'}`,
      options,
    )
    const data = await response.json()

    console.log(data)

    return data
  } catch (erro) {
    console.log(erro)
    return 'Error in fetching'
  }
}
