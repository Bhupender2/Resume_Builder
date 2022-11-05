let initialState={
    CollegeName:"",
    Degree:"",
    Year:"",
    Cgpa:"",
    Sname12:"",
    Sname12Year:"",
    Sname12Board:"",
    Sname12Per:"",
    Sname10:"",
    Sname10Year:"",
    Sname10Board:"",
    Sname10Per:"",
}
export const EducationDetailsReducer=(state=initialState,action)=>{
    console.log(state);
    switch(action.type){
        case "SET_EDUCATION_DETAILS": return {...state,...action.payload};
        default:return state;
    }
}