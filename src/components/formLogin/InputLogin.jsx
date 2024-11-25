import React from 'react'

const InputLogin = ({ payload, setPayload, placeholder, type, keyPayload }) => {
  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [keyPayload]: e.target.value
    }))
  }
  return (
    <div className='input_login w-full h-full '>
      <input
        value={payload}
        type={type}
        placeholder={placeholder}
        className='border-2 w-full p-2 rounded-md'
        onChange={handleChange}
      />
    </div>
  )
}

export default InputLogin