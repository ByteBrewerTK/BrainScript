import HighlitedText from './HighlitedText'
import card1 from "../../../assets/Images/Know_your_progress.svg"
import card2 from "../../../assets/Images/Compare_with_others.svg"
import card3 from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from './CTAButton'

export default function MoreCourseDetails() {
    return (
        <section className='bg-richblack-5 text-black flex flex-col items-center py-6'>
            <div className='flex flex-col w-11/12'>
                <h2 className='text-[1.75rem] font-bold mt-6 mb-4'>Your swiss knife for<HighlitedText text={"learning any language"}/></h2>
                <p>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
            </div>

            <div className='w-11/12 my-16 relative'>
                <img
                src={card1}
                alt=""
                className=' object-contain'/>

                <img src={card2}
                alt=""
                className=' object-contain scale-110 -mt-8'/>
                
                <img src={card3}
                alt=""
                className=' object-contain scale-110 -mt-10'/>
            </div>

            <div>
                <CTAButton
                active={true}
                linkto={"/signup"}
                >
                    Learn More
                </CTAButton>
            </div>
        </section>
    )
}
