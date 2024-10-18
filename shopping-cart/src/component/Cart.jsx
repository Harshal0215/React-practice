import React from 'react'
import { deletePro } from '../store/cartSlice'
import { Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
  const dispatch = useDispatch()
  const removeProduct =(id)=>{
    dispatch(deletePro(id))
  }
  const cartProducts = useSelector(state => state.cart)
  const total = cartProducts.reduce((a,b)=> a + b.price, 0)
  return (
    <div style={{minHeight:'82vh'}}>
      <h2 style={{color:'orange'}}>Cart ({cartProducts.length})</h2>
      <div style={{display:'flex',flexDirection:'column' ,gap:"5px",alignItems:'center',justifyContent:'center',margin:'10px'}}>
        {cartProducts.map((item,i)=>(
          <Card key={i} style={{ width: '18rem',margin:'5px', border:'3px solid black',boxShadow:'2px 2px 5px gray'}}>
          <Card.Img variant="top" src={item.image} style={{width:'100px', height:'130px',margin:'auto'}}/>
          <Card.Body>
            <Card.Title><p>{item.title}</p></Card.Title>
            
            <p style={{color:'darkgreen'}}>$ {item.price} &nbsp;&nbsp;&nbsp;<span style={{textDecorationLine:'line-through',color:'red'}}>${Math.round(item.price  *1.3)}</span></p>
            <Button style={{marginRight:'5px'}} variant="outline-success">Buy</Button>
            <Button onClick={()=>removeProduct(item.id)} variant="danger">Remove from Cart</Button>
          </Card.Body>
        </Card>
        ))}
      </div>  
      <h5 style={{color:'green'}}>Total :  $ {total}</h5>
    </div>
  )
}

export default Cart