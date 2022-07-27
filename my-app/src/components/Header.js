import React from 'react'
import { moneyFormat } from '../helpers/moneyFormat';



function Header({money, total}) {

  


  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      {
        total === 0 && (
          <h2>Your Balance : ${moneyFormat(money)} </h2>
        )
      }
      {
        total > 0 && total !== money && (
          <h2>Your Balance : ${moneyFormat(money - total)} </h2>

        )
      }
      {
        money - total === 0 && ( 
          <h2> There is no money to spend!</h2>
        )
      }
        
    </div>
  )
}

export default Header