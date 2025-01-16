import React, { useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { getAlluserAdminActions } from '../../../redux/actions/adminActions'
const AllUser = () => {
  const user = useSelector(state => state.getAllUser.user)
  const [filterText, setFilterText] = useState("");
 
  const customStyles = {
    headCells: {
      style: {
        fontSize: "17px",
        fontWeight: "700",
      },
    },
  };

  const columns = [
    {
      name: 'Name',
      cell: row => (
        <span className='text-[18px]'>{row.name}</span>
      ),
      sortable: true,

    },
    {
      name: 'Địa chỉ',
      selector: row => row.address?.address,
      sortable: true,

    },
    {
      name: 'Số điện thoại',
      selector: row => row.address?.phone,
      sortable: true,

    },
    {
      name: 'Email',
      selector: row => row.emailOrPhone,
      sortable: true,

    },
    {
      name: 'Ghi chú',
      selector: row => row.notes || 'không có',
      sortable: true,
    },
    {
      name: 'Vai trò',
      selector: row => row.role,
      sortable: true,
    },
  ];

  const filteredItems = useMemo(
    () =>
      user?.filter(
        (item) =>
          item.name &&
          item.name.toLowerCase().includes(filterText.toLowerCase())
      ),
    [filterText]
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
    <div className='all_user w-full h-full'>
      <div className='p-6'>
        <div className='text-2xl text-center font-sans font-bold'>Tất cả người dùng</div>
        <div className='list_user'>
          <DataTable
            columns={columns}
            customStyles={customStyles}
            data={filteredItems}
            pagination
            subHeaderComponent={subHeaderComponentMemo}
            subHeader
            className='p-3'
          />
        </div>
      </div>
    </div>
  )
}

export default AllUser