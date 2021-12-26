import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './UserProfile.css'
import CakeIcon from '@mui/icons-material/Cake'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DateRangeIcon from '@mui/icons-material/DateRange'

function UserProfile(props) {

    let userName = "User Name";
    if(props.userName){
        userName = props.userName;
    }
    let userAge = props.memberDets.platform_age_of_user? props.memberDets.platform_age_of_user : 0;
    let lastSeen = props.memberDets.lastSeen? props.memberDets.lastSeen : 0;
    let activeStreak = props.memberDets.streak? props.memberDets.streak : 0;

  return (

    <div className="UserProfile_container">
      <div className="UserProfile">
        <div className="UserProfile_avatar">
          <Avatar src={props.avatar_src} className="svg" />
        </div>

        <div className="UserProfile_details">
          <h1>{userName}</h1>
          <div className="UserProfile_details_activityDets">
            <div className="UserProfile_activityDetails_element">
              <IconButton>
                <CakeIcon />
              </IconButton>
              Member for: {userAge} days
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
              Active for {activeStreak } days
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
