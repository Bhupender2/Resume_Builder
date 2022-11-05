let initialstate={
    loading:false,
    err:null,
    rid:"",
}
const SaveResumeReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "START_SAVING_RESUME":
            return {...state,loading:true};
        case "RESUME_ERROR": 
            return {...state,loading:false,err:action.payload};
        case "RESUME_DOWNLOADED":
            return {...state,loading:false,rid:action.payload};
        default: return state;
    }
}
export default SaveResumeReducer;