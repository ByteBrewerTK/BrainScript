import HighlitedText from "./HighlitedText";
import instructorImgMob from "../../../assets/Images/InstructorMobile.png";
import instructorImg from "../../../assets/Images/Instructor.png";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import useWindowWidth from "../../../hooks/useWindowWidth";

export default function BecomeInstructor() {
	const windowWidth = useWindowWidth();
	return (
		<section className="w-11/12 py-8 lg:w-3/4 lg:py-14">
			<div className=" lg:flex lg:flex-row-reverse lg:gap-20">
				<div className="lg:flex lg:flex-col lg:justify-center lg:gap-10">
					<div>
						<h2 className="w-[50%] text-3xl lg:text-4xl font-bold">
							Become an
							<HighlitedText text={"instructor"} />
						</h2>

						<p className="text-richblack-500 lg:w-[75%] lg:pt-6">
							Instructors from around the world teach millions of
							students on StudyNotion. We provide the tools and
							skills to teach what you love.
						</p>
					</div>
					{windowWidth > 768 ? (
						<div className="my-6 w-fit">
							<CTAButton active={true}>
								Start Teaching Toaday
								<FaArrowRight />
							</CTAButton>
						</div>
					) : null}
				</div>

				<div className="w-full aspect-[10/16] lg:aspect-square border lg:w-[60%] mt-8 lg:mt-0 lg:py-0">
					<div className="w-full h-full">
						<img
							src={
								windowWidth < 768
									? instructorImgMob
									: instructorImg
							}
							alt=""
							loading="lazy"
							className="object-cover object-center w-full h-full"
						/>
					</div>
				</div>
			</div>

			{windowWidth < 768 ? (
				<div className="my-6 w-fit">
					<CTAButton active={true}>
						Start Teaching Toaday
						<FaArrowRight />
					</CTAButton>
				</div>
			) : null}
		</section>
	);
}
