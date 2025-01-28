import React from 'react'

export default function Header() {
    return (
        <div className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between justify-center px-2'>
            <div className='flex flex-col'>
                <span className='text-black font-extrabold  text-2xl pt-2 text-center sm:text-start'>Dev Motors</span>
                <span className='text-sm text-[#121212] opacity-60 text-centers'>Prof. Cosme Teixeira Silva - Jan/2025</span>
            </div>

            <nav className='text-gray-600 flex space-x-8 text-[0.6rem] sm:text-sm p-3 sm:p-0'>
                <span className='hover:scale-125 hover:text-orange-400'>HOME</span>
                <span className='hover:scale-125 hover:text-orange-400'>SERVIÇOS</span>
                <span className='hover:scale-125 hover:text-orange-400'>CONTATOS</span>
            </nav>
        </div>
    )
}
