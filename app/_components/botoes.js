import React from 'react'

export default function Botoes() {
    return (

        <nav className="text-gray-600 flex flex-col space-y-4 items-start p-2 sm:flex-row sm:space-x-4 sm:space-y-0 text-[1rem] sm:text-sm hover:cursor-pointer">
            <span className="hover:scale-105  bg-black border p-2 rounded text-center text-white h-8 flex items-center justify-center  hover:bg-orange-500 w-full sm:w-1/3">
                Troca de óleo
            </span>
            <span className="hover:scale-105 bg-black border p-2 rounded text-center text-white h-8 flex items-center justify-center  hover:bg-orange-500 w-full md:w-1/3">
                Manutenção preventiva
            </span>
            <span className="hover:scale-105 bg-black border  p-2 rounded text-center text-white h-8 flex items-center justify-center  hover:bg-orange-500 w-full md:w-1/3">
                Alinhamento e balanceamento
            </span>
        </nav>


    )
}
