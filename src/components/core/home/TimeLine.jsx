import TimeLineStage from "./TimeLineStage";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../../../assets/Images/TimelineImage.png";

const timelineData = [
	{
		logo: logo1,
		tittle: "Leadership",
		subTitle: "Fully commited to success company",
	},
	{
		logo: logo2,
		tittle: "Responsibility",
		subTitle: "Students will always be our top priority",
	},
	{
		logo: logo3,
		tittle: "Flexibility",
		subTitle: "The ability to switch is an important skills",
	},
	{
		logo: logo4,
		tittle: "Solve the problem",
		subTitle: "Code your way to a solution",
	},
];

export default function TimeLine() {
	return (
		<section className="flex flex-col w-11/12 gap-20 py-10 lg:w-3/4 lg:flex-row lg:justify-between">
			<div className="lg:flex lg:items-center">
				<div className="flex flex-col h-full gap-10 lg:w-fit lg:justify-between">
					{timelineData.map((element, index) => (
						<TimeLineStage
							key={index}
							logo={element.logo}
							title={element.tittle}
							subTitle={element.subTitle}
						/>
					))}
				</div>
			</div>
			<div className="relative lg:w-1/2">
				<div className=" aspect-[12/16] lg:aspect-auto w-full overflow-hidden">
					<img
						src={timeLineImage}
						alt=""
						className="object-cover object-center w-full h-full lg:w-auto lg:h-auto "
					/>
				</div>
				<div className="absolute bottom-0 right-0 flex flex-col w-2/3 gap-16 p-8 m-4 lg:right-1/2 lg:translate-x-2/4 lg:translate-y-2/4 lg:w-3/4 lg:flex-row bg-caribbeangreen-600 lg:m-0">
					<div className="flex gap-4 font-bold uppercase ">
						<span className="text-[2rem] text-white">10</span>
						<span className="text-caribbeangreen-300">
							Year Experiences
						</span>
					</div>

					<div className="flex gap-4 font-bold uppercase">
						<span className="text-[2rem] text-white">250</span>
						<span className="text-caribbeangreen-300">
							Types of courses
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
