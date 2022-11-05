import { combineReducers } from "redux";
import UserReducer from "./Reducer/UserReducer";
import selectTempReducer from "./Reducer/selectTempReducer";
import { PeronalDetailsReducer } from "./Reducer/PeronalDetailsReducer";
import { EducationDetailsReducer } from "./Reducer/EducationDetailsReducer";
import { SkillDetailsReducer } from "./Reducer/SkillDetailsReducer";
import { ProjectDetailsReducer } from "./Reducer/ProjectDetailsReducer";
import AchievementDetailsReducer from "./Reducer/AchievementDetailsReducer";
import SaveResumeReducer from "./Reducer/SaveResumeReducer";
import DownLoadResumeReducer from "./Reducer/DownLoadResumeReducer";
import ManageNavButtonsReducer from "./Reducer/ManageNavButtonsReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  Template: selectTempReducer,
  personalDetails: PeronalDetailsReducer,
  Education: EducationDetailsReducer,
  Skills: SkillDetailsReducer,
  Projects: ProjectDetailsReducer,
  Achievements: AchievementDetailsReducer,
  ResumeStore: SaveResumeReducer,
  isDownload:DownLoadResumeReducer,
  ManageNav:ManageNavButtonsReducer,
});

export default rootReducer;
