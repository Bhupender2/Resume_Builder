import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import {auth} from "../firebase";
import { useSelector } from "react-redux";

const SignIn = () => {
  let history = useHistory();
  let userCredentials=useSelector(state=>state.user);
  const [Credentials, SetCredentials] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  return (
    <>
    { userCredentials?<Redirect to="/"/>:"" }
      <div>
        <div className="h-screen w-full flex justify-center items-center bg-BackImg1 bg-cover">
          <div className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-8/12 h-4/5 shadow-lg flex">
            <img
              src="https://img.freepik.com/free-vector/concept-human-resources-recruitment-filling-out-resumes-hiring-employees-people-fill-out-form_126608-82.jpg?size=626&ext=jpg"
              alt="img1"
              className="w-1/2 h-full rounded-tr rounded-br opacity-85 hidden lg:block"
            ></img>
            <div className="w-full lg:w-1/2 h-full bg-DarkBlue rounded-tl rounded-bl p-4 flex flex-col justify-evenly items-center">
              <h1 className="text-white text-center">SignUp</h1>
              <div className="h-3/6 w-4/6 flex flex-col justify-center items-center">
                <div className="w-full">
                  <div className="text-white">Email</div>
                  <input
                    type="email"
                    className="w-full h-8 rounded border-none pl-2 outline-none"
                    placeholder="Enter Email"
                    value={Credentials.email}
                    onChange={(e) =>
                      SetCredentials({
                        ...Credentials,
                        email: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  <div className="mt-2 text-white">Password</div>
                  <input
                    type="password"
                    className="w-full h-8 rounded border-none pl-2 outline-none"
                    placeholder="Password"
                    value={Credentials.password}
                    onChange={(e) =>
                      SetCredentials({
                        ...Credentials,
                        password: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  <div className="mt-2 text-white">Confirm Password</div>
                  <input
                    type="password"
                    className="w-full h-8 rounded border-none pl-2 outline-none"
                    placeholder="Re-enter Password"
                    value={Credentials.confirmPass}
                    onChange={(e) =>
                      SetCredentials({
                        ...Credentials,
                        confirmPass: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <button className=" mt-4 w-3/5 h-8 p-3 flex justify-center  items-center rounded bg-BabyPink border-none outline-none text-MateBlack font-semibold " onClick={async()=>{
                  if(Credentials.password===Credentials.confirmPass){
                    await auth.createUserWithEmailAndPassword(Credentials.email,Credentials.password);
                  }
                }}  >
                  SignUp
                </button>
                <div className="mt-8 text-white flex justify-center">
                  <span class="material-icons-outlined">arrow_back</span>
                  Back to
                  <span
                    className="text-BabyPink font-semibold ml-1 cursor-pointer"
                    onClick={() => history.push("/Login")}
                  >
                    LogIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
