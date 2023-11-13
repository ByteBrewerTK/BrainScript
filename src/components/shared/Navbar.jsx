import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-dark-brainscript.png";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { useState } from "react";
import NavMenu from "../core/navbar/NavMenu";

export default function Navbar() {
	const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);
	const { totalItems } = useSelector((state) => state.cart);
	const { token } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.user);
	
	const avatar = "https://api.dicebear.com/7.x/lorelei/svg?flip=false";


	return (
		<header className="w-screen border-b h-fit border-richblack-500">
			<div className="flex items-center justify-between w-11/12 mx-auto lg:w-3/4 ">
				<Link to={"/"} className="w-[120px] lg:w-[180px]">
					<img src={logo} alt="" />
				</Link>

				<NavMenu setIsProfileMenuActive={setIsProfileMenuActive} />

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
								setIsProfileMenuActive((prev) => !prev);
							}}
							title="Profile"
							className="object-cover object-center w-8 border-2 rounded-full lg:w-12 aspect-square"
						>
							<img src={avatar} alt="avatar" />
						</button>

						<div
							className={`${
								!isProfileMenuActive ? "hidden" : ""
							} absolute p-2 translate-y-20 rounded bg-richblack-600`}
						>
							<Link
								to={"/dashboard"}
								className="flex items-center gap-2 p-1 rounded hover:bg-richblack-500"
							>
								<LuLayoutDashboard />
								Dashboard
							</Link>

							<Link
								to={"signout"}
								className="flex items-center gap-2 p-1 rounded hover:bg-richblack-500"
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
