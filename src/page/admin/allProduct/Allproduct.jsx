import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { deleteProductApi, getAllProductApi } from "../../../api/api";
import UpdateProduct from "../updateProduct/UpdateProduct";
import { useLocation } from "react-router-dom";

function Allproduct() {

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation()
  const columns = [
    {
      name: 'Tên sản phẩm',
      selector: row => row.name,
      sortable: true,

    },
    {
      name: 'Giá',
      selector: row => row.price,
      sortable: true,
      cell: row => (
        <span>{row.price.toLocaleString()} VND</span> // Định dạng giá trị
      ),
    },
    {
      name: 'Số lượng',
      selector: row => row.quantity,
      sortable: true,

    },
    {
      name: 'Tồn kho',
      selector: row => row.totalSock || 0,
      sortable: true,
    },
    {
      name: "Actions",
      button: 'true',
      cell: (row) => (
        <UpdateProduct id={row?.id} keyEdit='edit' />
      ),
    },
    {
      name: "Xóa",
      button: 'true',
      cell: (row) => (
        <button onClick={() => handleDeleteProduct(row.id)} className="border-2 w-1/2 p-2 rounded-xl bg-blue-500 text-white hover:text-red-500">X</button>
      )
    },

  ];


  const customStyles = {
    headCells: {
      style: {
        fontSize: "17px",
        fontWeight: "700",
      },
    },
  };


  useEffect(() => {
    const fetchApi = async () => {
      const res = await getAllProductApi();
      setData(res);
    };
    fetchApi();
  }, []);

  const filteredItems = useMemo(
    () =>
      data?.filter(
        (item) =>
          item.name &&
          item.name.toLowerCase().includes(filterText.toLowerCase())
      ),
    [data, filterText]
  );

  const handleFilterChange = (e) => {
    setFilterText(e.target.value); // Cập nhật giá trị filterText
  };

  const handleClearFilter = () => {
    setFilterText("");
    setResetPaginationToggle(!resetPaginationToggle);
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
  }, [filterText, resetPaginationToggle]);


  const handleDeleteProduct = async (id) => {
    console.log(id)
    const dataAfterClear = data.filter((item) => item.id !== id)
    setData(dataAfterClear)
    const res = await deleteProductApi(id)
    if (res.code === 1) {
      const res = await getAllProductApi()
      setData(res)
    }
  }
  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      customStyles={customStyles}
      pagination
      paginationResetDefaultPage={resetPaginationToggle}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows
      persistTableHead
      className="lg:py-3"
    />
  );
}

export default Allproduct;
