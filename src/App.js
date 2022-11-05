import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import Template from "./Components/Template";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch } from "react-redux";
import { ADD_USER } from "./redux/action/addUser_action"
import UserProfile from "./Components/UserProfile";
import PeronalDetails from "./Components/PersonalDetails";
import Preview from "./Components/Preview";
import EducationDetails from "./Components/EducationDetails";
import Skills from "./Components/Skills";
import ProjectDetails from "./Components/ProjectDetails";
import Achievements from "./Components/Achievements";
import DownLoadResume from "./Components/DownLoadResume";
import ShowResumeLink from "./Components/ShowResumeLink";
import Cart from "./Components/Cart";

const App = () => {
  let dispatch=useDispatch();

  useEffect(() => {
    let unsub=auth.onAuthStateChanged(async(user) =>{
      if(user){
        let {email,uid}=user;

        dispatch(ADD_USER(email,uid));

        let docRef=firestore.collection("Users").doc(uid);
        let doc= await docRef.get();
        if(!doc.exists){
          docRef.set({uid,email});
        }
      }
    });
    return()=>{
      unsub();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Cart" component={Cart}/>
          <Route exact path="/ShowResumeLink" component={ShowResumeLink}/>
          <Route exact path="/DownLoadResume/:cidx" component={DownLoadResume}/>
          <Route exact path="/Achievements/:cidx" component={Achievements}/>
          <Route exact path="/ProjectDetails/:cidx" component={ProjectDetails}/>
          <Route exact path="/Skills/:cidx" component={Skills}/>
          <Route exact path="/EducationDetails/:cidx" component={EducationDetails}/>
          <Route exact path="/Preview" component={Preview}/>
          <Route exact path="/PersonalDetails/:cidx" component={PeronalDetails}/>
          <Route exact path="/Profile" component={UserProfile}/>
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/templates" component={Template}/>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
