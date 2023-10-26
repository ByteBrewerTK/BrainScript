import {HiMiniUsers} from 'react-icons/hi2'
import {ImTree} from 'react-icons/im'

// eslint-disable-next-line react/prop-types
export default function CatalogCard({active,heading, description, courseLevel, noOfLessons}) {
    return (
        <div className={`w-full h-[17rem] flex flex-col justify-between ${active ? " bg-pure-greys-5 shadow-[15px_15px_0px_0px_#FFE83D]" : "bg-richblack-800"}`}>

            <div className='p-6'>
                <h3 className={`text-[1.5rem] font-bold ${active ? "text-black" : "text-richblack-50"}`}>{heading}</h3>
                <p className={`text-[1rem] mt-2 ${active ? "text-pure-greys-400" : "text-richblack-500"}`}>{description}</p>
            </div>

            <div className={`flex w-full h-max justify-between px-6 py-3 border-t-2 border-dashed ${active ? "border-richblack-25" : "border-richblack-700" } `}>
                <div className={`flex gap-2 items-center font-bold ${active ? "text-blue-300" : "text-richblack-500"}`}>
                    <HiMiniUsers/>
                    <span>{courseLevel}</span>
                </div>

                <div className={`flex gap-2 items-center font-bold ${active ? "text-blue-300" : "text-richblack-500"}`}>
                    <ImTree/>
                    <span>{noOfLessons} Lessons</span>
                </div>
            </div>
        </div>
    )
}
