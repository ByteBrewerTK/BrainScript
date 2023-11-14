import { Link } from "react-router-dom";
import useCategoriesList from "../../../hooks/useCategoriesList";
import { Fragment } from "react";

export default function CatalogDropdown() {
	const subLinks = useCategoriesList();

	return (
		<Fragment>
			{subLinks.map((element) => (
				<Link
					to={`/${element.name.toLowerCase().replace(' ','-')}`}
					key={element._id}
					className="w-full p-2 text-xl rounded hover:bg-richblack-100"
				>
					{element.name}
				</Link>
			))}
		</Fragment>
	);
}
