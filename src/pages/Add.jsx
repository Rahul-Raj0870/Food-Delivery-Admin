import React, { useState } from 'react'
import './Add.css'
import { url } from '../services/URL.js'
import axios from 'axios'
import upload from '../assets/upload.png'
import { toast } from 'react-toastify'
const Add = () => {
  
  const [image,setImage] = useState(false)
  const [imageUrl, setImageUrl] = useState('');
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async(event) =>{
    event.preventDefault()
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    // formData.append("image",image)
     // Check if an image file is provided, otherwise use the URL
     if (image) {
      formData.append("image", image);
    } else if (imageUrl) {
      formData.append("imageUrl", imageUrl);
    } else {
      toast.error("Please provide an image file or an image URL.");
      return;
    }

    const response = await axios.post(`${url}/api/food/add`,formData)
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false)
      setImageUrl('');
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='flex-col img-upload'>
          <p>Upload Image</p>
          <label htmlFor="image">
          <img src={image?URL.createObjectURL(image):upload} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden  />
        </div>
        <div className='flex-col pro-name'>
          <p>Or enter Image URL</p>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='Enter image URL here'
          />
        </div>
        <div className='pro-name flex-col'>
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here'/>
        </div>
        <div className='pro-description'>
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
        </div>
        <div className='cat-price'>
          <div className='add-cat flex-col'>
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sanwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add