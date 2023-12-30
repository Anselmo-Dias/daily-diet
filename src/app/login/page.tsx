import { LoginOrRegisterForm } from '../../components/login-or-register-form'

export default async function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center max-w-[900px] m-auto px-20 font-mono">
      <div className="w-full flex flex-col items-center justify-start h-96 bg-white-dd rounded-md">
        <h1 className="font-[700] text-3xl mt-6">Login{'/'}Register</h1>
        <LoginOrRegisterForm />
      </div>
    </div>
  )
}
