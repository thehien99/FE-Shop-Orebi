import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FormProduct from '../addProduct/FormProduct'
import { memo, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneProductActions } from "../../../redux/actions/productActions"
import { updateProductApi } from "../../../api/api"
import Swal from "sweetalert2"

function UpdateProduct({ id, keyEdit }) {
  const dataOneProduct = useSelector(state => state.product.productOne)

  // Trạng thái để quản lý việc hiển thị Dialog
  const [open, setOpen] = useState(false)

  // Khởi tạo payload với dữ liệu ban đầu nếu có
  const [payload, setPayload] = useState({
    name: '',
    description: '',
    price: '',
    color: '',
    size: '',
    quantity: '',
    totalSock: ''
  })

  const dispatch = useDispatch()

  // Gọi API lấy sản phẩm khi mở modal
  const handleCallApi = () => {
    dispatch(getOneProductActions(id))
    setOpen(true)  // Mở Dialog khi nhấn Edit
  }

  // Cập nhật dữ liệu payload khi có dữ liệu sản phẩm từ Redux
  useEffect(() => {
    if (dataOneProduct) {
      setPayload({
        name: dataOneProduct.name || '',
        description: dataOneProduct.description || '',
        price: dataOneProduct.price || '',
        color: dataOneProduct.color || '',
        size: dataOneProduct.size || '',
        quantity: dataOneProduct.quantity || '',
        totalSock: dataOneProduct.totalSock || ''
      })
    }
  }, [dataOneProduct])

  const handleUpdateProduct = async () => {
    const res = await updateProductApi({
      productId: id,
      payload
    })

    if (res.code === 200) {
      // Dispatch action để lấy lại danh sách sản phẩm

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cập nhật sản phẩm thành công",
        showConfirmButton: false,
        timer: 1500
      })
      setOpen(false)  // Đóng Dialog sau khi cập nhật thành công
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <DialogTrigger asChild>
        <div className='bg-red-400 hover:text-blue-500 rounded-lg' onClick={handleCallApi} >
          <Button varFiant="outline" className="rounded-lg bg-red-400">Edit</Button>
        </div>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
        </DialogHeader>
        {/* Truyền payload vào FormProduct */}
        <FormProduct payload={payload} setPayload={setPayload} keyEdit={keyEdit} />
        <DialogFooter>
          <Button type="submit" onClick={handleUpdateProduct}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default memo(UpdateProduct)
