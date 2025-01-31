
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
            <div className="relative inset-0  z-30 text-center space-y-2">
                <span className=" font-bold text-sm  sm:text-md mb-2 text-black  rounded absolute left-2 mt-4 bg-white p-2">
                    Deixe...
                </span>
                <span className="font-semibold text-sm sm:text-md text-black  rounded absolute top-14 left-2 bg-white p-2">
                    seu Carro em boas mãos.
                </span>

            </div>


        </section>
    )
}
