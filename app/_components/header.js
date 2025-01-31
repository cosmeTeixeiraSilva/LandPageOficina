
import React from 'react'
import ScrollLinkComponente from './scroolLink'
import Image from 'next/image'
export default function Header() {
    return (
        <section id="top" className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between justify-center   top-0 z-50  w-full mx-auto space-y-2'>
            <div className='flex items-center'>
                <Image
                    src="/senac.png"
                    alt="Imagem oficina Senac"
                    width={50}
                    height={60}
                    className='z-0 w-[5rem] h-[5rem]'
                />
                <div className='flex flex-col text-white items-center sm:items-start'><h1 className=' text-whitefont-extrabold text-xl'>Motors Senac Lavras</h1>
                    <h3 className='text-slate-200'>Prof. Cosme Teixeira Silva - Senac Lavras</h3>
                </div>
            </div>
            <nav id="menu" className='text-white flex space-x-8 text-[0.6rem]sm: text -   sm:p-2 '>
                {/*Usando componentes Reutilizáveis */}
                <ScrollLinkComponente to="h" smooth={true} duration={500} texto={"HOME"} />
                <ScrollLinkComponente to="hero" smooth={true} duration={500} texto={"SERVIÇOS"} />
                <ScrollLinkComponente to="contatos" smooth={true} duration={500} texto={"CONTATOS"} />

            </nav >
        </section >
    )
}
