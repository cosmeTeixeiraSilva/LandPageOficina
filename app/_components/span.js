import React from 'react'

export default function Span({texto}) {
  return (
    <span className='hover:scale-125 hover:text-orange-400'>
       {texto}
    </span>
  )
}
