import React from 'react'

export default function Header() {
    return (
        <div className='flex items-center justify-between px-2'>
            <span className='text-black font-extrabold py-2 text-2xl'>Dev Motors</span>
            <nav className='text-gray-600 flex space-x-8 text-[0.6rem] sm:text-sm'>
                <span>HOME</span>
                <span>SERVIÇOS</span>
                <span className='pr-4'>CONTATOS</span>
            </nav>
        </div>
    )
}
