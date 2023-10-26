/* eslint-disable react/prop-types */
import CTAButton from "./CTAButton";
import {TypeAnimation} from 'react-type-animation';

export default function CodeBlock({position,heading, subHeading,codeblock, ctaButton1, ctaButton2 }) {
    return (
        <section className={`flex ${position} w-11/12 gap-4`}>
            <div>

                {heading}

                <p className="text-richblack-400">{subHeading}</p>
                

                <div className="flex gap-4 w-full justify-between mx-auto mt-6">
                    <CTAButton linkto={ctaButton1.linkto} active={ctaButton1.active}>
                        <div className="px-4">
                            {ctaButton1.children}
                        </div>
                    </CTAButton>

                    <CTAButton linkto={ctaButton1.linkto} active={ctaButton2.active}>
                        <div className="px-4">
                            {ctaButton2.children}
                        </div>
                    </CTAButton>
                </div>
            </div>

            <div className={`flex flex-row gap-4 text-[.8rem] border border-richblack-600 p-2`}>

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
                    <p>12</p>
                    <p>13</p>
                </div>
                <code className="block whitespace-pre-line">
                    <TypeAnimation
                        sequence={[codeblock, 2000, ""]}
                        omitDeletionAnimation = {true}
                        speed={70}
                        repeat={Infinity}                        
                    />

                </code>

            </div>
            
        </section>
    )
}
