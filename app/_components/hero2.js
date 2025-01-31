
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


export default function Hero2({ foto, id, alt }) {
    return (
        <section id={id} className="h-64 relative ">

            <Image
                src={foto}
                alt={alt}
                fill
                style={{ objectFit: 'cover' }}
                className='z-0'
            />

            {/* Texto sobreposto */}
            <div className="relative inset-0  z-30 text-center">
                <span className=" font-bold text-sm  sm:text-xl mb-2 text-slate-200 bg-black p-2 rounded absolute left-2 mt-4">
                    Projetos
                </span>
                <span className="font-semibold text-sm sm:text-xl text-slate-200 bg-black p-2 rounded absolute top-14 left-2 mt-4">
                    Economia de Combustível
                </span>

            </div>


        </section>
    )
}
