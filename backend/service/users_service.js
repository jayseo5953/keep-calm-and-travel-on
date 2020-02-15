module.exports = (usersRepository) => {
  return {

    getUser: (userId) => {
      return usersRepository.getUser(userId)
    }
    
  }
}