import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../../axios/axios'
import ClipLoader from "react-spinners/ClipLoader";


const AddImage = ({ setPayload }) => {
  const [image, setImg] = useState([])
  const [loading, setLoading] = useState(false)

  const handleUpImage = async (e) => {
    setLoading(true)
    e.stopPropagation()

    let file = []

    const files = e.target.files

    const formData = new FormData()

    for (let i of files) {
      formData.append('file', i)
      const res = await axiosClient({
        method: 'post',
        url: 'upload',
        data: formData
      })

      if (res.success === true) {
        setLoading(false)
        file.push(res.url)
      }
    }
    setImg(prev => [...prev, file])
  }

  const handleRemoveImg = (index) => {
    const newImg = image.filter((item, i) => i !== index)
    setImg(newImg)
  }

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      imageId: image
    }))
  }, [image])
  console.log(image)
  return (
    <div className='flex flex-col gap-4 w-full' >
      <div>Upload Image</div>
      <div className='w-full'>
        <input type="file" className='border w-full' id='file' accept='image/*' onChange={handleUpImage} />
      </div>
      <div className='w-full flex flex-wrap border'>
        {
          loading &&
          <ClipLoader />
        }

        {image.map((item, index) => {
          return (
            <>
              <img key={index} src={item} alt="" className='w-1/3 h-auto object-cover ms-2' />
              <button onClick={() => handleRemoveImg(index)} type="button" className="border w-[5%] p-1 h-fit bg-red-400 text-white hover:text-black">x</button>
            </>

          )
        })}
      </div>
    </div>
  )
}

export default AddImage