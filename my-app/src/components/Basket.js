import SnackBar from "./SnackBar"
import React from 'react';
//Material UI imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//List Design imports
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));





function Basket({total, basket}) {
  return (
    <div style={{paddingBottom:"2rem"}}>
        <Accordion style={{margin:"0 1rem 0 1rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
           {/* ///////////////// List Design Starts /////////// */}
           <Stack spacing={1}>
           { basket.map(item=>{
            return(
              <Item>
                  <h4>{item.title} x {item.amount}</h4>
              </Item>
                 
            )
        })}
        
    </Stack>
    {/* ///////////////List Design Ends /////////////////// */}
        <h3 style={{fontFamily:"Arial"}}>TOTAL: ${total}</h3>
        <SnackBar/>
        </AccordionDetails>
      </Accordion>
      
       
      

    </div>
  )
}

export default Basket