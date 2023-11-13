import {
	FaGoogle,
	FaHeart,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-dark-brainscript.png";
import { FooterLink1, FooterLink2 } from "../../data/footer-links";

export default function Footer() {
	const footerLinks = (footerData, title) => {
		const links = footerData.find(
			(element) => element.title === title
		).links;
		return links;
	};

	const socialLinks = {
		title: "Social",
		links: [
			{
				title: "LinkedIn",
				link: "/company/about",
				icon: <FaLinkedin />,
			},
			{
				title: "Gmail",
				link: "/company/careers",
				icon: <FaGoogle />,
			},
			{
				title: "Twitter",
				link: "/company/affilates",
				icon: <FaTwitter />,
			},
			{
				title: "Youtube",
				link: "/company/affilates",
				icon: <FaYoutube />,
			},
		],
	};

	return (
		<footer className="w-screen border min-h-[20vh] bg-richblack-700">
			<div className="grid w-10/12 grid-cols-1 grid-rows-2 mx-auto mt-14 gap-x-20">
				<section className="flex flex-wrap justify-between">
					<div>
						<Link to={"/"}>
							<img
								src={logo}
								alt="brand-logo"
								className="w-[11.25rem]"
							/>
						</Link>
						<div>
							<h3>Company</h3>
							<div className="flex flex-col">
								{footerLinks(FooterLink1, "Company").map(
									(element, index) => (
										<Link
											to={element.link}
											key={index}
											className="text-richblack-200"
										>
											{element.title}
										</Link>
									)
								)}
							</div>
						</div>
						<div className="flex gap-4">
							{socialLinks.links.map((element, index) => (
								<Link
									to={element.link}
									key={index}
									className="text-richblack-200"
								>
									{element.icon}
								</Link>
							))}
						</div>
					</div>
					<div>
						<div className="flex flex-col">
							<h3>Resources</h3>
							{footerLinks(FooterLink1, "Resources").map(
								(element, index) => (
									<Link
										to={element.link}
										key={index}
										className="text-richblack-200"
									>
										{element.title}
									</Link>
								)
							)}
						</div>
						<div className="flex flex-col">
							<h3>Support</h3>
							{footerLinks(FooterLink1, "Support").map(
								(element, index) => (
									<Link
										to={element.link}
										key={index}
										className="text-richblack-200"
									>
										{element.title}ccccc,
									</Link>
								)
							)}
						</div>
					</div>
					<div>
						<div className="flex flex-col">
							<h3>Plans</h3>
							{footerLinks(FooterLink1, "Plans").map(
								(element, index) => (
									<Link
										to={element.link}
										key={index}
										className="text-richblack-200"
									>
										{element.title}
									</Link>
								)
							)}
						</div>
						<div className="flex flex-col">
							<h3>Community</h3>
							{footerLinks(FooterLink1, "Community").map(
								(element, index) => (
									<Link
										to={element.link}
										key={index}
										className="text-richblack-200"
									>
										{element.title}
									</Link>
								)
							)}
						</div>
					</div>
				</section>
				<section className="flex flex-wrap justify-between">
					<div className="flex flex-col">
						<h3>Subjects</h3>
						{footerLinks(FooterLink2, "Subjects").map(
							(element, index) => (
								<Link
									to={element.link}
									key={index}
									className="text-richblack-200"
								>
									{element.title}
								</Link>
							)
						)}
					</div>
					<div className="flex flex-col">
						<h3>Languages</h3>
						{footerLinks(FooterLink2, "Languages").map(
							(element, index) => (
								<Link
									to={element.link}
									key={index}
									className="text-richblack-200"
								>
									{element.title}
								</Link>
							)
						)}
					</div>
					<div className="flex flex-col">
						<h3>Career building</h3>
						{footerLinks(FooterLink2, "Career building").map(
							(element, index) => (
								<Link
									to={element.link}
									key={index}
									className="text-richblack-200"
								>
									{element.title}
								</Link>
							)
						)}
					</div>
				</section>
				<div className="flex justify-between w-full h-8 col-span-2">
					<div>
						<Link to="#" className="text-richblack-200">
							Privacy Policy
						</Link>
						<Link to="#" className="text-richblack-200">
							Cookie Policy
						</Link>
						<Link to="#" className="text-richblack-200">
							Terms
						</Link>
					</div>
					<div className="flex items-center gap-2 text-richblack-200">
						Made with <FaHeart className="text-yellow-5" />{" "}
						ByteBrewer &copy; 2023 BrainScript
					</div>
				</div>
			</div>
		</footer>
	);
}
