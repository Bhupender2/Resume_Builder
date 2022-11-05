import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { firestore } from "../firebase";
import {SET_PERSONAL_DETAILS, SET_EDUCATION_DETAILS, SET_SKILL_DETAILS, SET_PROJECT_DETAILS, SET_ACHIEVEMENTS_DETAILS} from "../redux/action/ResumeDetail_action"
import Preview from "./Preview";

const ShowResumeLink=()=>{
    let dispatch=useDispatch();
    let query = new URLSearchParams(useLocation().search)
    let rid=query.get('rid');
    let [code,setCode]=useState(null);
    useEffect(()=>{
        firestore.collection("Resumes").doc(rid).get().then(doc=>{
            let data=doc.data();
            dispatch(SET_PERSONAL_DETAILS({
                Fname:data.personalDetails.Fname,
                Lname:data.personalDetails.Lname,
                ProfSum:data.personalDetails.ProfSum,
                Email:data.personalDetails.Email,
                Phone:data.personalDetails.Phone,
                City:data.personalDetails.City,
                State:data.personalDetails.State,
                Country:data.personalDetails.Country,
                Pincode:data.personalDetails.Pincode}));
            dispatch(SET_EDUCATION_DETAILS({
                CollegeName:data.Education.CollegeName,
                Degree:data.Education.Degree,
                Year:data.Education.Year,
                Cgpa:data.Education.Cgpa,
                Sname12:data.Education.Sname12,
                Sname12Year:data.Education.Sname12Year,
                Sname12Board:data.Education.Sname12Board,
                Sname12Per:data.Education.Sname12Per,
                Sname10:data.Education.Sname10,
                Sname10Year:data.Education.Sname10Year,
                Sname10Board:data.Education.Sname10Board,
                Sname10Per:data.Education.Sname10Per,
            }));
            data.Skills.map((val,idx)=>{
                dispatch(SET_SKILL_DETAILS({idx:idx,val:val}));
            });
            data.Projects.map((val,idx)=>{
                dispatch(
                    SET_PROJECT_DETAILS({
                      idx: idx,
                      LineType: "Title",
                      val: val.Title,
                    })
                )
                dispatch(
                    SET_PROJECT_DETAILS({
                        idx: idx,
                        LineType: "SubTitle",
                        val: val.SubTitle,
                    })
                )
                dispatch(
                    SET_PROJECT_DETAILS({
                        idx: idx,
                        LineType: "Desc",
                        val: val.Desc,
                    })
                )
            })
            data.Achievements.map((val,idx)=>{
                dispatch(SET_ACHIEVEMENTS_DETAILS({
                    idx:[idx],
                    Ach:val
                  }))
            })
            setCode(data.code);
        })
    },[])
    return <>
        <div className="h-auto w-full bg-gray-100 flex justify-center">
            <div className="h-auto w-6/12 shadowIO flex justify-center items-center">
                <Preview idx={code}/>
            </div>
        </div>
    </>
}
export default ShowResumeLink; 