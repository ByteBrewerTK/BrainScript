import TimeLineStage from "./TimeLineStage";
import logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import timeLineImage from '../../../assets/Images/TimelineImage.png' 

const timelineData = [
    {
        logo : logo1,
        tittle:"Leadership",
        subTitle : "Fully commited to success company"
    },
    {
        logo : logo2,
        tittle:"Responsibility",
        subTitle : "Students will always be our top priority"
    },
    {
        logo : logo3,
        tittle:"Flexibility",
        subTitle : "The ability to switch is an important skills"
    },
    {
        logo : logo4,
        tittle:"Solve the problem",
        subTitle : "Code your way to a solution"
    }

]

export default function TimeLine() {
    return (
        <section className="w-11/12 py-10 flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                {
                    timelineData.map((element, index)=>(
                        <TimeLineStage
                        key={index}
                        logo={element.logo}
                        title={element.tittle}
                        subTitle={element.subTitle}
                        />
                    ))
                }
            </div>
            <div className="relative">
                
                <div className=" aspect-[12/16] w-full  overflow-hidden">
                    <img className="w-full h-full object-cover object-center border" src={timeLineImage} alt="" />
                </div>
                <div className="absolute bottom-0 right-0 w-[60%] flex flex-col gap-16 bg-caribbeangreen-600 p-8 m-4">
                    <div className="flex gap-4 font-bold uppercase ">
                        <span className="text-[2rem] text-white">10</span>
                        <span className="text-caribbeangreen-300">Year Experiences</span>
                    </div>

                    <div className="flex gap-4 font-bold uppercase">
                        <span className="text-[2rem] text-white">250</span>
                        <span className="text-caribbeangreen-300">Types of courses</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
