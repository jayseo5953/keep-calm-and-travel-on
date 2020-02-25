import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function getFriendsActivities (userId,friendId ,city, setFriendsActivities) {
  axios.get(`/users/${userId}/friends/${friendId}/${city}/activities`)
  .then(res=>{
    setFriendsActivities(res.data.rows);
  })
}


const FriendsList = (props) => {
  return (
    <div>
      {props.friends.map(friend=>{
        return <Link 
        onClick={()=>{
          getFriendsActivities(props.userId, friend.id, props.city, props.setFriendsActivities)
        }}
       >{friend.first_name} </Link> 
      })}
    </div>
  );
};

export default FriendsList;