import React from 'react'

const Card = ( kid,classname ) => {
  return (
    <div className={`bg-slate-400 text-white rounded-sm ${classname}`}>
        {kid}
    </div>
  )
}

export default Card

