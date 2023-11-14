import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-dark-brainscript.png";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { FaXmark} from "react-icons/fa6";
import { useState } from "react";
import NavMenu from "../core/navbar/NavMenu";
import { useRef } from "react";
import { useEffect } from "react";
import SideMenu from "../core/navbar/SideMenu";

export default function Navbar() {
	const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);
	const { totalItems } = useSelector((state) => state.cart);
	const { token } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.user);
	const [isNavMenuActive, setIsNaveMenuActive] = useState(false);
	const menuRef = useRef();

	const avatar = "https://api.dicebear.com/7.x/lorelei/svg?flip=false";
	// console.log(menuRef);
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				// console.log("Not ref btn", e.target);
				setIsProfileMenuActive(false);
				setIsNaveMenuActive(false);
				
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<header className="w-screen border-b h-fit border-richblack-500">
			<div className="relative flex items-center justify-between w-11/12 mx-auto lg:w-3/4 ">
				<Link to={"/"} className="w-[120px] lg:w-[180px] select-none">
					<img src={logo} alt="" />
				</Link>

				<NavMenu setIsProfileMenuActive={setIsProfileMenuActive} />

				<aside
					ref={menuRef}
					className={`${
						!isNavMenuActive ? "hidden" : ""
					} absolute flex gap-4 right-0 flex-col top-14 bg-richblack-600 p-4 rounded z-10`}
				>
					<SideMenu />
				</aside>

				{token === null && (
					<div className="flex gap-4">
						<Link
							to={"/auth/login"}
							className="px-4 py-2 border-2 rounded border-richblack-600 text-richblack-50"
						>
							Login
						</Link>
						<Link
							to={"/auth/signup"}
							className="px-4 py-2 border-2 rounded border-richblack-600 text-richblack-50"
						>
							Signup
						</Link>
					</div>
				)}

				{token !== null && (
					<div className="relative flex items-center gap-4">
						{!user && user?.account_type != "Instructor" && (
							<Link
								to={"/dashboard/cart"}
								title="Cart"
								className="relative text-2xl lg:text-3xl "
							>
								<AiOutlineShoppingCart />
								{totalItems > 0 && (
									<span className="min-w-[1.4rem] text align-middle text-center absolute text-xs -top-[.5rem] left-1/2 animate-bounce bg-yellow-25 rounded-full p-1 text-richblack-700 font-semibold">
										{totalItems}
									</span>
								)}
							</Link>
						)}
						<button
							onClick={() => {
								setIsProfileMenuActive(!isProfileMenuActive);
							}}
							title="Profile"
							ref={menuRef}
							className="object-cover object-center w-8 overflow-auto border-2 rounded-full lg:w-12 aspect-square"
						>
							<img src={avatar} alt="avatar" />
						</button>

						<button
							onClick={() =>
								setIsNaveMenuActive(!isNavMenuActive)
							}
							className="text-2xl lg:text-3xl"
						>
							{isNavMenuActive ? <FaXmark /> : <RiMenu3Line />}
						</button>

						<div
							className={`${
								!isProfileMenuActive ? "hidden" : ""
							} absolute p-2 lg:translate-y-20 right-0 lg:right-auto top-14 lg:top-auto rounded bg-richblack-600 z-10`}
						>
							<span className="absolute w-4 mx-auto rotate-45 right-2 lg:left-0 lg:right-0 -z-10 -top-2 aspect-square bg-richblack-600"></span>
							<Link
								to={"/dashboard"}
								className="z-10 flex items-center gap-2 p-1 rounded lg:hover:bg-richblack-500 active:bg-richblack-500"
							>
								<LuLayoutDashboard />
								Dashboard
							</Link>

							<Link
								to={"signout"}
								className="flex items-center gap-2 p-1 rounded lg:hover:bg-richblack-500 active:bg-richblack-500"
							>
								<IoMdLogOut />
								Logout
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
