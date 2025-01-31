import React from 'react'

export default function Botoes() {
    return (

        <nav className="text-gray-600 flex flex-col space-y-4 items-start p-2 sm:flex-row sm:space-x-4 sm:space-y-0 text-[1rem] sm:text-sm hover:cursor-pointer">
            <span className="hover:opacity-70   bg-[#454545] p-2 rounded text-center text-white h-8 flex items-center justify-center  hover:bg-gray-800 w-full sm:w-1/3">
                Troca de óleo
            </span>
            <span className="hover:opacity-70 bg-[#454545] p-2 rounded text-center text-white h-8 flex items-center justify-center  hover:bg-gray-800 w-full md:w-1/3">
                Manutenção preventiva
            </span>
            <span className="hover:opacity-70 bg-[#454545]  p-2 rounded text-center text-white h-8 flex items-center justify-center  hover:bg-gray-800 w-full md:w-1/3">
                Alinhamento e balanceamento
            </span>
        </nav>


    )
}
