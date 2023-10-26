import CTAButton from "./CTAButton";
import CatalogCard from "./CatalogCard";
import HighlitedText from "./HighlitedText";
import {FaArrowRight} from 'react-icons/fa'

export default function Catalogs() {
    return (
        <section className="mt-12 flex flex-col items-center relative mb-[6rem]">
            <div className="w-11/12 flex flex-col">
                <h2 className="text-[1.75rem] font-bold mt-6  ">Unlock the<HighlitedText text={'Power of Code'}/></h2>
                <p className="mt-2 text-richblack-400">Learn to Build Anything You Can Imagine</p>
            </div>

            <section className="w-11/12 flex flex-col gap-12 mt-10 z-10">
                <CatalogCard
                active={true}
                heading={"Learn HTML"}
                noOfLessons={"6"}
                courseLevel={"Beginner"}
                description={
                    "This course covers the basics concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
                }
                />
                <CatalogCard
                active={false}
                heading={"Learn HTML"}
                noOfLessons={"6"}
                courseLevel={"Beginner"}
                description={
                    "This course covers the basics concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
                }
                />
                <CatalogCard
                active={false}
                heading={"Learn HTML"}
                noOfLessons={"6"}
                courseLevel={"Beginner"}
                description={
                    "This course covers the basics concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
                }
                />
            </section>

            <div className="flex absolute bg-richblack-5 w-full h-[15rem] bottom-[-10%] justify-center pb-10">
                <div className="bg-home absolute w-full h-full z-0"></div>

                <div className="w-11/12 flex justify-between mx-auto h-full items-end z-10">
                    <CTAButton
                    active={true}
                    linkto={'/signup'}
                    >
                        Explore Full Catalog
                        <FaArrowRight/>
                    </CTAButton>
                    <CTAButton 
                    active={false}
                    linkto={'/login'}
                    >
                        Learn More
                    </CTAButton>
                </div>
            </div>

        </section>
    )
}
