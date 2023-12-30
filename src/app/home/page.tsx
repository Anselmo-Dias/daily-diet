import { Plus, MoveUpRight } from 'lucide-react'
import logoImage from '@/assets/logo.svg'
import userImage from '@/assets/user.svg'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { getAllFood } from '../../lib/actions'

interface FoodProps {
  id: string
  userId: string
  sessionId: string
  name: string
  description: string
  createAt: string
  inDiet: 'diet' | 'nodiet'
}

export default async function Home() {
  const foods = await getAllFood()
  return (
    <div className="w-full max-w-[900px] m-auto px-20 font-mono">
      <header className="flex items-center justify-between my-5">
        <Image src={logoImage} width={82} height={37} alt="" />
        <Image src={userImage} width={50} height={70} alt="" />
      </header>

      <div className=" relative w-full max-w-md mx-auto mb-10 flex items-center justify-center flex-col bg-green-50 p-5 rounded-md">
        <p className=" text-2xl font-bold leading-7">90,86%</p>
        <p className=" text-base font-[400] text-gray-150">
          das refeições dentro da dieta
        </p>
        <Link href="/home/statistics">
          <MoveUpRight className="absolute top-2 right-2" color="#639339" />
        </Link>
      </div>

      <div className="flex flex-col items-start justify-start gap-2 w-full mx-auto mb-8">
        <p className="text-base  font-[400] text-gray-200">Refeições</p>
        <Link className="w-full" href="/home/register">
          <button className="w-full flex items-center justify-center rounded-md gap-4  font-[700] bg-gray-150 text-white-ff py-4">
            <Plus className="w-4 h-4  font-[400]" strokeWidth={3} />
            Nova Refeição
          </button>
        </Link>
      </div>

      <div className="w-full flex flex-col gap-2 mt-8">
        <h2 className="font-[700] text-gray-200 text-lg">12.08.22</h2>
        {foods[0].id ? (
          foods?.map((item: FoodProps) => {
            return (
              <div
                key={item.id}
                className=" flex items-center justify-between text-gray-50 text-base border border-solid border-white-dd rounded-md p-4"
              >
                <div>
                  <span className="text-gray-150 font-[700] mr-4">
                    {item.createAt.split('T')[1].split(/^(.*?:.*?):/)[1]}
                  </span>
                  |
                  <span className="text-gray-150 ml-4 font-[400]">
                    {item.name}
                  </span>
                </div>
                <span
                  className={clsx('w-5 h-5 rounded-full', {
                    'bg-red-700': item.inDiet === 'nodiet',
                    'bg-green-700': item.inDiet === 'diet',
                  })}
                ></span>
              </div>
            )
          }) && <p>nenhuma comida castrada</p>
        ) : (
          <p className="text-red-500">{foods}</p>
        )}
      </div>
    </div>
  )
}
