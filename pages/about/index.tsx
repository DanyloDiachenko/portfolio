import { useState } from "react";
import CountUp from "react-countup";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNpm,
    FaNodeJs,
    FaJira,
    FaTrello,
} from "react-icons/fa";
import {
    SiSass,
    SiPython,
    SiAdobephotoshop,
    SiTypescript,
    SiNestjs,
    SiMongodb,
    SiPostgresql,
    SiSwagger,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

interface IAboutDataItem {
    title: string;
    info: {
        title: string;
        icons?: JSX.Element[];
        stage?: string;
    }[];
}

const aboutData: IAboutDataItem[] = [
    {
        title: "skills",
        info: [
            {
                title: "Programming Languages",
                icons: [<FaJs />, <SiTypescript />, <SiPython />],
            },
            {
                title: "Web Frontend Development",
                icons: [
                    <FaHtml5 />,
                    <FaCss3 />,
                    <FaReact />,
                    <TbBrandNextjs />,
                    <SiSass />,
                    <FaNpm />,
                ],
            },
            {
                title: "Web Backend Development",
                icons: [
                    <FaNodeJs />,
                    <SiNestjs />,
                    <SiMongodb />,
                    <SiPostgresql />,
                    <SiSwagger />,
                    <FaNpm />,
                ],
            },
            {
                title: "UI/UX Design",
                icons: [<FaFigma />, <SiAdobephotoshop />],
            },
            {
                title: "Team Management Tools",
                icons: [<FaJira />, <FaTrello />],
            },
        ],
    },
    {
        title: "experience",
        info: [
            {
                title: "Learning Frontend Development - self",
                stage: "Jun 2022 - Aug 2022",
            },
            {
                title: "Frontend Developer - Digital Art Agency",
                stage: "Aug 2022 - now",
            },
            {
                title: "Backend Developer - no commerce",
                stage: "Sep 2023 - now",
            },
            /* {
                title: "Backend Developer Intern - Digital Art Agency",
                stage: "January 2024 - now",
            }, */
        ],
    },
    {
        title: "cources",
        info: [
            {
                title: "Web Development - ABC University, LA, CA",
                stage: "2011",
            },
            {
                title: "Computer Science Diploma - AV Technical Institute",
                stage: "2009",
            },
            {
                title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
                stage: "2006",
            },
        ],
    },
];

const About = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0);

    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-scroll">
            <Circles />
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar />
            </motion.div>
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2"
                    >
                        Captivating <span className="text-accent">stories</span>{" "}
                        birth magnificent designs.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                    >
                        Two years ago, I joined a startup company and embarked
                        on my career in web-development. During this time, I've
                        been involved in both individual projects and
                        collaborative team efforts, developing digital products
                        for business and consumer use, taking on significant
                        endeavors.
                    </motion.p>
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                    >
                        <div className="flex flex-1 xl:gap-x-6">
                            <div
                                className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0"
                            >
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp
                                        start={0.0}
                                        end={1.5}
                                        duration={5}
                                        separator=" "
                                        decimals={1}
                                        decimal="."
                                    />{" "}
                                    +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Years of experience
                                </div>
                            </div>
                            <div
                                className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0"
                            >
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={30} duration={5} />{" "}
                                    +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Satisfied clients
                                </div>
                            </div>
                            <div
                                className="relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0"
                            >
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={20} duration={5} />{" "}
                                    +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Finished projects
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
                >
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((aboutItem, aboutItemIndex) => (
                            <div
                                key={aboutItemIndex}
                                className={`${
                                    index === aboutItemIndex
                                        ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                                        : ""
                                } cursor-pointer capitalize xl:text-lg relative 
                after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                onClick={() => setIndex(aboutItemIndex)}
                            >
                                {aboutItem.title}
                            </div>
                        ))}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                        {aboutData[index].info.map(
                            (aboutDataInfo, aboutDataInfoIndex) => (
                                <div
                                    key={aboutDataInfoIndex}
                                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                                >
                                    <div className="font-light mb-2 md:mb-0">
                                        {aboutDataInfo.title}
                                    </div>
                                    <div className="hidden md:flex">-</div>
                                    <div>
                                        {aboutDataInfo.stage
                                            ? aboutDataInfo.stage
                                            : ""}
                                    </div>
                                    <div className="flex gap-x-4">
                                        {aboutDataInfo.icons
                                            ? aboutDataInfo.icons.map(
                                                  (icon, iconIndex) => (
                                                      <div
                                                          key={iconIndex}
                                                          className="text-2xl text-white"
                                                      >
                                                          {icon}
                                                      </div>
                                                  )
                                              )
                                            : ""}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
