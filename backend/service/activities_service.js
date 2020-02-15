module.exports = (activitiesRepository) => {
  return {

    getAllActivities: () => {
      return activitiesRepository.getAllActivities();
    },

    test: () => {
      return activitiesRepository.test();
    }
  }
}