/* eslint-disable react/prop-types */
import { HiMiniUsers } from "react-icons/hi2";
import { ImTree } from "react-icons/im";

export default function CatalogCard({
	heading,
	description,
	level,
	lessionNumber,
}) {
	return (
		<div
			className={`w-full h-[17rem] flex flex-col justify-between bg-richblack-800 group hover:bg-pure-greys-5 transition-all hover:shadow-[15px_15px_0px_0px_#FFE83D]`}
		>
			<div className="p-6">
				<h3
					className={`text-[1.5rem] font-bold text-richblack-50 group-hover:text-richblack-700`}
				>
					{heading}
				</h3>
				<p className={`text-[1rem] mt-2 text-pure-greys-500`}>
					{description}
				</p>
			</div>

			<div
				className={`flex w-full h-max justify-between px-6 py-3 border-t-2 border-dashed border-richblack-700 group-hover:border-richblack-25`}
			>
				<div
					className={`flex gap-2 items-center font-bold text-richblack-500 group-hover:text-blue-300`}
				>
					<HiMiniUsers />
					<span>{level}</span>
				</div>

				<div
					className={`flex gap-2 items-center font-bold text-richblack-500 group-hover:text-blue-300`}
				>
					<ImTree />
					<span>{lessionNumber} Lessons</span>
				</div>
			</div>
		</div>
	);
}
