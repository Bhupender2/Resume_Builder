import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { SET_SKILL_DETAILS } from "../redux/action/ResumeDetail_action";
import Preview from "./Preview";

const Skills = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let {cidx}=useParams();
  let StoredSkills=useSelector(state=>state.Skills);
  return (
    <>
      <div className="h-screen w-full flex">
        <div className="h-auto w-1/2 p-3 flex justify-center items-center overflow-auto">
          <div className="h-auto w-4/5 bg-white rounded-md shadowIO">
            <h1 className="text-center text-purple-400">Skills</h1>
            <hr className="w-4/5 mx-auto" />
            
              <div className="h-4/5 w-full flex flex-wrap">

              {
                StoredSkills.map((val,idx)=>{
                  return <input
                    type="text"
                    key={idx}
                    value={val}
                    className="rounded-sm outline-none border-none bg-gray-200 h-10 pl-1 w-52 mx-auto my-3"
                    onChange={(e) =>
                      dispatch(SET_SKILL_DETAILS({ idx:idx,
                      val:e.currentTarget.value } ))
                    }
                  />
                }) 
              }
              <div className="h-10 pl-1 w-full my-3 flex justify-between">
              <button
                className="h-9 w-16 flex items-center border-none bg-BabyBrown text-white font-semibold rounded-md mx-auto mt-4"
                onClick={()=>{
                  if(StoredSkills.length===10){ 
                    alert("You can only add atmost 10 skills in your resume")
                    return;
                  }
                  dispatch(SET_SKILL_DETAILS({
                    idx:StoredSkills.length,
                    val:""
                  }))
                }}
                >
                Add
                <span class="material-icons-outlined">add</span>
            </button>
              </div>
              </div>
              <div className="h-10 pl-1 w-full my-3 flex justify-between">
              <button
                className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md ml-7"
                onClick={() => history.push(`/EducationDetails/${cidx}`)}
              >
                <span class="material-icons-outlined">keyboard_backspace</span>
                Back
              </button>

              <button
                className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md mr-7"
                onClick={() => history.push(`/ProjectDetails/${cidx}`)}
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
export default Skills;
