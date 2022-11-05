import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { SET_ACHIEVEMENTS_DETAILS } from "../redux/action/ResumeDetail_action";
import Preview from "./Preview";

const Achievements = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let {cidx}=useParams();
  let StoredAch=useSelector(state=>state.Achievements)
  return (
    <>
      <div className="h-screen w-full flex">
        <div className="h-screen w-1/2 p-3 flex justify-center items-center">
          <div className="h-4/5 w-4/5 bg-white rounded-md shadowIO flex flex-col items-center">
            <h1 className="text-center text-purple-400">Achievements</h1>
            <hr className="w-4/5 mx-auto" />
            {
              StoredAch.map((val,idx)=>{
                  return(
                    <input type="text"
                      key={idx}
                      value={val}
                      className="h-10 w-4/5 bg-gray-200 border-none rounded-md my-4 outline-none"
                      onChange={(e) =>dispatch(
                          SET_ACHIEVEMENTS_DETAILS({
                            idx: [idx],
                            Ach: e.currentTarget.value,
                          }))}
                     />
                 )
              })
            }
            
            <button
                className="h-9 w-16 flex items-center border-none bg-BabyBrown text-white font-semibold rounded-md"
                onClick={() =>{
                  if(StoredAch.length>2){ 
                  alert("You can't add achievements more than 3")
                  return ;
                }else return dispatch(SET_ACHIEVEMENTS_DETAILS({
                  idx:[StoredAch.length],
                  Ach:""
                }))
                }}
              >
                Add
                <span class="material-icons-outlined">add</span>
            </button>

            <div className="h-10 w-full my-4 flex justify-between">
              <button
                className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md ml-7"
                onClick={() => history.push(`/ProjectDetails/${cidx}`)}
              >
                <span class="material-icons-outlined">keyboard_backspace</span>
                Back
              </button>

              <button
                className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md mr-7"
                onClick={() => history.push(`/DownLoadResume/${cidx}`)}
              >
                Next<span class="material-icons-outlined">east</span>
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2">
          <Preview idx={cidx}/>
        </div>
      </div>
    </>
  );
};
export default Achievements;
