import { useSelector } from "react-redux";

const CodeA = () => {
    let { personalDetails, Skills, Education, Projects, Achievements } = useSelector(state => state);

    return <div className="min-h-screen w-11/12 text-gray-500            font-semibold flex flex-col p-2  m-4 shadow-lg">
        <div className="w-full h-auto flex mb-2">
            <div className="h-24 w-24 bg-blue-500 text-4xl text-white flex justify-center items-center uppercase font-bold">{personalDetails.Fname.charAt(0)}{personalDetails.Lname.charAt(0)}</div>
            <div className="h-auto w-11/12">
                <h3 className="h-1/5 w-full text-center mb-2 text-3xl font-extrabold capitalize">{personalDetails.Fname} {personalDetails.Lname}</h3>
                <div className="flex flex-wrap justify-evenly pl-4 pr-4 pt-3 h-16 w-full  text-center">
                    <p className="ml-2 mb-0">{personalDetails.Email}</p>
                    <p className="ml-2 mb-0">{personalDetails.City}</p>
                    <p className="ml-2 mb-0">{personalDetails.State}</p>
                    <p className="ml-2 mb-0">{personalDetails.Phone}</p>
                    <p className="ml-2 mb-0">{personalDetails.Country}</p>
                    <p className="ml-2 mb-0">{personalDetails.Pincode}</p>
                </div>
            </div>
        </div>
        <div className="w-full max-h-72 mb-4 flex">
            <div className="h-full w-3/12  pt-2 pr-2 text-blue-500">Professional Summary</div>
            <div className="flex flex-col h-full w-9/12 mb-0 ">{personalDetails.ProfSum}</div>
        </div>
        <div className="w-full h-auto flex">
            <div className="h-full w-3/12 text-blue-500">Skills</div>
            <ul className="flex flex-wrap h-full w-9/12 pl-4">
                {
                    Skills.map(myskill => {
                        return <li className="h-auto w-1/2">{myskill}</li>
                    })
                }
            </ul>
        </div>
        <div className="w-full max-h-72 mb-4 flex">
            <div className="h-full w-3/12 pt-2 text-blue-500">Education</div>
            <div className="flex flex-col h-full w-9/12 mb-0">
                <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0 capitalize">{Education.CollegeName}</h5>
                    <div className="leading-tight uppercase">{Education.Degree}{`(` + Education.Year + `)`}</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Cgpa}</div>
                </div>
                <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0 capitalize">{Education.Sname12}</h5>
                    <div className="leading-tight uppercase">{Education.Sname12Board}({Education.Sname12Year})</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname12Per}</div>
                </div>
                <div className="h-full w-full mt-2">
                    <h5 className="tracking-widest leading-tight mb-0 capitalize">{Education.Sname10}</h5>
                    <div className="leading-tight uppercase">{Education.Sname10Board}({Education.Sname10Year})</div>
                    <div className="leading-tight text-sm">Percentage: {Education.Sname10Per}</div>
                </div>
            </div>
        </div>
        <div className="w-full h-auto mb-4 flex">
            <div className="h-full w-3/12 text-blue-500 ">Projects</div>
            <div className="flex flex-col h-full w-9/12 mb-0">
                {
                    Projects.map(myprojects => {
                        return <div className="h-auto w-full mt-2">
                            <div className="tracking-widest leading-tight mb-0">&#x2713;{myprojects.Title}</div>
                            <div className="leading-tight font-extralight italic ml-4">{myprojects.SubTitle}</div>
                            <div className="leading-tight text-sm ml-4">{myprojects.Desc}</div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className="w-full h-auto flex">
            <div className="h-full w-3/12 pt-2 text-blue-500">Achievements</div>
            <ul className="flex flex-col h-full w-9/12 mb-0 pt-2">
                {
                    Achievements.map(myAch => {
                        return <li>{myAch}</li>
                    })
                }
            </ul>
        </div>
    </div>
}
export default CodeA;
