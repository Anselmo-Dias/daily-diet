import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

export default function Statistics() {
  return (
    <div className=" overflow-y-hidden w-full flex flex-col bg-green-50 ">
      <header className="relative h-40 flex flex-col items-center justify-center font-mono text-gray-150">
        <p className="font-[700] text-4xl">90,86%</p>
        <p className="font-[400] text-base">das refeições dentro da dieta</p>
        <Link href="/">
          <MoveLeft className="absolute top-4 left-4" color="#639339" />
        </Link>
      </header>

      <div className=" w-full h-screen flex flex-col items-center justify-start rounded-2xl bg-white-fa">
        <h1 className="mt-8 mb-6 font-[700]">Estatísticas gerais</h1>

        <div className=" p-4 mt-4 flex flex-col items-center justify-center max-w-sm rounded-md bg-white-ef">
          <span className="font-[700] text-gray-200 text-2xl ">22</span>
          <p className=" text-base font-[400] text-gray-100">
            melhor sequência de pratos dentro da dieta
          </p>
        </div>

        <div className=" p-4 mt-4 flex flex-col items-center justify-center max-w-sm rounded-md bg-white-ef">
          <span className="font-[700] text-gray-200 text-2xl ">109</span>
          <p className=" text-base font-[400] text-gray-100">
            melhor sequência de pratos dentro da dieta
          </p>
        </div>

        <div className=" max-w-md text-center flex gap-3 items-center justify-center mt-4">
          <div className="flex flex-col items-center justify-center bg-green-50 p-4 rounded-md">
            <span className="font-[700] text-gray-200 text-2xl">99</span>
            <p className=" text-base font-[400] text-gray-100">
              refeições dentro da dieta
            </p>
          </div>

          <div className=" max-w-md text-center flex flex-col items-center justify-center bg-red-50 p-4 rounded-md">
            <span className="font-[700] text-gray-200 text-2xl">10</span>
            <p className=" text-base font-[400] text-gray-100">
              refeições dentro da dieta
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
