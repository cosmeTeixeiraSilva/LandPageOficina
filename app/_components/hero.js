
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


export default function Hero() {
    return (
        <div className="w-full h-64 relative mx-auto">

            <Image
                src="/oficina.jpg"
                alt="Imagem oficina Senac"
                fill
                style={{ objectFit: 'cover' }}
                className='z-0'
            />

            {/* Texto sobreposto */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center">
                <span className=" font-bold text-sm  sm:text-xl mb-2 text-slate-200 bg-[#121212] p-2 rounded">
                    Manutenção Automotiva
                </span>
                <span className="font-semibold text-sm sm:text-xl text-slate-200 bg-[#121212] p-2 rounded">
                    Qualidade para seu carro
                </span>
                <a href="#" className='bg-green-700 flex  space-x-2 p-2 rounded items-center mt-2' ><FaWhatsapp size={20} className='text-white' />   <span className='text-sm text-white sm:text-xl'>Fale com nosso atendente</span></a>
            </div>


        </div>
    )
}
