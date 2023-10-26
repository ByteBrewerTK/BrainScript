import { Link } from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa'
import HighlitedText from "../components/core/Home/HighlitedText";
import CTAButton from "../components/core/Home/CTAButton";
import Banner from "../assets/videos/banner.mp4"
import CodeBlock from "../components/core/Home/CodeBlock";
import Catalogs from "../components/core/Home/Catalogs";
import TimeLineSec from "../components/core/Home/TimeLineSec";
import MoreCourseDetails from "../components/core/Home/MoreCourseDetails";
import BecomeInstructor from "../components/core/Home/BecomeInstructor";

export default function Home() {

    const codeblock = `<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<link rel="stylesheet "href="sty\nles.css">\n</head>\n<body>\nh1><a href="/">Header</a>\n/h1>\n<nav><a href="/one">One</a>\n<a href="/two">Two</a>\n<a href="/three">Three</a>\n/nav>`
        
    
    return (
        <main className="w-full flex flex-col items-center">

            <section className="w-11/12 py-4">

                <Link to={'/signup'} className="flex items-center border-b border-richblack-400 rounded-full py-2 px-4 bg-richblack-700 text-richblack-200 gap-2 w-max transition-all duration-200">

                    <span>Become an Instructor</span>
                    <FaArrowRight/>

                </Link>

                <h2 className="text-[1.75rem] font-bold mt-6">
                    Empower Your Future with 
                    <HighlitedText text = {'Coding Skills'}/>
                </h2>

                <p className="mt-2 text-richblack-400">
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
                </p>

                <div className="flex w-max mx-auto gap-2 m-8">
                    <CTAButton 
                    active={true}
                    linkto={'/login'}
                    >
                        Learn More
                    </CTAButton>

                    <CTAButton 
                    active={false}
                    linkto={'/signup'}
                    >
                        Book a demo
                    </CTAButton>
                </div>

                <div className="relative h-max mb-6">
                    <video 
                    className="border-richblack-100 rounded relative shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                    src={Banner}
                    muted
                    autoPlay
                    loop
                    />
                </div>
            </section>

            {/* Section Codeblock */}
            <CodeBlock 
                position={'flex-col md:flex-row'}
                    codeblock={codeblock}
                    ctaButton1={
                        {
                            children : "Try it Yourself" ,
                            active : true,
                            linkto : '/signup'
                        }
                    }
                    ctaButton2={
                        {
                            children : "Learn More" ,
                            active : false,
                            linkto : '/login'
                        }
                    }
                    heading={
                        <h2 className="text-[1.75rem] mt-6 mb-2 font-bold">
                            Unlock your <HighlitedText text={'coding potential'}/> with our online courses.
                        </h2>
                    }
                    subHeading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                />

            <CodeBlock 
                    position={'flex-col md:flex-row-reverse'}
                    codeblock={codeblock}
                    ctaButton1={
                        {
                            children : "Try it Yourself" ,
                            active : true,
                            linkto : '/signup'
                        }
                    }
                    ctaButton2={
                        {
                            children : "Learn More" ,
                            active : false,
                            linkto : '/login'
                        }
                    }
                    heading={
                        <h2 className="text-[1.75rem] mt-6 mb-2 font-bold w-1/2">
                            Start <HighlitedText text={'coding in seconds'}/> 
                        </h2>
                    }
                    subHeading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                />
                                    
            {/* Section Course details */}

            <Catalogs/>
            
            <TimeLineSec/>

            <MoreCourseDetails/>

            <BecomeInstructor/>
            
        </main>
    );
}
