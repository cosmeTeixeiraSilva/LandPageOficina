"use client"
import React from 'react'
import { Link as ScrollLink } from "react-scroll"
export default function ScrollLinkComponente({ to, smooth, duration, texto }) {
    return (
        <ScrollLink to={to}
            smooth={smooth}
            duration={duration} className='hover:scale-110 hover:text-orange-400 text-sm sm:text-md'>
            {texto}

        </ScrollLink>
    )
}
