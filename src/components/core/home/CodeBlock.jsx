/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "./CTAButton";
import { TypeAnimation } from "react-type-animation";

export default function CodeBlock({
	position,
	heading,
	subHeading,
	codeblock,
	ctaButton1,
	ctaButton2,
}) {
	return (
		<section
			className={`flex ${position} lg:flex-row w-11/12 lg:w-3/4 gap-4 lg:justify-between m-6 lg:py-8`}
		>
			<div className="lg:w-[40%] flex flex-col justify-between ">
				<div>
					{heading}

					<p className="text-richblack-400">{subHeading}</p>
				</div>

				<div className="flex justify-between w-full mx-auto mt-6 gap-7 md:justify-normal ">
					<CTAButton
						linkto={ctaButton1.linkto}
						active={ctaButton1.active}
					>
						<div className="flex items-center gap-2 px-4">
							{ctaButton1.children}
							<FaArrowRight />
						</div>
					</CTAButton>

					<CTAButton
						linkto={ctaButton1.linkto}
						active={ctaButton2.active}
						border={ctaButton2.border}
					>
						<div className="px-4">{ctaButton2.children}</div>
					</CTAButton>
				</div>
			</div>

			<div className="font-semibold pointer-events-none select-none lg:px-8">
				<div
					className={`flex flex-row gap-4 text-[.8rem] lg:text-base border border-richblack-600 lg:w-[29.5rem] p-4 leading-6`}
				>
					<div>
						<p>1</p>
						<p>2</p>
						<p>3</p>
						<p>4</p>
						<p>5</p>
						<p>6</p>
						<p>7</p>
						<p>8</p>
						<p>9</p>
						<p>10</p>
						<p>11</p>
						<p className="lg:hidden">12</p>
						<p className="lg:hidden">13</p>
					</div>

					<code className="block whitespace-pre-line">
						<TypeAnimation
							sequence={[codeblock, 2000, ""]}
							omitDeletionAnimation={true}
							speed={70}
							repeat={Infinity}
						/>
					</code>
				</div>
			</div>
		</section>
	);
}
