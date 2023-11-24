import React from 'react'

const Spinner = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full'>
      <div className='h-20 w-20 border-b-4 border-b-black rounded-full animate-spin z-10' >

      </div>
    </div>
  )
}

export default Spinner