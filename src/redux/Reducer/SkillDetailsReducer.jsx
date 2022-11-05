export const SkillDetailsReducer=(state=[""],action)=>{
   switch(action.type){
      case "SET_SKILL_DETAILS":
         let {idx,val}=action.payload;
         console.log(idx);
         let temp=[...state];
         temp[idx]=val;
         return temp;
      default:return state;
   }
}