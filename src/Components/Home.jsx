import NavBar from "./NavBar";
import Footer from "./Footer";
import { Redirect, useHistory } from "react-router";
import { useSelector } from "react-redux";

const Home = () => {
  let history=useHistory();
  let userCredentials=useSelector(state=>state.user);
  return (
    <>
    {
      userCredentials?"":<Redirect to="/login"/>
    }
      <NavBar type="Home" />
      <div className="h-auto flex flex-col">
        <div className="h-screen bg-FaceColor flex">
          <div className="h-full w-1/2 p-10 font-sans">
            <div className="h-full w-full flex flex-col items-start justify-center">
              <h1>Build your brand-new resume in as little as 5 minutes.</h1>
              <h3>Try it for free.</h3>
              <button className="h-10 w-5/12 bg-red-600 border-none outline-none rounded-3xl flex items-center justify-center text-lg font-semibold text-white mt-10" onClick={()=>history.push("/templates")}>
                Get Started Now
                <span class="material-icons-outlined ml-1">arrow_forward</span>
              </button>
            </div>
          </div>
          <img
            src="https://www.pinclipart.com/picdir/big/567-5678676_recruitment-seo-service-vector-images-png-clipart.png"
            alt="homeImg"
            className="h-3/5 w-3/5  mt-20"
          ></img>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
