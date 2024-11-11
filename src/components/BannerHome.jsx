import React from 'react'
import { Link } from 'react-router-dom'

const BannerHome = () => {
  return (
    <div className='mx-6 p-6'>
      <div className="grid grid-flow-col gap-9 lg:gap-5 xs:grid-flow-row">
        <div className="row-span-3 col-span-1 ">
          <Link>
            <img src="https://orebishopping.reactbd.com/static/media/saleImgOne.5fd9a91421b8b3d52f04.webp" alt="" />
          </Link>
        </div>
        <div className="col-span-1">
          <Link>
            <img src="https://orebishopping.reactbd.com/static/media/saleImgTwo.ecb733524e878406c281.webp" alt="" />
          </Link>
        </div>
        <div className="row-span-2 col-span-1  ">
          <Link>
            <img src="https://orebishopping.reactbd.com/static/media/saleImgThree.7f55d28e41e547163b6c.webp" alt="" />
          </Link>
        </div>
      </div>
    </div >
  )
}

export default BannerHome