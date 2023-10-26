/* eslint-disable react/prop-types */

export default function TimeLineStage({logo, title, subTitle}) {
    return (
        <div className="w-full flex gap-4 object-cover object-center">
            <div className="h-[60px] aspect-square flex items-center justify-center rounded-full bg-white">
                <img src={`${logo}`} alt="" />
            </div>
            {
                console.log(logo)
            }
            <div className="flex flex-col">
                <h3 className="font-bold text-[1.2rem]">{title}</h3>
                <p className="text-[.9rem]">{subTitle}</p>
            </div>
        </div>
    )
}
