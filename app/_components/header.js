import React from 'react'

export default function Header() {
    return (
        <div className='flex items-center justify-between px-2'>
            <div className='flex flex-col'>
            <span className='text-black font-extrabold  text-2xl pt-2'>Dev Motors</span>
            <span className='text-black  text-sm text-[#121212] opacity-60'>Prof. Cosme Teixeira Silva - Jan/2025</span>
            </div>
           
            <nav className='text-gray-600 flex space-x-8 text-[0.6rem] sm:text-sm'>
                <span>HOME</span>
                <span>SERVIÇOS</span>
                <span className='pr-4'>CONTATOS</span>
            </nav>
        </div>
    )
}
