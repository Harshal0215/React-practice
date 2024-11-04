import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";

function SearchBar({setResults}) {
  const [input,setInput] = useState("")
  const  fetchDate = (value)=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then(data=>{const result = data.filter((user)=>{
      return (value && user && user.name && user.name.toLowerCase().includes(value))
    })
  setResults(result)})
  } 

  const handleChange =(value)=>{
    setInput(value)
    fetchDate(value)
  }
  return (
    <div style={{backgroundColor:'black',padding:'10px',borderRadius:'8px',boxShadow:'1px 2px 5px gold',display:'flex',alignItems:'center',alignContent:'center'}}>
      <BsSearch style={{paddingRight:'5px'}}/>
      <input placeholder='Search' style={{outline:'none',margin:'5px',padding:'5px',border:'none',backgroundColor:'black',fontSize:'1.2rem'}} type="text" value={input} onChange={e => handleChange(e.target.value)} />
    </div>
  )
}

export default SearchBar