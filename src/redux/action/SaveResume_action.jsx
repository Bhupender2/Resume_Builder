import {firestore} from "../../firebase";

//Normal actions *******************************

export const START_SAVING_RESUME=()=>{
    console.log("start");
    return{
        type:"START_SAVING",
    }
}
export const RESUME_ERROR=(err)=>{
    console.log("err");
    return{
        type:"RESUME_ERROR",
        payload:err
    }
}
export const RESUME_DOWNLOADED=(rid)=>{
    console.log("id");
    return{
        type:"RESUME_DOWNLOADED",
        payload:rid
    }
}

//Special actions for async work ****************

export const SaveResumeToDatabase=(details,code)=>{
    return (disptach)=>{

        disptach(START_SAVING_RESUME());
        firestore.collection("Resumes").add({...details,code})
        .then((docRef)=>{
            return docRef.get();
        }).then(doc=>{
            disptach(RESUME_DOWNLOADED(doc.id));
        }).catch(err=>{
            disptach(RESUME_ERROR(err));
        })

    }
}
