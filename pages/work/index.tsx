import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Work = (): JSX.Element => {
    return (
        <div className="h-full bg-primary/30 py-36 flex items-center">
            <Circles />
            
            <div className="container mx-auto max-xl:overflow-y-auto max-xl:h-full">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 xl:mt-12"
                        >
                            My work
                            <span className="text-accent"> .</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                        >
                            Welcome to my project portfolio, where each creation
                            reflects my passion for high-performance and
                            SEO-optimized web solutions. Here, you will find
                            examples of my work that combine technical
                            sophistication and a creative approach, aimed at
                            achieving optimal results in the digital space.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%]"
                    >
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Work;
