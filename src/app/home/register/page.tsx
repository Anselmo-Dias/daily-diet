'use client'

import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import * as Radio from '@radix-ui/react-radio-group'

const FormSchema = z.object({
  name: z.string().max(7, 'limite de caracteres alcançado'),
  description: z.string().max(40, 'limite de caracteres alcançado'),
  date: z
    .string()
    .regex(
      /^(\d{2})\/(\d{2})\/(\d{4})$/,
      'Essa data deve está neste formato 00/00/0000',
    ),
  hours: z.string(),
  // .regex(/^(\d{2})\:\(\d{2})$/, 'Esse campo deve está neste formato: 00:00'),
  diet: z.enum(['diet', 'nodiet']),
})

type FormInputsProps = z.infer<typeof FormSchema>

export default function Register() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormInputsProps>({
    resolver: zodResolver(FormSchema),
  })

  function handleSubmitForm(data: FormInputsProps) {
    console.log(data)
  }

  return (
    <div className=" w-full flex flex-col bg-white-dd ">
      <header className="relative h-40 flex flex-col items-center justify-center font-mono text-gray-200">
        <h1 className="font-[400] text-2xl font-[700]">Nova refeição</h1>
        <Link href="/">
          <MoveLeft className="absolute top-4 left-4" color="#333638" />
        </Link>
      </header>

      <div className=" px-2 w-full h-screen flex flex-col items-center justify-start rounded-2xl bg-white-fa">
        <form
          className="w-full max-w-2xl mt-10"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="w-full flex flex-col mt-6">
            <label
              className="font-[700] font-mono text-gray-150"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              className="border border-white-dd p-3 rounded-md"
              id="name"
              type="text"
              maxLength={7}
              required
              {...register('name')}
            />
          </div>

          <div className="w-full flex flex-col mt-6">
            <label
              className="font-[700] font-mono text-gray-150"
              htmlFor="description"
            >
              Descrição
            </label>
            <textarea
              className="resize-none border h-32 flex flex-col border-white-dd p-3 rounded-md"
              id="description"
              maxLength={40}
              required
              {...register('description')}
            />
          </div>

          <div className="flex mt-6 font-[700] font-mono justify-between gap-6">
            <div className=" w-full flex flex-col   ">
              <label className="text-gray-150" htmlFor="date">
                Data
              </label>
              <input
                className="border w-full rounded-md h-12 p-3 border-white-dd font-[400]"
                id="date"
                placeholder="00/00/0000"
                type="text"
                required
                {...register('date')}
              />
            </div>
            <div className=" w-full flex flex-col   ">
              <label className="text-gray-150" htmlFor="hours">
                Horas
              </label>
              <input
                className="border w-full rounded-md h-12 p-3 border-white-dd font-[400]"
                id="hours"
                placeholder="00:00"
                type="text"
                required
                {...register('hours')}
              />
            </div>
          </div>

          <Controller
            control={control}
            name="diet"
            render={({ field }) => {
              return (
                <Radio.Root
                  onValueChange={field.onChange}
                  value={field.value}
                  className=" w-full font-mono font-[700] flex flex-col items-start justify-start mt-6"
                >
                  <p className="text-base text-gray-150">
                    Esta dentro da dieta?
                  </p>
                  <div className="w-full flex gap-2">
                    <Radio.Item
                      value="diet"
                      className=" rounded-md flex items-center justify-center gap-2 px-8 py-4 w-full bg-white-dd border-2 border-transparent data-[state='checked']:bg-green-50 data-[state='checked']:border-2 data-[state='checked']:border-green-100"
                    >
                      <p className="w-2 h-2 rounded-full bg-green-100"></p>
                      Sim
                    </Radio.Item>
                    <Radio.Item
                      value="nodiet"
                      className="rounded-md flex items-center justify-center gap-2 px-8 py-4 w-full bg-white-dd border-2 border-transparent data-[state='checked']:bg-red-50 data-[state='checked']:border-2 data-[state='checked']:border-red-200  "
                    >
                      <p className="w-2 h-2 bg-red-200 rounded-full"> </p>
                      Não
                    </Radio.Item>
                  </div>
                </Radio.Root>
              )
            }}
          />
          <button
            type="submit"
            className="w-full max-w-2xl mt-40 flex items-center justify-center rounded-md font-[700] font-mono bg-gray-150 text-white-ff py-4"
          >
            Cadastrar refeição
          </button>
        </form>
      </div>
    </div>
  )
}
