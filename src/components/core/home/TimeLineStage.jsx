/* eslint-disable react/prop-types */

export default function TimeLineStage({ logo, title, subTitle }) {
	return (
		<div className="flex object-cover object-center w-full gap-4">
			<div className="h-[60px] aspect-square flex items-center justify-center rounded-full bg-white">
				<img src={`${logo}`} alt="" loading="lazy" />
			</div>

			<div className="flex flex-col">
				<h3 className="font-bold text-[1.2rem]">{title}</h3>
				<p className="text-[.9rem]">{subTitle}</p>
			</div>
		</div>
	);
}
