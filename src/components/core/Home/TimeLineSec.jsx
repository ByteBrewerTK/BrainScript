import CTAButton from "./CTAButton";
import HighlitedText from "./HighlitedText";
import TimeLine from "./TimeLine";

export default function TimeLineSec() {
    return (
        <section className="flex flex-col items-center  bg-richblack-5 text-black py-12">
            <div className="w-11/12">
                <div>
                    <h2 className="text-[1.75rem] font-bold">Get the skills you need for a <HighlitedText text={'job that is in demand.'}/></h2>
                </div>
                
                <div className="flex flex-col gap-8">
                    <p className="mt-2 text-richblack-400 font-bold">The modern BrainScript is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>

                    <div className="w-fit">
                        <CTAButton
                        active={true}
                        linkto={'/signup'}
                        >
                            Learn More
                        </CTAButton>
                    </div>
                </div>
            </div>

            <TimeLine/>

        </section>
    )
}
