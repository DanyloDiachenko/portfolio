import Link from "next/link";
import { RxDesktop, RxArrowTopRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
    {
        icon: <RxDesktop />,
        title: "Development",
        description:
            "Explore my GitHub repositories to witness a portfolio of diverse projects, showcasing my expertise in turning complex requirements into reality. If you're seeking a partnership that values creativity, technical skill, and a commitment to excellence, let's connect and discuss how we can collaborate on your next web development venture",
        link: "https://github.com/DanyloDiachenko",
    },
];

const ServiceSlider = (): JSX.Element => {
    return (
        <div className="h-[240px] sm:h-[500px]">
            {serviceData.map((serviceDataItem, serviceDataItemIndex) => (
                <Link
                    href={serviceDataItem.link}
                    target="_blank"
                    key={serviceDataItemIndex}
                >
                    <div
                        className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg 
          px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
           hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
                    >
                        <div className="text-4xl text-accent mb-4">
                            {serviceDataItem.icon}
                        </div>
                        <div className="mb-8">
                            <div className="mb-2 text-lg">
                                {serviceDataItem.title}
                            </div>
                            <p className="leading-normal">
                                {serviceDataItem.description}
                            </p>
                        </div>
                        <div className="text-3xl">
                            <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ServiceSlider;
