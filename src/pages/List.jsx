import React, { useEffect, useState } from 'react'
import './List.css'
import { url } from '../services/URL.js'
import { toast } from 'react-toastify'
import axios from 'axios'

const List = () => {
  
  
  const [list,setList]=useState([])
  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data);
    
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error("Error")
    }
  }
  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
    
  }
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='list add flex-box'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className='table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          // Determine the image source
          const imageUrl = typeof item.image === 'string' ? item.image : `${url}/images/${item.image}`;
          return(
            <div key={index} className='table-format'>
              <img src={imageUrl} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button onClick={()=>removeFood(item._id)} className='cursor'><i className="fa-solid fa-x"></i></button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List