import React from 'react'
import { useMemo, useState } from "react";
import DataTable from 'react-data-table-component';
import { formatPrice } from '../../../lib/utils'
import { useDispatch, useSelector } from 'react-redux';
import { updateIsDeliveredApi } from '../../../api/api';

const TableOrder = () => {
  const [filterText, setFilterText] = useState("");
  const listOrderOfUser = useSelector(state => state.getOrder.listOrderOfUser)
  const [data, setData] = useState(listOrderOfUser)
  const customStyles = {
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "700",
      },
    },
  };

  const columns = [
    {
      name: 'Ảnh',
      selector: row => row.image,
      cell: row => <img src={row.image} className="w-[50px]" alt="" />,
      sortable: false,
    },
    {
      name: 'Tên sản phẩm',
      selector: row => <span className='text-xl'>{row.orderItem.name}</span>,
      sortable: true,
    },
    {
      name: 'Tên sản phẩm',
      selector: row => row.orderItem.name,
      sortable: true,
    },
    {
      name: 'Thông tin người mua',
      selector: row => row.user.name, // Sử dụng tên người mua để sắp xếp
      cell: row => (
        <div className="flex flex-col gap-3 p-3 text-sm">
          <span className="text-red-500 font-bold text-lg">
            {row?.user.name}
          </span>
          <span className="text-wrap font-bold text-sm text-blue-600">
            {row.address.address}
          </span>
          <span className="text-sm font-bold text-yellow-600">
            {row.address.phone}
          </span>
          <i className="text-wrap text-xs">
            {row.address.notes || 'không có note'}
          </i>
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Tổng tiền',
      selector: row => row.totalPrice,
      sortable: true,
      cell: row => (
        <span className="text-lg font-bold text-lime-600">
          {formatPrice(row?.totalPrice)}
        </span>
      ),
    },
    {
      name: 'Phí ship',
      selector: row => row.shippingPrice,
      sortable: true,
      cell: row => (
        <span className="text-lg font-bold text-cyan-600">
          {row.shippingPrice}
        </span>
      ),
    },
    {
      name: 'Phương thức thanh toán',
      selector: row => row.paymentMethod,
      sortable: true,
      cell: row => (
        <span className="text-lg font-bold">{row.paymentMethod}</span>
      ),
    },
    {
      name: 'Trạng thái',
      selector: row => row.isDelivered ? 'Đã xác nhận' : 'Chưa xác nhận', // Dữ liệu thô để sắp xếp
      sortable: true,
      cell: row => (
        <button
          onClick={() => handleToggle(row.id)}
          className={`p-[5px] border-2 rounded-lg font-bold text-sm 
            ${row.isDelivered ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}
        >
          {row.isDelivered ? 'Đã xác nhận' : 'Chưa xác nhận'}
        </button>
      ),
    }


  ];

  const handleToggle = async (id) => {
    try {
      const response = await updateIsDeliveredApi(id);
      if (response) {
        // Cập nhật trạng thái trong state
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, isDelivered: true } : item
        );
        setData(updatedData); // Cập nhật dữ liệu ngay lập tức
      } else {
        console.error('Error updating status:', response);
      }
    } catch (error) {
      console.error('Error updating delivery status:', error);
    }
  };




  const filteredItems = useMemo(
    () =>
      data.filter(
        (item) =>
          item.orderItem?.name &&
          item.orderItem?.name.toLowerCase().includes(filterText.toLowerCase())
      ),
    [filterText, data] // Thêm `data` vào dependency để cập nhật khi dữ liệu thay đổi
  );



  const handleFilterChange = (e) => {
    setFilterText(e.target.value); // Cập nhật giá trị filterText
  };

  const handleClearFilter = () => {
    setFilterText("");
  };

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <>
        <input
          id="search"
          type="text"
          placeholder="Filter By Name"
          aria-label="Search Input"
          value={filterText}
          onChange={handleFilterChange}
          className="border-2 p-2 lg:w-1/2 lg:p-1"
        />
        <button className="border-2 p-2 lg:p-1 lg:w-[10%] bg-red-600 hover:text-white" type="button" onClick={handleClearFilter}>
          X
        </button>
      </>
    );
  }, [filterText]);



  return (
    <DataTable
      columns={columns}
      customStyles={customStyles}
      data={filteredItems}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  )

}

export default TableOrder
