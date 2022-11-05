import { useSelector } from "react-redux";

const CodeE=()=>{
    let {personalDetails,Skills,Education,Projects,Achievements}=useSelector(state=>state);

    return <div className="min-h-screen w-11/12 text-gray-500            font-semibold flex flex-col p-2 m-4 shadow-lg">
       
                <div className="h-auto w-full">
                    <h3 className="h-1/5 w-full text-center mb-2 text-3xl font-extrabold capitalize">{personalDetails.Fname} {personalDetails.Lname}</h3>
                    <div className="flex flex-wrap justify-evenly pt-3 h-auto w-3/5 text-center mx-auto">
                        <p className="ml-2 mb-0">{personalDetails.Email }</p>
                        <p className="ml-2 mb-0">{personalDetails.City}</p>
                        <p className="ml-2 mb-0">{personalDetails.State}</p>
                        <p className="ml-2 mb-0">{personalDetails.Phone}</p>
                        <p className="ml-2 mb-0">{personalDetails.Country}</p>
                        <p className="ml-2 mb-0">{personalDetails.Pincode}</p>
                    </div>
                </div>
            <div className="w-full max-h-72 mb-4 flex bg-purple-400 text-white p-1">
            {personalDetails.ProfSum}</div>
            <div className="w-full h-auto flex">
                <div className="h-full w-3/12 text-purple-400">Skills</div>
                <ul className="flex flex-wrap h-full w-9/12 pl-4">
                {
                    Skills.map(myskill=>{
                        return <li className="h-auto w-1/2">{myskill}</li>
                    })
                }
                </ul>
            </div>
            <div className="w-full max-h-72 mb-4 flex">
                <div className="h-full w-3/12 pt-2 text-purple-400">Education</div>
                <div className="flex flex-col h-full w-9/12 mb-0">
                    <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0 text-gray-800">{Education.CollegeName}</h5>
                    <div className="leading-tight">{Education.Degree}{`(`+Education.Year+`)`}</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Cgpa}</div>
                    </div>
                    <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0 text-gray-800">{Education.Sname12}</h5>
                    <div className="leading-tight">{Education.Sname12Board}({Education.Sname12Year})</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname12Per}</div>
                    </div>
                    <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0 text-gray-800">{Education.Sname10}</h5>
                    <div className="leading-tight">{Education.Sname10Board}({Education.Sname10Year})</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname10Per}</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto mb-4 flex">
                <div className="h-full w-3/12 text-purple-400 ">Projects</div>
                <div className="flex flex-col h-full w-9/12 mb-0">
                    {
                        Projects.map(myprojects=>{
                            return <div className="h-auto w-full mt-2">
                                    <div className="tracking-widest leading-tight mb-0 text-gray-800">&#x2713;{myprojects.Title}</div>
                                    <div className="leading-tight font-extralight italic ml-4">{myprojects.SubTitle}</div>
                                    <div className="leading-tight text-sm ml-4">{myprojects.Desc}</div>
                                    </div>
                        })
                    }
                </div>
            </div>
            <div className="w-full h-auto flex">
                <div className="h-full w-3/12 pt-2 text-purple-400">Achievements</div>
                <ul className="flex flex-col h-full w-9/12 mb-0 pt-2">
                {
                    Achievements.map(myAch=>{
                        return <li>{myAch}</li>
                    })
                }
                </ul>
            </div>
    </div> 
}
export default CodeE;