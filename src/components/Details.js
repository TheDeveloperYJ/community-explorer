import React, { Component } from 'react';
import axios from 'axios'
import ImgCarousel from '../components/DetailsPage/ImgCarousel'
import Description from '../components/DetailsPage/Description'
import Location from '../components/DetailsPage/Location'
import Title from '../components/DetailsPage/Title'
import NavBar from './NavBar';
import Overdrive from 'react-overdrive'
import  styled  from 'styled-components';

const Grid = styled.div `
padding-top:20px;
display:grid;
grid-template-columns:100px 1fr 100px;
box - shadow: 0 4 px 8 px 0 rgba(0, 0, 0, 0.2), 0 6 px 20 px 0 rgba(0, 0, 0, 0.19);
`

export default class Details extends Component{
    
    state = {
        result :{},
        response:false
    }
    componentDidMount() {
      axios.get(`https://api.kloh.in/kloh/external/v1/activity/${this.props.location.state.id}`,{crossdomain:true})
      .then(res => this.setState({result:res.data.response,response:!this.state.response}))
    }
    

    render(){
           const {result,response} = this.state
        return(
            <div>
              {response ? <div>
              <NavBar/>
              <Overdrive id={result.ownerId}>
              <Grid>
           <ImgCarousel image={result.imageUrl}/>
           <Title title={result.title} profile={result.ownerProfileImageUrl} time={result.activityTime.activityDateString} name={result.ownerName}/>
           <Description desc={result.description}/>
           <Location location={result.location} lat={result.location.lat} lng={result.location.lon}/>
           </Grid>
           </Overdrive>
           </div>
           : <p>Loading details....</p>
            }
             </div>
        )
    }
}