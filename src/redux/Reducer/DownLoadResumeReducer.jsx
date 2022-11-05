let DownLoadResumeReducer=(state=false,action)=>{
    switch(action.type){
        case "DOWNLOAD_BTN_CLICKED":
           let temp= state?false:true;
           return temp;
        default: return state;
    }
}
export default DownLoadResumeReducer;