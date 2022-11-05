import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IsLiked ,IsAddedToCart } from "../redux/action/selectTemp_action";
import skin1 from "../images/skin1.svg";
import skin2 from "../images/skin2.svg";
import skin3 from "../images/skin3.svg";
import skin4 from "../images/skin4.svg";
import skin5 from "../images/skin5.svg";
import skin6 from "../images/skin6.svg";
import skin7 from "../images/skin7.svg";
import skin8 from "../images/skin8.svg";

const Template = () => {
  let dispatch=useDispatch();
  let history=useHistory();
  let selectedButton=useSelector(state=>state.ManageNav);
  let Templatestate= useSelector(state=>state.Template);
  let temp=[skin1,skin2,skin3,skin4,skin5,skin6,skin7,skin8];
  if(selectedButton==="Liked")
    Templatestate=Templatestate.filter(val=>val.Liked===true);
  else if(selectedButton==="Free") Templatestate=Templatestate.filter(val=>val.purchase===true);

  return (
    <>
      <NavBar type="Template" />
      <div className="min-h-screen w-full bg-gray-300 flex justify-evenly items-center m-0">
        <div className="grid sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-14 mt-5 mb-5">
        {
          Templatestate.map((c,idx)=>{
            let {img,purchase,Liked}=c;
            return <div className="h-96 w-64 bg-white p-1 shadow-md hover:shadow-2xl relative" key={idx}>          
            <img src={temp[idx]} alt="img" className="h-10/12 w-full" onClick={(e)=>{
            purchase?history.push(`/PersonalDetails/${idx}`):history.push("/templates")
          }}   
            />
            
            <span class={`material-icons-outlined absolute bottom-2 text-red-500 z-10 cursor-pointer ${purchase?"left-20":"right-20 "}`}onClick={(e)=>{
              Liked?dispatch(IsLiked({idx,Liked:false})):dispatch(IsLiked({idx,Liked:true}));
            }}>{Liked?"favorite":"favorite_border"}</span>

            <span className={`h-8 flex justify-center items-center text-white rounded-lg absolute bottom-2 right-6 cursor-pointer hover:bg-purple-600 font-semibold ${purchase?"bg-green-400 w-28":"bg-purple-400 w-12"}`} 
            onClick={(e)=>{
              purchase?dispatch(IsAddedToCart({idx,IsCart:false})):dispatch(IsAddedToCart({idx,IsCart:true}));
            }}>
              {purchase?"Use Template":"$5"}
            </span>

          </div>
          })
        }
        </div>
      </div>
    </>
  );
};
export default Template;
