
import React from 'react'
import ScrollLinkComponente from './scroolLink'
import Image from 'next/image'
export default function Header() {
    return (
        <section id="top" className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between justify-start   top-0 z-50  w-full mx-auto space-y-2 p-2'>
            <div className='flex items-center flex-col sm:flex-row justify-center  sm:justify-start w-full '>
                <Image
                    src="/senac.png"
                    alt="Imagem oficina Senac"
                    width={50}
                    height={60}
                    className='z-0 w-[4rem] h-[4rem] bg-white rounded mr-2'
                />
                <div className='flex flex-col text-white items-center sm:items-start'><h1 className=' text-orange-500 font-extrabold text-xl px-6 sm:px-0 '>Motors Senac Lavras</h1>
                    <h3 className='text-blue-500 hidden sm:inline'>Prof. Cosme Teixeira Silva - Senac Lavras</h3>
                </div>
            </div>
            <nav id="menu" className='text-orange-500 flex space-x-8 text-[0.6rem] font-bold   sm:p-2 '>
                {/*Usando componentes Reutilizáveis */}
                <ScrollLinkComponente to="h" smooth={true} duration={500} texto={"HOME"} />
                <ScrollLinkComponente to="hero" smooth={true} duration={500} texto={"SERVIÇOS"} />
                <ScrollLinkComponente to="contatos" smooth={true} duration={500} texto={"CONTATOS"} />

            </nav >
        </section >
    )
}
