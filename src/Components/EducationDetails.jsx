import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { SET_EDUCATION_DETAILS } from "../redux/action/ResumeDetail_action";
import Preview from "./Preview";

const EducationDetails = () => {
    let history = useHistory();
    let dispatch = useDispatch();
    let { cidx } = useParams();
    let { CollegeName, Degree, Year, Cgpa, Sname12, Sname12Year, Sname12Board, Sname12Per, Sname10, Sname10Year, Sname10Board, Sname10Per } =
        useSelector((state) => state.Education);

    return <>
        <div className="min-h-screen w-full flex">
            <div className="h-full w-1/2 p-3 flex justify-center items-center">
                <div className="h-full w-4/5 bg-white rounded-md shadowIO">
                    <h1 className="text-center text-purple-400">Education</h1>
                    <hr className="w-4/5 mx-auto" />
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">College Name</span>
                            <input type="text" value={CollegeName}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ CollegeName: e.currentTarget.value }))}
                            />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Degree</span>
                            <input type="text" value={Degree}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Degree: e.currentTarget.value }))}
                            />
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Year</span>
                            <input type="email" value={Year}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Year: e.currentTarget.value }))}
                            />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Percentage</span>
                            <input type="tel" value={Cgpa}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Cgpa: e.currentTarget.value }))}
                            />
                        </div>
                    </div>
                    <hr className="w-4/5 mx-auto" />
                    <h5 className="text-center">Class-XII</h5>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">School Name</span>
                            <input type="text" value={Sname12}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname12: e.currentTarget.value }))}
                            />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Year</span>
                            <input type="text" value={Sname12Year}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname12Year: e.currentTarget.value }))}
                            />
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Board</span>
                            <input type="text" value={Sname12Board}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname12Board: e.currentTarget.value }))}
                            />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Percentage</span>
                            <input type="text" value={Sname12Per}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname12Per: e.currentTarget.value }))}
                            />
                        </div>
                    </div>
                    <hr className="w-4/5 mx-auto" />
                    <h5 className="text-center">Class-X</h5>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">School Name</span>
                            <input type="text" value={Sname10}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1 "
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname10: e.currentTarget.value }))}
                            />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Year</span>
                            <input type="text" value={Sname10Year}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1 uppercase"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname10Year: e.currentTarget.value }))}
                            />
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Board</span>
                            <input type="text" value={Sname10Board}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname10Board: e.currentTarget.value }))}
                            />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Percentage</span>
                            <input type="text" value={Sname10Per}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_EDUCATION_DETAILS({ Sname10Per: e.currentTarget.value }))}
                            />
                        </div>
                    </div>
                    <div className="h-10 w-full my-4 flex justify-between">
                        <button className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md ml-7"
                            onClick={() => history.push(`/PersonalDetails/${cidx}`)}>
                            <span class="material-icons-outlined">keyboard_backspace
                    </span>Back</button>

                        <button className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md mr-7"
                            onClick={() => history.push(`/Skills/${cidx}`)}>
                            Next<span class="material-icons-outlined">east</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-full w-1/2">
                <Preview idx={cidx} />
            </div>
        </div>
    </>
}
export default EducationDetails;