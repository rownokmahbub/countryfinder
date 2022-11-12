import React from 'react'

const Ct = (props) => {
  
    const {name,flags, capital,population,area}=props.cn
    const handleRemove=(name)=>{
        props.onRemove(name)
    }
  return (

  
    
        <div className='bg-gradient-to-r from-slate-800 to-gray-800 drop-shadow-lg px-4 py-4 rounded-lg flex flex-col gap-2 text-white'>
        <img className='h-32 md:h-48 rounded-lg' src={flags.png} alt={name.common} />
        <p className='text-xl font-medium text-white'> Name : {name.common}</p>
        <p className='text-lg '>Population: {population}</p>
        <p className='text-lg'>Capital: {capital}</p>
        <p className='text-lg'>Area: {area}</p>
        <button className='btn bg-gradient-to-r from-red-500 to-pink-500 hover:scale-95 transition duration-300 hover:from-pink-500 hover:to-red-500 capitalize btn-' onClick={()=>{handleRemove(name.common)}}>Remove Country</button>
    </div>
  

  )
}

export default Ct