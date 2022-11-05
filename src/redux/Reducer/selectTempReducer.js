let initialState=[
    {idx:0,
    purchase:true,  Liked:false, IsCart:false},
    {idx:1,
    purchase:true,  Liked:false, IsCart:false},
    {idx:2,
    purchase:true,  Liked:false, IsCart:false},
    {idx:3,
    purchase:false, Liked:false, IsCart:false},
    {idx:4,
    purchase:false, Liked:false, IsCart:false},
    {idx:5,
    purchase:false, Liked:false, IsCart:false},
    {idx:6,
    purchase:false, Liked:false, IsCart:false},
    {idx:7,
    purchase:false, Liked:false, IsCart:false}];
let selectTempReducer=(state=initialState,action)=>{
    console.log(state);
    let temp=[...state];
    switch(action.type){
        case "IsLiked":
            temp[action.payload.idx].Liked=action.payload.Liked;
            return temp;
        case "IsPurchased":
            temp[action.payload.idx].purchase=action.payload.purchase;
            return temp;
        case "IsAddedToCart":
            temp[action.payload.idx].IsCart=action.payload.IsCart;
            return temp;
        default: return state;
    }
}
export default selectTempReducer;