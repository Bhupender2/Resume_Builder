import Preview from "./Preview";
import { SET_PERSONAL_DETAILS } from "../redux/action/ResumeDetail_action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router"

const PersonalDetails = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let { cidx } = useParams();
    let { Fname, Lname, ProfSum, Email, Phone, City, State, Country, Pincode } =
        useSelector((state) => state.personalDetails);

    return <>
        <div className="h-screen w-full flex">
            <div className="h-full w-1/2 p-3 flex justify-center items-center">
                <div className="h-4/5 w-4/5 bg-white rounded-md shadowIO">
                    <h1 className="text-center text-purple-400">Personal Details</h1>
                    <hr className="w-4/5 mx-auto" />
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">First Name:</span>
                            <input type="text" value={Fname}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ Fname: e.currentTarget.value }))} />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Last Name:</span>
                            <input type="text" value={Lname}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ Lname: e.currentTarget.value }))} />
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-evenly px-4">
                        <div className="h-full w-full flex flex-col">
                            <span className="font-medium ml-1">Professional Summary</span>
                            <input type="text" value={ProfSum}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 mx-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ ProfSum: e.currentTarget.value }))} />
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Email</span>
                            <input type="email" value={Email}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ Email: e.currentTarget.value }))} />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Phone</span>
                            <input type="tel" value={Phone}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ Phone: e.currentTarget.value }))} />
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">City</span>
                            <input type="text" value={City}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ City: e.currentTarget.value }))} />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">State</span>
                            <input type="text" value={State}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ State: e.currentTarget.value }))}
                            />
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-evenly">
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Country</span>
                            <input type="text" value={Country}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ Country: e.currentTarget.value }))} />
                        </div>
                        <div className="h-full w-5/12 flex flex-col">
                            <span className="font-medium">Pincode</span>
                            <input type="text" value={Pincode}
                                className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1"
                                onChange={(e) => dispatch(SET_PERSONAL_DETAILS({ Pincode: e.currentTarget.value }))} />
                        </div>
                    </div>
                    <button className="h-9 w-20 flex items-center border-none bg-purple-400 text-white font-semibold rounded-md m-4"
                        onClick={() => history.push(`/EducationDetails/${cidx}`)}>
                        Next<span class="material-icons-outlined">east</span>
                    </button>
                </div>
            </div>
            <div className="h-full w-1/2">
                <Preview idx={cidx} />
            </div>
        </div>
    </>
}
export default PersonalDetails;