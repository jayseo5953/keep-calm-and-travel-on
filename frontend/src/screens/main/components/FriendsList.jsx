import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

function getFriendsActivities (userId,friendId ,city, setFriendsActivities) {
  axios.get(`/users/${userId}/friends/${friendId}/${city}/activities`)
  .then(res=>{
    setFriendsActivities(res.data.rows);
  })
}

const FriendsList = (props) => {
  const [clicked, setClicked] = useState(null);

  return (
    <div className='friends-container'>
      <h4> <strong>Friends</strong> </h4>
      <div className='friends-list'>
        {props.friends.map(friend=>{
          return <Link 
            style={clicked===friend.first_name?{color:'grey'} :{}}
            onClick={()=>{
            if (clicked==friend.first_name) {
              props.setFriendsActivities(null)
              setClicked(null)
            }
            else {
              setClicked(friend.first_name)
              getFriendsActivities(props.userId, friend.id, props.city,props.setFriendsActivities)
            }
          }}
        >
        <h5 className='friend-name'>
        {friend.first_name}
        </h5>
        </Link> 
        })}
      </div>
    </div>
  );
};

export default FriendsList;