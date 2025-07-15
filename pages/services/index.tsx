import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Services = () => {
    return (
        <div className="h-full bg-primary/30 py-36 flex items-center max-xl:pt-60">
            <Circles />
            <div className="container mx-auto max-xl:overflow-y-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 xl:mt-8"
                        >
                            My services
                            <span className="text-accent"> .</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                        >
                            As a full-stack web developer, I offer comprehensive
                            solutions for web development, combining
                            cutting-edge frontend and backend technologies to
                            create dynamic, functional, and visually appealing
                            websites.
                            <br />
                            While creatign websites, I focus on the following
                            aspects: architecture, technical stack, performance, responsiveness, accessibility
                            and SEO optimization.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%]"
                    >
                        <ServiceSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Services;
