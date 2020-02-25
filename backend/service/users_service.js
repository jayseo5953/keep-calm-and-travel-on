module.exports = (usersRepository) => {
  return {

    getUser: (userId) => {
      return usersRepository.getUser(userId)
    },

    getUserByEmail: async (userInput) => {
      const [userInfo] = await usersRepository.getUserByEmail(userInput);
      // console.log(userInfo.name)
      return userInfo;
    },

    getFriends: (userId,city) => {
      return usersRepository.getFriends(userId,city);
    },
    getFriendsActivities: (userId,friendId,city) => {
      return usersRepository.getFriendsActivities(userId,friendId,city);
    }
  }
}
