import React from "react";
import{Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default function Navbar(){
  return(
    <Menu inverted>
      <div>
        <Link to='/'>
        <Menu.Item name='Star Wars API' />
        </Link>
        <Link to='People'>
        <Menu.Item name='People' />
        </Link>
        <Link to='Planets'>        
      <Menu.Item name='Planet' />
        </Link>
     
      
      </div>
     
    </Menu>
  )
}