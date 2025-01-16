import React, { useEffect, useRef, useState } from 'react'
import icon from '../../icons/icons'
import InputChat from './InputChat'
import { useSelector } from 'react-redux'

const Chat = () => {
  const { FaRegMessage } = icon
  const [flag, setFlag] = useState(false)
  const dropdownRef = useRef(null); // Dùng để kiểm tra bấm ngoài danh sách
  const userId = useSelector(state => state.getUser.userInfo?.id)

  const handleToggle = () => {
    setFlag(!flag)
  }

  const handleClose = () => {
    setFlag(!flag)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setFlag(flag)
      }
    }
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFlag(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])


  return (
    <div ref={dropdownRef} className='w-full h-full cursor-pointer'>
      <div onClick={handleToggle} className={`p-3 rounded-full bg-blue-400 w-fit ${flag && 'opacity-0'}`}>
        <FaRegMessage className='text-2xl text-white' />
      </div>
      {flag &&
        <div onClick={handleClose} className='float-right me-3 text-lg hover:text-red-700'>x</div>
      }
      {
        flag &&
        <div className='w-[300px] h-[300px] bg-white shadow-2xl rounded-t-xl'>
          <InputChat userId={userId} />
        </div>
      }
    </div>
  )
}

export default Chat