import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CTAButton({
	children,
	active,
	linkto,
	border = false,
}) {
	return (
		<Link
			to={linkto}
			className={`${
				active
					? "bg-yellow-25 text-black"
					: "bg-richblack-800 text-white"
			} flex items-center gap-2 rounded py-3 px-2 lg:p-3 font-bold lg:hover:scale-95 ${
				border
					? "lg:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] lg:hover:shadow-none "
					: ""
			} transition-all duration-200`}
		>
			{children}
		</Link>
	);
}
