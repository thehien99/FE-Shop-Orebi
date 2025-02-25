import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { formatPrice } from '../../lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllProduct, removeProduct } from '../../redux/reducers/cartReducer';
import { useNavigate } from 'react-router-dom';
import Router from '../../router/router';
import Swal from 'sweetalert2'


export const TableCart = ({ cartProduct }) => {
  const dispatch = useDispatch()
  const [selectedRows, setSelectedRows] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(cartProduct);
  const totalProduct = useSelector((state) => state.cartReducer.cartProduct)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const columns = [
    {
      name: <span className='text-xl font-bold'>Hình ảnh</span>,
      selector: row => (
        <img className='w-[30%] h-full object-cover' src={row.productImg?.image[0]} alt="" />
      )
    },
    {
      name: <span className='text-xl font-bold'>Tên sản phẩm</span>,
      selector: row => (
        <span className='text-xl'>{row.name}</span>
      ),
    },
    {
      name: <span className='text-xl font-bold'>Giá sản phẩm</span>,
      selector: row => (
        <span className='text-xl'>{formatPrice(row.price)}VND</span>
      ),
    },
    {
      name: <span className='text-xl font-bold'>Số lượng</span>,
      selector: row => (
        <span className='text-xl'>{row.quanti}</span>
      ),
    },
    {
      name: <span className='text-xl font-bold'>Size</span>,
      selector: row => (
        <span className='text-xl'>{row.size}</span>
      ),
    },
    {
      name: <span className='text-xl font-bold'>Tổng tiền</span>,
      selector: row => (
        <div className='text-xl'>{formatPrice(row.priceProduct)}</div>
      )
    },
    {
      name: <span className='text-xl font-bold'>Xóa đơn hàng</span>,
      selector: row => (
        <button onClick={() => (dispatch(removeProduct(row.id)))}
          className='p-1 border-2 bg-red-600 text-white hover:bg-blue-500 hover:text-black'>
          Xóa
        </button>
      ),
    },
  ];


  useEffect(() => {
    const totalPriceSum = totalProduct.reduce((sum, product) => {
      // Đảm bảo priceProduct là một số trước khi cộng
      const price = parseFloat(product.priceProduct); // Chuyển đổi thành số
      return sum + price;
    }, 0);
    setTotalPrice(totalPriceSum)
    if (!totalProduct) {
      setTotalPrice(0)
    }
  }, [data, totalProduct])


  const handleRowSelected = useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      dispatch(removeAllProduct())
      setData(cartProduct)
    };

    return (
      <button key="delete" onClick={handleDelete} className='bg-red-500 text-white p-2'>
        Xóa tất cả
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  const handleOderPage = () => {
    if (selectedRows.length > 0) {
      navigate(`/${Router.order_page}`, { state: { selectedRows: selectedRows } })
    } else {
      Swal.fire("Bạn vui lòng chọn ít nhất 1 sản phẩm");
    }
  }


  return (
    <div>
      {cartProduct.length === 0 ? (
        <p className='text-center'>Giỏ hàng của bạn trống.</p>
      ) : (
        <>
          <div></div>
          <div className='table-container'>
            <DataTable
              className='py-2 '
              title="Danh Sách Trong Giỏ"
              responsive={true}
              columns={columns}
              data={cartProduct}
              selectableRows
              contextActions={contextActions}
              onSelectedRowsChange={handleRowSelected}
              clearSelectedRows={toggleCleared}
              pagination
              keyField="id" // Chỉ định trường 'id' làm key duy nhất cho mỗi dòng
            />
          </div>
        </>
      )}
      <div className='text-xl xs:text-sm'>Tổng tiền tất cả đơn hàng:
        <span className='ms-2 font-bold'>
          {formatPrice(totalPrice)}vnd
        </span>
      </div>
      <button onClick={handleOderPage} className='mt-2 p-2 border-2 w-fit bg-red-500 text-white'>Đặt hàng</button>
    </div>
  )
}


