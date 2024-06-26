import React, { useState } from 'react'

function Square({onSquareclick, value}) {

  return (
    <div>
      <button onClick={onSquareclick} className='fixed-button w-24 h-24  overflow-hidden text-3xl'>{value}</button>
    </div>
  )
}

export default Square

