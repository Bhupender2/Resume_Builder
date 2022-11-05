import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const LogIn = () => {
  let history = useHistory();
  const [Credentials, SetCredentails] = useState({ email: "", password: "" });
  return (
    <>
      <div>
        <div className="h-screen w-full flex justify-center items-center bg-BackImg1 bg-cover">
          <div className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-8/12 h-4/5 shadow-lg flex">
            <div className="w-full lg:w-1/2 h-full bg-DarkBlue rounded-tl rounded-bl p-4 flex flex-col justify-evenly items-center">
              <h1 className="text-center text-BabyPink">LogIn</h1>
              <div className="h-3/6 w-4/6 flex flex-col justify-center items-center">
                <div className="w-full">
                  <div className="text-white">Email</div>
                  <input
                    type="email"
                    className="w-full h-8 rounded border-none pl-2 outline-none"
                    placeholder="Enter Email"
                    value={Credentials.email}
                    onChange={(e) =>
                      SetCredentails({
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
                      SetCredentails({
                        ...Credentials,
                        password: e.currentTarget.value,
                      })
                    }
                  />
                </div>
                <button
                  className="block mt-4 w-3/5 h-8 rounded bg-BabyPink hover:bg-pink-300 border-none outline-none text-MateBlack font-semibold"
                  onClick={() => {
                    auth.signInWithEmailAndPassword(Credentials.email, Credentials.password).then(() => { history.push("/") })
                      .catch((error) => {
                        alert(error.message);
                      })
                  }}
                >
                  Login
                </button>
                <div className="mt-8 text-white">
                  Don't have an account ?
                  <span
                    className="text-BabyPink font-semibold ml-1 cursor-pointer"
                    onClick={() => {
                      history.push("/SignIn")
                    }}
                  >
                    SignUp
                  </span>
                </div>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/vectors/human-resources-recruitment-concept-for-web-page-banner-presentation-vector-id1041244370?k=20&m=1041244370&s=612x612&w=0&h=bXnqapSBX3sMFjMJC1YneLr5OEhkKdzZfHLxEHGCQxs="
              alt="img1"
              className="w-1/2 h-full rounded-tr rounded-br opacity-85 hidden lg:block"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogIn;
