const AchievementDetailsReducer = (state = [""], action) => {
  switch (action.type) {
    case "SET_ACHIEVEMENTS_DETAILS":
      if (!action.payload) return state;
      let { idx, Ach } = action.payload;
      let temp =[...state];
      temp.splice(idx,1, Ach);
      return temp;
    default:
      return state;
  }
};
export default AchievementDetailsReducer;
