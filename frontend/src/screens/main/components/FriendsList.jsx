import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import getFriendsActivities from '../helpers/getFriendsActivities';
// import { useTheme } from "@material-ui/core";

const FriendsList = props => {

  const [clicked, setClicked] = useState(null);

  return (
    <div className="friends-container">
      <h4>
        {" "}
        <strong>Friends</strong>{" "}
      </h4>
      <div className="friends-list">
        {props.friends.map(friend => {
          return (
            <a
              key={friend.id}
              style={clicked === friend.first_name ? { color: "grey" } : {}}
              onClick={() => {
                if (clicked == friend.first_name) {
                  props.setFriendsActivities(null);
                  setClicked(null);
                } else {
                  setClicked(friend.first_name);
                  getFriendsActivities(
                    props.userId,
                    friend.id,
                    props.city,
                    props.setFriendsActivities
                  );
                }
              }}
              href='#'
            >
              <h5 className="friend-name">{friend.first_name}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsList;
