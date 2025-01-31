
import React from 'react'
import ScrollLinkComponente from './scroolLink'

export default function Header() {
    return (
        <section className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between justify-center px-2 fixed top-0 z-50 bg-white w-full '>
            <div className='flex flex-col w-1/2'><h1 className=' text-[#121212] font-extrabold text-xl'>Dev Motors</h1>
                <h3 className='text-[#121212a1]'>Prof. Cosme Teixeira Silva - Senac Lavras</h3>
            </div>

            <nav id="menu" className='text-gray-600 flex space-x-4 text-[0.6rem]sm: text - sm p - 4 sm: p - 2 w-1/2'>
                {/*Usando componentes Reutilizáveis */}
                <ScrollLinkComponente to="menu" smooth={true} duration={500} texto={"HOME"} />
                <ScrollLinkComponente to="hero" smooth={true} duration={500} texto={"SERVIÇOS"} />
                <ScrollLinkComponente to="contatos" smooth={true} duration={500} texto={"CONTATOS"} />
                <ScrollLinkComponente to="hero4" smooth={true} duration={500} texto={"REDE SOCIAIS"} />

            </nav >
        </section >
    )
}
