import { Link } from "react-router-dom";

export default function CTAButton({children,active,linkto}) {
    return (
        <Link to= {linkto} className={`${active ? "bg-yellow-25 text-black" : "bg-richblack-700 text-white"} flex items-center gap-2 rounded px-4 py-2 border-b-richblack-300`}>
            {children}
        </Link>
    )
}