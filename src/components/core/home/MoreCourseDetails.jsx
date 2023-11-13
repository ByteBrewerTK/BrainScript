import HighlitedText from "./HighlitedText";
import card1 from "../../../assets/Images/Know_your_progress.svg";
import card2 from "../../../assets/Images/Compare_with_others.svg";
import card3 from "../../../assets/Images/Plan_your_lessons.svg";
import CTAButton from "./CTAButton";

export default function MoreCourseDetails() {
	return (
		<section className="flex flex-col items-center w-full py-6 text-black bg-richblack-5">
			<div className="flex flex-col w-11/12 lg:w-10/12 lg:text-center lg:items-center">
				<h2 className="mt-6 mb-4 text-3xl font-bold lg:text-4xl">
					Your swiss knife for
					<HighlitedText text={"learning any language"} />
				</h2>
				<p className=" lg:w-2/3">
					Using spin making learning multiple languages easy. with 20+
					languages realistic voice-over, progress tracking, custom
					schedule and more.
				</p>
			</div>

			<div className="relative w-11/12 my-16 lg:w-10/12 lg:my-0 lg:flex lg:justify-center">
				<img
					src={card1}
					alt=""
					loading="lazy"
					className="object-contain  md:-mr-24"
				/>

				<img
					src={card2}
					alt=""
					loading="lazy"
					className="object-contain -mt-8 scale-110  lg:mt-0 lg:scale-100"
				/>

				<img
					src={card3}
					alt=""
					loading="lazy"
					className="object-contain -mt-10 scale-110  lg:mt-0 lg:scale-100 md:-ml-36"
				/>
			</div>

			<div>
				<CTAButton active={true} linkto={"/signup"}>
					Learn More
				</CTAButton>
			</div>
		</section>
	);
}
