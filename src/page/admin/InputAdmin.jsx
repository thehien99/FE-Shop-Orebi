import React, { memo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const InputAdmin = ({ payload, setPayload, keyPayload, dataOneProduct }) => {
  const location = useLocation()
  return (
    <div className={`rounded-md `}>
      <input
        id={keyPayload}
        onChange={(e) => setPayload((prev) => ({ ...prev, [keyPayload]: e.target.value }))}
        value={location.state === 'Đăng sản phẩm' ? payload : dataOneProduct}
        type="text"
        className={`border-2 p-2 rounded-md w-full  `}
      />

    </div >
  )
}

export default memo(InputAdmin)