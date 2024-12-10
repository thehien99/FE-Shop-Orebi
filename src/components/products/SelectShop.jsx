import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const SelectShop = ({ title, sort }) => {
  return (
    <div className='flex items-center gap-1 '>
      <div className='xs:text-sm'>
        {title}
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Final Offer" />
        </SelectTrigger>
        <SelectContent>
          {sort?.map((item) => {
            return (
              <div key={item}>
                <SelectItem value={item}>{item}</SelectItem>
              </div>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectShop