import NavBar from "./NavBar";

const UserProfile = () => {
    return <>
        <div className="h-screen w-full bg-ProfileBackImg lg:bg-cover flex flex-col">
            <div className="h-4/12">
                <NavBar type="Profile" />
            </div>
            <div className="h-8/12 w-full z-10 flex justify-center items-center mt-16">
                <div className="h-80 w-5/12 bg-gray-100 shadowIO flex rounded-lg">
                    <img src={"https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png"} alt="user" className="h-36 w-3/12 m-3"></img>
                    <div className="h-full w-auto flex flex-col justify-center items-start mx-auto">
                        <div className="text-xl"><span className="font-bold mr-2 text-purple-500">Name:</span>Lorem Ipsum</div>
                        <div className="text-xl"><span className="font-bold mr-2 text-purple-500">Email:</span>LoremIpsum@gmail.com</div>
                        <div className="text-xl"><span className="font-bold mr-2 text-purple-500">Contact:</span>+91 XXXXXXXXXx</div>
                        <div className="text-xl"><span className="font-bold mr-2 text-purple-500">State:</span>xxxxxx</div>
                        <div className="text-xl"><span className="font-bold mr-2 text-purple-500">Country:</span>xxxxxxx</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default UserProfile;