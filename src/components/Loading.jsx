import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

const Loading = () => {
  return (
    <div className='absolute xs:left-[35%] top-[300px] left-[46%]'>
      <PuffLoader
        color="#004b44"
        size={117}
      />
    </div>)
}

export default Loading