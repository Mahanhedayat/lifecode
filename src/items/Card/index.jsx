import React from 'react'

const Card = ({ children,classname }) => {
  return (
    <div className={`bg-slate-500 text-white rounded-md m-1 ${classname}`}>
        <div className='m-2'>
        {children}
        </div>
    </div>
  )
}

export default Card

