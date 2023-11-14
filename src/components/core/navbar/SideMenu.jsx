import { FaMinus, FaPlus } from "react-icons/fa6";
import { NavbarLinks } from "../../../data/navbar-links";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useCategoriesList from "../../../hooks/useCategoriesList";
import { useRef } from "react";
import { useEffect } from "react";

export default function SideMenu({ setIsNaveMenuActive, isNavMenuActive }) {
	const location = useLocation();
	const { pathname } = location;
	const [isCatalogExpand, setIsCatalogExpand] = useState(false);
	const subLinks = useCategoriesList();
	console.log("object");
	const menuRef = useRef();

	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contain(e.target)) {
				setIsCatalogExpand;
			}
		};
	});

	return (
		<aside
			className={`absolute flex gap-4 right-0 flex-col top-14 bg-richblack-600 p-4 rounded z-10`}
		>
			{NavbarLinks.map((element, index) =>
				element.title === "Catalog" ? (
					<div
						key={index}
						className="relative flex flex-col cursor-pointer"
					>
						<div className="flex items-center justify-between">
							<span>{element.title}</span>
							<button
								onClick={() =>
									setIsCatalogExpand(!isCatalogExpand)
								}
								className="p-1 bg-richblack-500"
							>
								{!isCatalogExpand ? <FaPlus /> : <FaMinus />}
							</button>
						</div>

						<div
							className={`flex flex-col  overflow-hidden transition-all ${
								isCatalogExpand ? "h-full" : "h-0"
							}`}
						>
							{subLinks.map((element) => (
								<Link
									to={`/${element.name
										.toLowerCase()
										.replace(" ", "-")}`}
									key={element._id}
									className="w-full rounded hover:bg-richblack-100"
								>
									{element.name}
								</Link>
							))}
						</div>
					</div>
				) : (
					<Link
						to={element.path}
						key={index}
						className={`hover:text-yellow-25 ${
							pathname === element.path ? " text-yellow-25" : ""
						}`}
					>
						{element.title}
					</Link>
				)
			)}
		</aside>
	);
}
