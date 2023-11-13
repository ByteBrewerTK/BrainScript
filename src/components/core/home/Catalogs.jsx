import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CTAButton from "./CTAButton";
import CatalogCard from "./CatalogCard";
import HighlitedText from "./HighlitedText";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { useMemo } from "react";

export default function Catalogs() {
	const [activeButton, setActiveButton] = useState(HomePageExplore[0].tag);
	const [filterData, setFilterData] = useState([]);

	// const data = HomePageExplore.filter((element)=>(element.tag === activeButton));

	const reData = useMemo(() => {
		return HomePageExplore.filter(
			(element) => element.tag === activeButton
		).at(0).courses;
	}, [activeButton]);

	// data[0].courses.map((element)=>(
	//     console.log(element.heading)
	// ))

	// useEffect(() => {
	// 	const data = HomePageExplore.filter(
	// 		(element) => element.tag === activeButton
	// 	);

	// 	setFilterData(data);
	// 	// console.log("data : ", data);

	// }, [activeButton]);

	// console.log("filter data : ", filterData);

	return (
		<section className="relative flex flex-col items-center w-full h-auto">
			<div className="flex flex-col w-11/12 lg:w-3/4 md:text-center">
				<h2 className="mt-6 text-3xl font-bold lg:text-4xl ">
					Unlock the
					<HighlitedText text={"Power of Code"} />
				</h2>
				<p className="mt-2 text-richblack-400">
					Learn to Build Anything You Can Imagine
				</p>
			</div>

			<nav className="z-10 flex gap-8 p-1 mt-6 font-semibold transition-all duration-200 rounded-full bg-richblack-800 text-richblack-500">
				{HomePageExplore.map((element, index) => (
					<span
						key={index}
						onClick={() => {
							element.tag !== activeButton &&
								setActiveButton(element.tag);
						}}
						className={`py-2 px-4 select-none rounded-full cursor-pointer ease-in-out ${
							activeButton === element.tag
								? "bg-richblack-900"
								: ""
						}`}
					>
						{element.tag}
					</span>
				))}
			</nav>

			<section className="z-10 flex flex-col w-11/12 gap-12 mt-10 lg:w-3/4 md:flex-row">
				{reData.map((element, index) => (
					<CatalogCard
						key={index}
						heading={element.heading}
						lessionNumber={element.lessionNumber}
						level={element.level}
						description={element.description}
					/>
				))}
			</section>

			<div className="flex relative bg-richblack-5 w-full h-[18rem] -mt-36 lg:-mt-20 justify-center lg:items-center">
				<div className="absolute z-0 w-full h-full bg-home"></div>

				<div className="z-10 flex self-end justify-between w-11/12 mx-auto mb-10 lg:w-3/4 lg:justify-center lg:gap-4 lg:items-center h-fit lg:h-full lg:self-auto lg:m-0">
					<CTAButton active={true} linkto={"/signup"}>
						Explore Full Catalog
						<FaArrowRight />
					</CTAButton>
					<CTAButton active={false} linkto={"/login"}>
						Learn More
					</CTAButton>
				</div>
			</div>
		</section>
	);
}
