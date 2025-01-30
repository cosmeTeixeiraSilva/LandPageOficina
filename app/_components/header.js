
import React from 'react'
import ScrollLinkComponente from './scroolLink'

export default function Header() {
    return (
        <section id="header" className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between justify-center px-2'>


            <nav className='text-gray-600 flex space-x-8 text-[0.6rem] sm:text-sm p-4 sm:p-2'>
                {/*Usando componentes Reutilizáveis */}
                <ScrollLinkComponente to="header" smooth={true} duration={500} texto={"HOME"} />
                <ScrollLinkComponente to="hero" smooth={true} duration={500} texto={"SERVIÇOS"} />
                <ScrollLinkComponente to="hero2" smooth={true} duration={500} texto={"CONTATOS"} />
                <ScrollLinkComponente to="header" smooth={true} duration={500} texto={"REDE SOCIAIS"} />

            </nav>
        </section>
    )
}
