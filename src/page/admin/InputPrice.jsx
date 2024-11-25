import React, { useEffect, useState } from 'react';

function InputPrice({ payload, setPayload, keyPayload }) {
  const [amount, setAmount] = useState();

  // Hàm định dạng số tiền
  const formatCurrency = (number) => {
    if (isNaN(number) || number === '') {
      return ''; // Trả về chuỗi rỗng nếu không phải số
    }
    return Number(number).toLocaleString('vi-VN');

  };

  // Hàm xử lý sự kiện khi người dùng nhập số
  const handleInputChange = (e) => {
    // const value = e.target.value;
    // // Chỉ cho phép nhập số và không cho phép dấu chấm đầu tiên
    // if (!isNaN(value) && value !== "") {
    //   setAmount(Number(value));
    // }
    const value = e.target.value
    if (/^\d*$/.test(value)) {
      setPayload((prev) => ({
        ...prev,
        [keyPayload]: value
      }))
    }
  };


  return (
    <div className='w-full flex flex-col gap-1'>
      <input
        id={keyPayload}
        type="text"
        value={(payload)}
        onChange={handleInputChange}
        placeholder="Nhập số tiền"
        className='border-2 p-2 rounded-md w-full'
      />
      <span>Thành tiền: {formatCurrency(payload)}</span>
    </div>
  );
}

export default InputPrice;
