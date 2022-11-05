const UserReducer=(state="",action)=>{
    switch (action.type) {
        case "ADD_USER":
            state=action.payload;
            return state;
        default:
            return state;
    }
}
export default UserReducer;