module.exports = (activitiesRepository) => {
  return {

    getAllActivities: () => {
      return activitiesRepository.getAllActivities();
    },
    getActivitiesByCity: (userInput) => {
      userInput = userInput.toLowerCase()
      return activitiesRepository.getActivitiesByCity(userInput);
    },
    test: () => {
      return activitiesRepository.test();
    }
  }
}
