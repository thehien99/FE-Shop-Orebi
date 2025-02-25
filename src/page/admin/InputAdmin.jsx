import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

const InputAdmin = ({ payload, setPayload, keyPayload }) => {
  const location = useLocation()

  // Truyền giá trị chính xác vào input

  return (
    <div className="rounded-md">
      <input
        id={keyPayload}
        onChange={(e) => setPayload((prev) => ({ ...prev, [keyPayload]: e.target.value }))}
        value={payload}  // Cập nhật giá trị từ payload hoặc dataOneProduct
        type="text"
        className="border-2 p-2 rounded-md w-full"
      />
    </div>
  )
}

export default memo(InputAdmin)
