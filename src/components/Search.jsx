import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Input } from "@/components/ui/input"

import icon from '../icons/icons'
const Search = () => {
  const menuCategory = [
    {
      idx: 1, name: 'Accessories'
    },
    {
      idx: 2, name: 'Furniture'
    },
    {
      idx: 3, name: 'Electronics'
    },
    {
      idx: 4, name: 'Clothes'
    },
    {
      idx: 5, name: 'Bags'
    },
    {
      idx: 6, name: 'Home appliances'
    }
  ]
  const { HiMenuAlt4, FaShoppingCart } = icon
  return (
    <div className='mx-6 p-6 xs:ms-1 flex justify-around xs:justify-between items-center'>
      <div className=''>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <div className='me-2 xs:hidden'>
                <HiMenuAlt4 />
              </div>
              All Categories
            </MenubarTrigger>
            <MenubarContent>
              {menuCategory.map((item) => {
                return (
                  <div key={item?.idx}>
                    <MenubarItem >
                      {item?.name}
                    </MenubarItem>
                  </div>
                )
              })}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className='w-1/2 xs:w-full'>
        <Input placeholder='Search Product' search='search' />
      </div>
      <div className='cursor-pointer xs:hidden'>
        <FaShoppingCart className='text-3xl' />
      </div>
    </div>
  )
}

export default Search