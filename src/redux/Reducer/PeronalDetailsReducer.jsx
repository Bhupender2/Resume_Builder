let initialState={
    Fname:"",
    Lname:"",
    ProfSum:"",
    Email:"",
    Phone:"",
    City:"",
    State:"",
    Country:"",
    Pincode:""
}
export const PeronalDetailsReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_PERSONAL_DETAILS": return {...state,...action.payload};
        default: return state;
    }
}