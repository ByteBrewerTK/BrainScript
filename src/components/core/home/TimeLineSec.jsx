import CTAButton from "./CTAButton";
import HighlitedText from "./HighlitedText";
import TimeLine from "./TimeLine";

export default function TimeLineSec() {
	return (
		<section className="flex flex-col items-center w-full py-12 text-black bg-richblack-5">
			<div className="w-11/12 gap-20 lg:w-3/4 lg:flex lg:justify-between">
				<div className="lg:w-1/2">
					<h2 className="text-3xl font-bold lg:text-4xl">
						Get the skills you need for a{" "}
						<HighlitedText text={"job that is in demand."} />
					</h2>
				</div>

				<div className="flex flex-col gap-8 lg:w-[40%]">
					<p className="mt-2 font-bold text-richblack-400">
						The modern BrainScript is the dictates its own terms.
						Today, to be a competitive specialist requires more than
						professional skills.
					</p>

					<div className="w-fit">
						<CTAButton active={true} linkto={"/signup"}>
							Learn More
						</CTAButton>
					</div>
				</div>
			</div>

			<TimeLine />
		</section>
	);
}
