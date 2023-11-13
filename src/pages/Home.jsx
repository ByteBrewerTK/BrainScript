import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlitedText from "../components/core/home/HighlitedText";
import CTAButton from "../components/core/home/CTAButton";
import Banner from "../assets/videos/banner.mp4";
import CodeBlock from "../components/core/home/CodeBlock";
import Catalogs from "../components/core/home/Catalogs";
import TimeLineSec from "../components/core/home/TimeLineSec";
import MoreCourseDetails from "../components/core/home/MoreCourseDetails";
import BecomeInstructor from "../components/core/home/BecomeInstructor";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Home() {
	const windowWidth = useWindowWidth();

	const codeblock = `<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<link rel="stylesheet "href="sty${
		windowWidth <= 390 ? "\n" : ""
	}les.css">\n</head>\n<body>\nh1><a href="/">Header</a>${
		windowWidth <= 390 ? "\n" : ""
	}</h1>\n<nav><a href="/one">One</a>\n<a href="/two">Two</a>\n<a href="/three">Three</a>\n</nav>`;

	return (
		<main className="flex flex-col items-center w-full">
			<section className="flex flex-col w-11/12 py-4 lg:w-10/12 lg:items-center">
				<Link
					to={"/signup"}
					className="flex items-center gap-2 px-4 py-2 transition-all duration-200 border-b rounded-full border-richblack-400 bg-richblack-700 text-richblack-200 w-max"
				>
					<span>Become an Instructor</span>
					<FaArrowRight />
				</Link>

				<h2 className="mt-6 text-3xl font-bold  lg:text-4xl">
					Empower Your Future with
					<HighlitedText text={"Coding Skills"} />
				</h2>

				<p className="mt-2 text-richblack-400 lg:w-[67%] lg:text-center">
					With our online coding courses, you can learn at your own
					pace, from anywhere in the world, and get access to a wealth
					of resources, including hands-on projects, quizzes, and
					personalized feedback from instructors.
				</p>

				<div className="flex gap-2 m-8 mx-auto w-max">
					<CTAButton active={true} linkto={"/login"}>
						Learn More
					</CTAButton>

					<CTAButton active={false} linkto={"/signup"}>
						Book a demo
					</CTAButton>
				</div>

				<div className="relative mb-6 h-max lg:w-11/12">
					<video
						controlsList="nodownload"
						className="border-richblack-100 rounded relative shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  pointer-events-none"
						src={Banner}
						muted
						autoPlay
						loop
					/>
				</div>
			</section>

			{/* Section Codeblock */}
			<CodeBlock
				position={"flex-col md:flex-row"}
				codeblock={codeblock}
				ctaButton1={{
					children: "Try it Yourself",
					active: true,
					linkto: "/signup",
					border: false,
				}}
				ctaButton2={{
					children: "Learn More",
					active: false,
					linkto: "/login",
					border: true,
				}}
				heading={
					<h2 className="mb-2 text-3xl font-bold lg:text-4xl">
						Unlock your <HighlitedText text={"coding potential"} />{" "}
						with our online courses.
					</h2>
				}
				subHeading={
					"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
				}
			/>

			<CodeBlock
				position={"flex-col md:flex-row-reverse lg:flex-row-reverse"}
				codeblock={codeblock}
				ctaButton1={{
					children: "Try it Yourself",
					active: true,
					linkto: "/signup",
					border: false,
				}}
				ctaButton2={{
					children: "Learn More",
					active: false,
					linkto: "/login",
					border: true,
				}}
				heading={
					<h2 className="w-1/2 mb-2 text-3xl font-bold lg:text-4xl">
						Start <HighlitedText text={"coding in seconds"} />
					</h2>
				}
				subHeading={
					"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
				}
			/>

			{/* Section Course details */}

			<Catalogs />

			<TimeLineSec />

			<MoreCourseDetails />

			<BecomeInstructor />

			<div></div>
		</main>
	);
}
