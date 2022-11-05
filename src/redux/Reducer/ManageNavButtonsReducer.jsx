const ManageNavButtonsReducer=(state="All",action)=>{
    switch(action.type){
        case "ManageNav":
            return action.payload;
        default:return state;
    }
}
export default ManageNavButtonsReducer;