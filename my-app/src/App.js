import './App.css';
import {useState, useEffect} from "react";
import Header from './components/Header';
import products from "./helpers/products.json"
import Product from "./components/Product"
import Basket from './components/Basket';
import SnackBar from "./components/SnackBar";
//Material UI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SpeedButton  from "./components/SpeedButton";


function App() {

  const [money, setMoney] = useState(20000)

  const [basket, setBasket] = useState([])

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item)=>{
        return acc + (item.amount * (products.find(product=>product.id === item.id).price))
      },0)
    )

    console.log(basket);
  }, [basket])

  const resetBasket = ()=>{
    setBasket([])
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div className="App">

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon />

          </IconButton>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My Cart</MenuItem>
        <MenuItem onClick={handleClose}>Checkout</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Header total={total} money={money}/>
          </Typography>
          <Button onClick={resetBasket} style={{fontSize:"Larger"}}color="inherit">RESET BASKET</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Box style={{width:"100%",
     display: "flex",
     flexWrap:"wrap",
     justifyContent:"center",
     paddingTop:"7rem"}}>
    {
        products.map(product=>(
          <Product key={product.id} product={product} basket={basket} setBasket={setBasket} money={money} total={total} />
        ))
      }

    </Box>
    
      <Basket total={total} products={products} basket={basket}/>
      <SpeedButton/>






    </div>
  );
}

export default App;
