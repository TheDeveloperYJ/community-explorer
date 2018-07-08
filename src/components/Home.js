import React from 'react';
import NavBar from './NavBar'

const styles = {
    textAlign:'center',
    fontSize:'50px',
    color:'black',
    borderBottom:'green solid 2px',
    width:'500px',
    margin:'0 auto',
    paddingTop:'15px'
}


const Home = () => {
    return (
        <div>
        <NavBar/>
      <div style={styles}>

      Welcome to Kloh!
     
      </div>
     </div>
    )
}

export default Home;