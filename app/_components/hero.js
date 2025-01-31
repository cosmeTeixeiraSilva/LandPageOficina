
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


export default function Hero() {
    return (
        <section id="hero" className=" h-64 relative ">

            <Image
                src="/oficina.jpg"
                alt="Imagem oficina Senac"
                fill
                style={{ objectFit: 'cover' }}
                className='z-0'
            />

            {/* Texto sobreposto */}
            <div className="relative inset-0  z-30 text-center">
                <span className=" font-bold text-sm  sm:text-md mb-2 text-slate-200  p-2 rounded absolute left-0 mt-4">
                    Manutenção Automotiva
                </span>
                <span className="font-semibold text-sm sm:text-md text-slate-200p-2 rounded absolute top-14 left-2 mt-4">
                    Qualidade para seu carro
                </span>
                <a href="#" className='absolute right-4  hover:opacity-80 bg-green-700 flex  space-x-2 p-2 rounded items-center mt-48 ' ><FaWhatsapp size={20} className='text-white' />   <span className="text-sm text-white sm:text-md ">Fale com nosso atendente</span></a>
            </div>


        </section>
    )
}
