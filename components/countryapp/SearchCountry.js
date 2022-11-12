import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SearchCountry = (props) => {
    const [search,setSearch]=useState("")
   const handleChange=(event)=>{
        setSearch(event.target.value)
       
    }
    useEffect(()=>{
       props.onSearch(search)
    },[search])
  return (
    <div className='container mx-auto flex justify-center pt-10'>
        <input className='p-2 bg-gradient-to-r to-gray-700 from-slate-700 text-gray-200 rounded-lg shadow-lg focus:outline-blue-300  ' value={search} onChange={handleChange} type="text" placeholder='search country ..' />
    </div>
  )
}

export default SearchCountry