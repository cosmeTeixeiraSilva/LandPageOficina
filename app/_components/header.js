import React from 'react'

export default function Header() {
    return (
        <div className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between justify-center px-2'>
            <div className='flex flex-col'>
            <span className='text-black font-extrabold  text-2xl pt-2 text-center sm:text-start'>Dev Motors</span>
            <span className='text-black  text-sm text-[#121212] opacity-60 text-centers'>Prof. Cosme Teixeira Silva - Jan/2025</span>
            </div>
           
            <nav className='text-gray-600 flex space-x-8 text-[0.6rem] sm:text-sm'>
                <span>HOME</span>
                <span>SERVIÇOS</span>
                <span className='pr-4'>CONTATOS</span>
            </nav>
        </div>
    )
}
