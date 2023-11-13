import { NavbarLinks } from '../../../data/navbar-links';
import { FaCaretDown } from 'react-icons/fa6';
import CatalogDropdown from './CatalogDropdown';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function NavMenu({ setIsProfileMenuActive }) {
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		setIsProfileMenuActive(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<nav className={`hidden lg:flex lg:gap-8`}>
			{NavbarLinks.map((element, index) =>
				element.title === "Catalog" ? (
					<div
						key={index}
						className="relative flex items-center gap-1 cursor-pointer group"
					>
						{element.title}
						<FaCaretDown className="transition-all duration-300 group-hover:rotate-180" />

						<div className="hidden absolute top-6 p-4 translate-x-1/2 rounded right-1/2 bg-richblack-25 text-richblack-800 text-bold w-[15rem] group-hover:flex group-hover:flex-col">
							<CatalogDropdown />
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
		</nav>
	);
}
