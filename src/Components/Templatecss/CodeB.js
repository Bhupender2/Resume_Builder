import { useSelector } from "react-redux";

const CodeB=()=>{
    let {personalDetails,Skills,Education,Projects,Achievements}=useSelector(state=>state);

    return <div className="min-h-screen w-11/12 text-gray-700 font-semibold flex flex-col p-2 m-4 shadow-lg ">
            <div className="w-full h-auto flex flex-col mb-2">
                    <h3 className="h-1/5 w-full text-center text-3xl font-extrabold mb-2 text-blue-400">{personalDetails.Fname} {personalDetails.Lname}</h3>
                    <div className="flex flex-wrap justify-evenly pl-4 pr-4 pt-3 h-16 w-full  text-center">
                        <p className="ml-2 mb-0">{personalDetails.Email}</p>
                        <p className="ml-2 mb-0">{personalDetails.City}</p>
                        <p className="ml-2 mb-0">{personalDetails.State}</p>
                        <p className="ml-2 mb-0">{personalDetails.Phone}</p>
                        <p className="ml-2 mb-0">{personalDetails.Country}</p>
                        <p className="ml-2 mb-0">{personalDetails.Pincode}</p>
                    </div>
            </div>
            <div className="w-full h-auto mb-4 flex flex-col">
                <div className="pr-2 text-center text-xl font-extrabold">Professional Summary</div>
                <hr className="w-4/5 bg-blue-500 mx-auto"/>
                <div className="text-center">{personalDetails.ProfSum}</div>
            </div>
            <div className="w-full h-auto flex flex-col">
                <div className="text-center text-xl font-extrabold">Skills</div>
                <hr className="w-4/5 bg-blue-500 mx-auto"/>
                <ul className="flex flex-wrap w-full m-auto h-full pl-24">
                {
                    Skills.map(myskill=>{
                        return <li className="h-auto w-1/3">{myskill}</li>
                    })
                }
                </ul>
            </div>
            <div className="w-full h-auto mb-4 flex flex-col">
                <div className="pt-2 text-center text-xl font-extrabold">Education</div>
                <hr className="w-4/5 bg-blue-500 mx-auto"/>
                <div className="flex flex-col h-full w-10/12 my-0 mx-auto">
                    <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0">{Education.CollegeName}</h5>
                    <div className="leading-tight">{Education.Degree}{`(`+Education.Year+`)`}</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Cgpa}</div>
                    </div>
                    <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0">{Education.Sname12}</h5>
                    <div className="leading-tight">{Education.Sname12Board}({Education.Sname12Year})</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname12Per}</div>
                    </div>
                    <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0">{Education.Sname10}</h5>
                    <div className="leading-tight">{Education.Sname10Board}({Education.Sname10Year})</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname10Per}</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto mb-4 flex flex-col">
                <div className="text-center text-xl font-extrabold">Projects</div>
                <hr className="w-4/5 bg-blue-500 mx-auto"/>
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
                <div className="text-center text-xl font-extrabold">Achievements</div>
                <hr className="w-4/5 bg-blue-500 mx-auto"/>
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
export default CodeB;