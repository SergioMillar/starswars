import React from "react";

import {Link} from 'react-router-dom';

export default function Navbar(){
  return(

     <div>
        <Link to='/'>
        inicio
         </Link>
         <Link to='People'>
        people
         </Link>
        <Link to='Planets'>        
      planets
         </Link>
   </div>
     

   )
} 