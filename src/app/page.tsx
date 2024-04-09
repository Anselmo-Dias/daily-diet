'use client'

import { useState } from 'react'
import { Login } from '../components/login'
import { Register } from '@/components/register'

export default function Page() {
  const [registerUser, setRegisterUser] = useState(false)

  function handleChangeForm() {
    setRegisterUser(!registerUser)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center max-w-[900px] m-auto px-20 font-mono">
      <div className="w-full flex flex-col items-center justify-start bg-white-dd rounded-md">
        <h1 className="font-[700] text-3xl mt-6">
          {registerUser ? 'Cadastro' : 'Login'}
        </h1>
        {registerUser ? (
          <Register onChangeForm={handleChangeForm} />
        ) : (
          <Login onChangeForm={handleChangeForm} />
        )}
      </div>
    </div>
  )
}
