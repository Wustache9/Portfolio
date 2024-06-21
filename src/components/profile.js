import React, { Component } from 'react';
import profile from '../image/Profile_shivam.png';

export class Profile extends Component {
  

    render(){
      return(
        <div class="d-flex flex-column">

            <div class="profile ">
                <img src={profile} alt="profile" className='img-fluid-profile rounded-circle'></img>
                <h1 class="text-light">Shivam</h1>
            </div>
        </div>
      )
    }
}

export default Profile