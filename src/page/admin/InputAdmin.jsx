import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'

const InputAdmin = ({ payload, setPayload, keyPayload, dataOneProduct }) => {
  const location = useLocation()
  return (
    <div className={`rounded-md `}>
      <input
        id={keyPayload}
        onChange={(e) => setPayload((prev) => ({ ...prev, [keyPayload]: e.target.value }))}
        value={payload}
        type="text"
        className={`border-2 p-2 rounded-md w-full  `}
      />

    </div >
  )
}

export default memo(InputAdmin)