import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './UserProfile.css'
import CakeIcon from '@mui/icons-material/Cake'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DateRangeIcon from '@mui/icons-material/DateRange'

function UserProfile(props) {

    let userName = "User Name";
    let avatar_src = "";
    let userAge = 0;
    let lastSeen = 0;
    let activeDays = 0;
    if(props.memberDets){
        userName = props.memberDets.userName;
        avatar_src = props.memberDets.avatar_src;
        userAge = props.memberDets.userAge;
        lastSeen = props.memberDets.lastSeen;
        activeDays = props.memberDets.activeDays;
    }
    
  return (

    <div className="UserProfile_container">
      <div className="UserProfile">
        <div className="UserProfile_avatar">
          <Avatar src={avatar_src} className="svg" />
        </div>

        <div className="UserProfile_details">
          <h1>{userName}</h1>
          <div className="UserProfile_details_activityDets">
            <div className="UserProfile_activityDetails_element">
              <IconButton>
                <CakeIcon />
              </IconButton>
              Member for: {userAge}
            </div>
            <div className="UserProfile_activityDetails_element">
              <IconButton>
                <AccessTimeIcon />
              </IconButton>
              Last seen on: {lastSeen}
            </div>
            <div className="UserProfile_activityDetails_element">
              <IconButton>
                <DateRangeIcon />
              </IconButton>
              Active for {activeDays} days
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
