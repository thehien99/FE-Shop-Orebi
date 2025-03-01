import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export function EditInfoUser({ payload, setPayload, onCreate, onUpdate, open, setOpen, address, name }) {


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button variant="outline" className='bg-red-500 p-3 text-xl font-bold text-white hover:bg-blue-500 rounded-lg'>Edit Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] mbl:w-[96%] rounded-xl w-full">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-5 py-4 w-full">
          <div className="grid grid-cols-1 items-center gap-4 w-full">
            <Label htmlFor="name" >
              Name
            </Label>
            <input id="name" onChange={(e) => setPayload((prev) => ({ ...prev, name: e.target.value }))} value={payload?.name ? payload.name : name} className="w-full border-2 p-3 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 w-full">
            <Label htmlFor="sdt" className="">
              Số điện thoại
            </Label>
            <input id="sdt" onChange={(e) => setPayload((prev) => ({ ...prev, phone: e.target.value }))} value={payload?.phone} className="w-full border-2 p-3 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 w-full">
            <Label htmlFor="address" className="">
              Địa chỉ giao hàng
            </Label>
            <input id="address" onChange={(e) => setPayload((prev) => ({ ...prev, address: e.target.value }))} value={payload.address} className="w-full border-2 p-3 rounded-lg" />
          </div>
        </div>
        <DialogFooter className='flex flex-row justify-around w-full gap-3'>
          {address ?
            <button type="submit" className="p-3 bg-red-600 text-white w-full rounded-lg" onClick={() => onUpdate(payload)} >Cập nhật</button>
            :
            <button type="submit" className="p-3 bg-blue-500 text-white rounded-lg w-full" onClick={() => onCreate(payload)} >Tạo mới</button>
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
