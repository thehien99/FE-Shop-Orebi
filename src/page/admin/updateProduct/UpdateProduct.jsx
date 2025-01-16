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
import { memo, useState } from "react"
import { useDispatch } from "react-redux"
import { getOneProductActions } from "../../../redux/actions/productActions"

function UpdateProduct({ id }) {
  const [payload, setPayload] = useState({
    name: '',
    description: '',
    price: '',
    color: '',
    size: '',
    quantity: '',
    imageId: '',
    totalSock: ''
  })

  const dispatch = useDispatch()
  
  const handleCallApi = () => {
    dispatch(getOneProductActions(id))
  }
  return (
    <Dialog aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <DialogTrigger asChild >
        <div className='bg-red-400 hover:text-blue-500 rounded-lg' onClick={handleCallApi} >
          <Button variant="outline" className="rounded-lg bg-red-400">Edit </Button>
        </div>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
        </DialogHeader>
        <FormProduct payload={payload} setPayload={setPayload} />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default memo(UpdateProduct)