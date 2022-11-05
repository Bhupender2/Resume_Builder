import { useParams } from "react-router";
import Preview from "./Preview";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveResumeToDatabase } from "../redux/action/SaveResume_action";
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const DownLoadResume = () => {
    let [Save, setSave] = useState(false);
    let [LinkClicked, setLinkClicked] = useState(false);
    let { cidx } = useParams();
    let dispatch = useDispatch();
    let { ResumeStore, personalDetails, Education, Skills, Projects, Achievements } = useSelector(state => state);
    const options = {
        orientation: 'potrait',
        unit: 'in',
        format: [6, 11]
    };
    return <div className="h-auto w-full flex">
        {/** Here is Ref*/}
        <div className="w-5/12 h-auto" ref={ref}>
            <Preview idx={cidx} />
        </div>
        <div className="w-7/12 h-screen">
            {/* <SaveOptions/> */}
            <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto slide-down">
                    <div class="absolute inset-0 bg-purple-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto ">
                            <div className="divide-y divide-gray-200">
                                <div className={`py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 flex flex-col justify-evenly items-center ${Save && LinkClicked ? "mx-5" : "mx-24"}`}>
                                    <button className="p-2 border-none bg-green-500 text-white text-center font-semibold rounded-md w-52 outline-none"
                                        onClick={() => {
                                            setSave(true);
                                            dispatch(SaveResumeToDatabase({ personalDetails, Education, Skills, Projects, Achievements }, cidx));
                                        }}>Save</button>
                                    <button className={`p-2 border-nonetext-white text-center font-semibold rounded-md w-52 text-white border-none outline-none ${Save ? "bg-red-400" : "bg-red-200"}`}
                                        onClick={() => {
                                            Save ? setLinkClicked(true) : setLinkClicked(false);
                                            if (!Save)
                                                alert("Please save the resume first..")
                                        }}>Generate Link</button>
                                    <div className={`text-sm h-9 w-auto rounded-md ${LinkClicked && Save ? "flex" : "hidden"} justify-center items-center font-semibold text-gray-800 bg-red-100 px-2 text-center py-2`}>
                                        {`http://localhost:3000/ShowResumeLink/?rid=${ResumeStore.rid}`}
                                        <span class={"absolute h-5 w-5 right-16 -mt-8 flex justify-center items-center"}>
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-300"></span>
                                        </span>
                                    </div>
                                    {/** download pdf when you clicked on button by taking ref from above div*/}
                                    <Pdf targetRef={ref} filename="MY_Resume.pdf" options={options} >
                                        {
                                            ({ toPdf }) =>
                                                <button className="p-2 border-none bg-LightBrown text-white text-center font-semibold rounded-md w-52 outline-none" onClick={toPdf} >
                                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>Download</button>
                                        }
                                    </Pdf>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default DownLoadResume;