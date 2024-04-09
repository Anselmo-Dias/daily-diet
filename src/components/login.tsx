'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@/lib/actions'

interface LoginProps {
  onChangeForm: () => void
}

export function Login({ onChangeForm }: LoginProps) {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={dispatch} className="w-full font-mono">
      <input
        className=" rounded-md block mt-5 w-full max-w-xs mx-auto h-9 p-3"
        placeholder="Email"
        name="email"
        type="email"
        required
      />
      <input
        className=" rounded-md block mt-5 w-full max-w-xs mx-auto h-9 p-3"
        placeholder="Senha"
        name="password"
        type="text"
        required
      />

      <button
        className="bg-gray-150 rounded-md text-white-ff text-[700] text-lg p-4 flex text-center items-center justify-center w-full m-auto max-w-xs mt-10 mb-2"
        type="submit"
      >
        Login
      </button>

      <button
        onClick={onChangeForm}
        className=" mx-auto border-none w-full flex items-end justify-end max-w-xs mb-6"
      >
        <p className="text-blue-600">Ainda não tem conta?</p>
      </button>

      {errorMessage && (
        <p className=" items-center my-3 text-center font-mono text-base text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
