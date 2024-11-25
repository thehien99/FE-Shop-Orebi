import React, { useEffect, useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const SelectColor = ({ payload, setPayload, keyPayload }) => {
  // State cho việc hiển thị Color Picker và màu sắc
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [color, setColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  })

  // Xử lý khi click vào swatch để mở/đóng color picker
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }

  // Xử lý khi click bên ngoài để đóng color picker
  const handleClose = () => {
    setDisplayColorPicker(false)
  }

  // Xử lý thay đổi màu sắc trong color picker
  const handleChange = (color) => {
    setColor(color.rgb)
  }

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      [keyPayload]: color
    }))
  }, [color])
  // Styles cho các phần tử trong component
  const styles = reactCSS({
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  })

  return (
    <div>
      {/* Swatch để hiển thị màu hiện tại */}
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>

      {/* Nếu displayColorPicker là true thì hiển thị SketchPicker */}
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  )
}

export default SelectColor
