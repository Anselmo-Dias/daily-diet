'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@/lib/actions'

interface RegisterProps {
  onChangeForm: () => void
}

export function Register({ onChangeForm }: RegisterProps) {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form
      action={dispatch}
      className="w-full font-mono items-center justify-center"
    >
      <input
        className=" rounded-md block mt-5 w-full max-w-xs mx-auto h-9 p-3"
        placeholder="Name"
        name="name"
        type="name"
        required
      />
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
        className="bg-gray-400 rounded-md text-white-ff text-[700] text-lg p-4 flex text-center items-center justify-center w-full m-auto max-w-xs mt-4 mb-2"
        type="submit"
      >
        Cadastrar
      </button>

      <button
        onClick={onChangeForm}
        className=" mx-auto border-none w-full flex items-end justify-end max-w-xs mb-6"
      >
        <p className="text-blue-600">Já tem uma conta?</p>
      </button>

      {errorMessage && (
        <p className=" items-center mt-3 text-center font-mono text-base text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
