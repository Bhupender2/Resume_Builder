export const ProjectDetailsReducer=(state=[{}],action)=>{
    switch(action.type){
        case "SET_PROJECT_DETAILS":
                if(!action.payload) return state;
                let {idx,LineType,val}=action.payload;
                let temp=[...state];
                if(!temp[idx]) temp.push({});
                let tempObj=temp[idx];
                tempObj[LineType]=val;
                temp.splice(idx,1,tempObj);
                return temp;
        default:return state;
    }
}
