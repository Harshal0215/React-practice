import React from 'react'
import './home.css'

function Home() {
  return (
    <div style={{minHeight:'82vh'}}>
        <h1>Welcome to the Brand's Store</h1>
        <div className='main'>
        <div className='lefty'>
          <h2>Shop Smarter, Live Better</h2>
          <img src="https://imgs.search.brave.com/U9GiVcEdM4OetbWufJe1AnAx70hb0nNBLMhVWIFxV58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3N1cHBv/cnQta21zLXByb2Qv/R1lqYzhSWEtjMXZy/YmRrTzBJWjFKaTlC/U3pnb0ZMU2k4RWY2"  alt="img" />
          <p>The most value for money products are available here</p>
        </div>
        <div className='righty'>
          <h2>Where Passion Meets Performance</h2>
        </div>
        </div>
        <div className='main2'>
        <div className='righty'>
          <h2>Shop Smarter, Live Better</h2>
          
          <p>The most value for money products are available here</p>
        </div>
        <div className='lefty2'>
          <h2>Where Passion Meets Performance</h2>
          <img src="https://imgs.search.brave.com/kK_yU09cL4_HVvewsMkENksDWc9ojTYbznrcsiUTz6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzA1LzQyLzI2/LzM2MF9GXzMwNTQy/MjY5OF9YNGRvamtF/eEpSSkdUb2hQeVl0/bFdBSXRlZUp5Zmdn/Mi5qcGc"  alt="img" />
        </div>
        </div>
    </div>
  )
}

export default Home