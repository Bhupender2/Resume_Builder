import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { SET_PROJECT_DETAILS } from "../redux/action/ResumeDetail_action";
import Preview from "./Preview";

const ProjectDetails = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let { cidx } = useParams();
  let StoredProjectArr = useSelector(state => state.Projects);

  return (
    <>
      <div className="h-screen w-full flex">
        <div className="h-full w-1/2 p-3 flex justify-center items-center">
          <div className="h-auto w-4/5 bg-white rounded-md shadowIO pl-4">
            <h1 className="text-center text-purple-400">Projects</h1>
            {StoredProjectArr.map((ValObj, idx) => {
              return (
                <div key={idx}>
                  <hr className="w-4/5 mx-auto" />
                  <div className="h-auto w-full flex flex-col">
                    <div className="h-10 w-full flex mb-2">
                      <span class="material-icons-outlined text-purple-400 text-2xl">
                        mode_edit
                      </span>
                      <input
                        type="text"
                        value={ValObj.Title}
                        placeholder="Enter Title"
                        className="h-full w-3/5 border-t-0 border-l-0 border-r-0 border-b-2 border-purple-400 bg-gray-200 rounded-sm outline-none"
                        onChange={(e) =>
                          dispatch(
                            SET_PROJECT_DETAILS({
                              idx: idx,
                              LineType: "Title",
                              val: `${e.currentTarget.value}`,
                            })
                          )
                        }
                      />
                    </div>
                    <div className="h-10 w-full flex mb-2">
                      <span class="material-icons-outlined text-purple-400 text-2xl">
                        mode_edit
                      </span>
                      <input
                        type="text"
                        value={ValObj.SubTitle}
                        placeholder="Enter Sub-title"
                        className="h-full w-3/5 border-t-0 border-l-0 border-r-0 border-b-2 border-purple-400 bg-gray-200 rounded-sm outline-none"
                        onChange={(e) =>
                          dispatch(
                            SET_PROJECT_DETAILS({
                              idx: idx,
                              LineType: "SubTitle",
                              val: e.currentTarget.value,
                            })
                          )
                        }
                      />
                    </div>
                    <div className="h-16 w-full flex mb-2">
                      <span class="material-icons-outlined text-purple-400 text-2xl">
                        mode_edit
                      </span>
                      <textarea
                        type="text"
                        value={ValObj.Desc}
                        placeholder="About Project"
                        className="h-full w-4/5 border-t-0 border-l-0 border-r-0 border-b-2 border-purple-400 bg-gray-200 rounded-sm outline-none"
                        onChange={(e) =>
                          dispatch(
                            SET_PROJECT_DETAILS({
                              idx: idx,
                              LineType: "Desc",
                              val: e.currentTarget.value,
                            })
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            <button
              className="h-9 w-16 flex items-center border-none bg-BabyBrown text-white font-semibold rounded-md mx-auto mt-4"
              onClick={() => {
                if (StoredProjectArr.length === 2) {
                  alert("You can only add atmost 2 Projects in your resume")
                  return;
                }
                dispatch(SET_PROJECT_DETAILS({
                  idx: [StoredProjectArr.length],
                  LineType: 'Title',
                  val: ""
                }))
              }}
            >
              Add
                <span class="material-icons-outlined">add</span>
            </button>

            <div className="h-1/5 w-full my-4 flex justify-between">
              <button
                className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md ml-7"
                onClick={() => history.push(`/Skills/${cidx}`)}
              >
                <span class="material-icons-outlined">keyboard_backspace</span>
                Back
              </button>

              <button
                className="h-9 w-20 flex items-center border-none   bg-purple-400 text-white font-semibold rounded-md mr-7"
                onClick={() => history.push(`/Achievements/${cidx}`)}
              >
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
  );
};
export default ProjectDetails;
