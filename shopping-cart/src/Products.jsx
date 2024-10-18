import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';


function Products() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  
  const addProducts =(cartProduct)=>{
    dispatch(add(cartProduct))
  }
  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)

  }
    useEffect(()=>{
        fetchProducts() 
        console.log(products)
    },[])
  return (
    <div className='prod' style={{minHeight:'82vh',overflow:'auto',backgroundColor:'#c6c2c2'}}>
      <h3>PRODUCTS...</h3>
      <div style={{display:'grid',gridTemplateColumns:"repeat(4, 1fr)", gap:"5px",alignItems:'center',justifyContent:'center',margin:'10px'}}>
        {products.map((item,i)=>(
          <Card key={i} style={{ width: '18rem',margin:'5px', border:'3px solid black',boxShadow:'2px 2px 5px gray'}}>
          <Card.Img variant="top" src={item.image} style={{width:'100px', height:'130px',margin:'auto'}}/>
          <Card.Body>
            <Card.Title><p>{item.title}</p></Card.Title>
            <Card.Text>
              {item.description.length > 50? item.description.slice(0,50)+'...' : item.description}
            </Card.Text>
            <p style={{color:'darkgreen'}}>$ {item.price} &nbsp;&nbsp;&nbsp;<span style={{textDecorationLine:'line-through',color:'red'}}>${Math.round(item.price  *1.3)}</span></p>
            <Button style={{marginRight:'5px'}} variant="outline-success">Buy</Button>
            <Button onClick={()=>addProducts(item)} variant="outline-warning">Add to Cart</Button>
          </Card.Body>
        </Card>
        ))}
      </div>
    </div>
  )
}

export default Products