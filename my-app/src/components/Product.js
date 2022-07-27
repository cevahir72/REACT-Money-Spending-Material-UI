import React from 'react';
//Material UI imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { moneyFormat } from '../helpers/moneyFormat';
import { Typography } from '@mui/material';




function Product({product, basket, setBasket, total, money}) {

  const basketItem = basket.find(item=>item.id === product.id)

  const addBasket = ()=>{
    const checkBasket = basket.find(item=>item.id === product.id)
    const remainBasket = basket.filter(item=> item.id !== product.id)
    if (checkBasket){
      checkBasket.amount+=1
      setBasket([...remainBasket, checkBasket])
    }else{
      setBasket([...remainBasket,
      {
        id:product.id,
        title: product.title,
        amount:1
      }])
    }
  }

  const removeBasket = ()=>{

    const currentBasket = basket.find(item=>item.id === product.id)
    currentBasket.amount-=1
    const basketWithoutCurrent = basket.filter(item=> item.id !== product.id)

    if( currentBasket.amount === 0){
      setBasket([...basketWithoutCurrent])
    }else{
      setBasket([...basketWithoutCurrent, currentBasket])
    }
  }



  return (
    <div>
        <Card 
        style={{margin:"1rem",  width:"90%", position:"relative"}}>
          <CardContent>
            <Typography variant='h8'>
              {product.title}
            </Typography>
            <Typography variant='h6'>
              ${moneyFormat(product.price)}
            </Typography>
          </CardContent>
      <CardMedia
        component="img"
        width ="100%"
        height="100vh"
        image={product.image}
        alt="image"
      />
      <CardContent style={{display:"flex", justifyContent:"center", margin:"1rem 0", alignItems:"center", position:"relative"}}>
          <Button onClick={removeBasket} disabled={!basketItem} variant="contained" size="small">-</Button>
          <Box style={{width:"2rem", display:"flex", justifyContent:"center", alignItems:"center"}}>{basketItem && basketItem.amount || 0}</Box>
          <Button disabled={total + product.price > money} onClick={addBasket} variant="contained" size="small">+</Button>

      </CardContent>
    </Card>

    
          
          
          
        </div>
        
  )
}

export default Product