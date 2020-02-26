import axios from "axios";

export default function getFriendsActivities(
  userId,
  friendId,
  city,
  setFriendsActivities
) {
  axios
    .get(`/users/${userId}/friends/${friendId}/${city}/activities`)
    .then(res => {
      setFriendsActivities(res.data.rows);
    });
}
