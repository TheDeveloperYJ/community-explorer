import React, { Component } from 'react';
import  {Link} from 'react-router-dom'
import {Navbar} from 'react-materialize'

class NavBar extends Component{
    render(){
        return(
        <Navbar brand='Kloh' right>
          <Link to='/activity'>Activities</Link>
          
        </Navbar>

        )
    }
}

export default NavBar;