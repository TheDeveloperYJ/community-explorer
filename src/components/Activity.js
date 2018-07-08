import React, { Component } from 'react';
import {Card,CardTitle,Row,Col,Preloader} from 'react-materialize'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios'
import ProfilePic from './DetailsPage/ProfilePic';
import Time from './DetailsPage/Time';
import Address from './DetailsPage/Address';
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const Position = styled.div`
    position: absolute;
    right: 2px;
    top:50%;
    `;

export default class Activity extends Component{

    state = {
        results:[]
    }
    
    componentDidMount(){
        const payload = {
            "location": {
                "lat": 12.926031,
                "lon": 77.676246
            }
        }
        axios.post(' https://api.kloh.in/kloh/external/v1/activity/list',payload)
        .then(res => this.setState({results:res.data.response.results}))
    }
    render(){
        return(
            <div>
    <NavBar/>
    <Row>
    {this.state.results.length > 0 ? this.state.results.map(u=>{
        return (
             <Col l={4} key={u.ownerId}>
             <Overdrive id={u.ownerId}>
              <Card className='medium'
                 header={<CardTitle image={u.imageUrl}>{u.title}</CardTitle>}
                 actions={[<Link  to ={{pathname:`/eventDetail/${u.slug}`,state:{id:u.activityId}}} key={u.ownerId}>Join</Link>]}>
               
               <Position>  <ProfilePic profile={u.ownerProfileImageUrl}/></Position>
                   <h6>{u.summary}</h6>
                 <h6> <Time time={u.activityTime.activityDateString}/> </h6>
               <Address location={u.location}/>
                 
             </Card> 
             </Overdrive>
               </Col>
        )
        }
    ) :
     <Col s={6}>
     <Preloader size='big' />
     </Col>
    }
   </Row>
   </div>
        ) 
    }
}
