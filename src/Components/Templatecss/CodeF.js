import { useSelector } from "react-redux";

const CodeF=()=>{
    
    let {personalDetails,Skills,Education,Projects,Achievements}=useSelector(state=>state);

    return <div className="min-h-screen w-11/12 text-gray-700 font-semibold flex flex-col p-2 m-4 shadow-lg">
            <div className="w-full h-auto flex flex-col">
                    <h3 className="h-auto w-full pl-2 text-3xl font-extrabold uppercase">{personalDetails.Fname+" "}{personalDetails.Lname}</h3>
                    <div className="flex flex-wrap justify-start pt-1 h-16 w-full">
                        <p className="mr-4 mb-0">{personalDetails.Email}</p>
                        <p className="mr-4 mb-0">{personalDetails.City}</p>
                        <p className="mr-4 mb-0">{personalDetails.State}</p>
                        <p className="mr-4 mb-0">{personalDetails.Phone}</p>
                        <p className="mr-4 mb-0">{personalDetails.Country}</p>
                        <p className="mr-4 mb-0">{personalDetails.Pincode}</p>
                    </div>
            </div>
            <div className="w-full h-auto mb-4 flex flex-col">
                <div className="pl-2 text-xl font-extrabold bg-gray-100">Professional Summary</div>
                <div className="">{personalDetails.ProfSum}</div>
            </div>
            <div className="w-full h-auto flex flex-col">
                <div className=" text-xl font-extrabold bg-gray-100 pl-2">Skills</div>
                <ul className="flex flex-wrap w-full m-auto h-full pl-24">
                {
                    Skills.map(myskill=>{
                        return <li className="h-auto w-1/3">{myskill}</li>
                    })
                }
                </ul>
            </div>
            <div className="w-full h-auto mb-4 flex flex-col">
                <div className="pl-2 text-xl font-extrabold bg-gray-100">Education</div>
                <div className="flex flex-col h-full w-10/12 my-0 mx-auto">
                    <div className="h-full w-full mt-2">
                    <div className="h-full w-full flex justify-between">
                    <h5 className="tracking-widest leading-tight mb-0">{Education.CollegeName}</h5>
                    <div className="italic text-bold text-lg">{Education.Year}</div>
                    </div>
                    <div className="leading-tight">{Education.Degree}</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Cgpa}</div>
                    </div>

                    <div className="h-full w-full mt-2">
                    <div className="h-full w-full flex justify-between">
                    <h5 className="tracking-widest leading-tight mb-0">{Education.Sname12}</h5>
                    <div className="italic text-bold text-lg">{Education.Sname12Year}</div>
                    </div>
                    <div className="leading-tight">{Education.Sname12Board}</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname12Per}</div>
                    </div>
                    
                    <div className="h-full w-full mt-2">
                    <div className="h-full w-full flex justify-between">
                    <h5 className="tracking-widest leading-tight mb-0">{Education.Sname10}</h5>
                    <div className="italic text-bold text-lg">{Education.Sname10Year}</div>
                    </div> 
                    <div className="leading-tight">{Education.Sname10Board}</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname10Per}</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto mb-4 flex flex-col">
                <div className=" text-xl font-extrabold pl-2 bg-gray-100">Projects</div>
                <div className="flex flex-col h-full w-10/12 my-0 mx-auto">
                    {
                        Projects.map(myprojects=>{
                            return <div className="h-auto w-full mt-2">
                                    <div className="tracking-widest leading-tight mb-0">&#x2713;{myprojects.Title}</div>
                                    <div className="leading-tight font-extralight italic ml-4">{myprojects.SubTitle}</div>
                                    <div className="leading-tight text-sm ml-4">{myprojects.Desc}</div>
                                    </div>
                        })
                    }
                </div>
            </div>
            <div className="w-full h-auto flex flex-col">
                <div className=" text-xl font-extrabold pl-2 bg-gray-100">Achievements</div>
                <ul className="flex flex-col h-full w-10/12 my-0 mx-auto pt-2">
                {
                    Achievements.map(myAch=>{
                        return <li>{myAch}</li>
                    })
                }
                </ul>
            </div>
    </div> 
}
export default CodeF;