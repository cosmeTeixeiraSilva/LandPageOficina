"use client"
import React from 'react'
import { Link as ScrollLink } from "react-scroll"
export default function ScrollLinkComponente({ to, smooth, duration, texto }) {
    return (
        <ScrollLink to={to}
            smooth={smooth}
            duration={duration} className='hover:scale-125 hover:text-orange-400'>
            {texto}
        </ScrollLink>
    )
}
