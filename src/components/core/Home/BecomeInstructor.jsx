import HighlitedText from "./HighlitedText";
import instructorImg from "../../../assets/Images/InstructorMobile.png"
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

export default function BecomeInstructor() {
    return (
        <section className="w-11/12  py-8">
            <div >
                <h2 className="w-[50%] text-[1.75rem] font-bold">Become an<HighlitedText text={"instructor"}/></h2>

                <p className="text-richblack-500">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>

                <div className="w-full aspect-[10/16] border my-8">
                    <img
                    src={instructorImg} alt=""
                    className="h-full w-full object-cover object-center obje"/>
                </div>
            </div>

            <div className="w-fit my-6">
                <CTAButton
                active={true}
                >
                    Start Teaching Toaday 
                    <FaArrowRight/>
                </CTAButton>
            </div>
        </section>
    );
}
