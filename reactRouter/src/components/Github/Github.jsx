import React, { useEffect, useState } from 'react'
import bike from "../../assets/apache.jpg"
import { useLoaderData } from 'react-router-dom'

function Github() {
  
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Harshal0215')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className="github text-center m-4 bg-center
  rounded-lg bg-cover  text-white p-4 text-3xl" style={{
      backgroundImage: `url('https://imgs.search.brave.com/8H6QzQGssFkswHENZ3RqwK6i9ZdIGWTcjidtlPOxGN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDMwODIy/NTkucG5n')`,
    }}><span className='mb-3'><strong>Github</strong> followers: {data.followers}</span>
    
    <img src={data.avatar_url} alt="Git picture" width={300} className='mt-2 mb-2 rounded-full' />
      {data.login}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Harshal0215')
    
    return response.json()
}    