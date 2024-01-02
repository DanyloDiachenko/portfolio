import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
    slides: [
        {
            images: [
                {
                    title: "Spacecore",
                    description:
                        "SpaceCore - a multi-page showcase project providing high-performance VPS and dedicated servers through server-side rendering.",
                    background: "#3303A9",
                    link: "https://spacecore.pro/",
                },
                {
                    title: "Top Cources",
                    description:
                        "Multi-page website with information about various educational courses and learning platforms. Find prices, average income, and choose courses for your education.",
                    background: "#800909",
                    link: "https://top-cources.vercel.app/",
                },
                {
                    title: "Pizza Shop & API",
                    description:
                        "Online store with a variety of pizzas. Choose meat, vegetarian, spicy, and other types. Convenient keyboard navigation. Custom API for pizza editing.",
                    background: "#107C10",
                    link: "https://pizza-shop-teal.vercel.app/",
                },
                {
                    title: "Seo Service",
                    description:
                        "Template for monitoring your websites. Get important information about traffic and keyword rankings. Find out your website's visibility in search engines.",
                    background: "#F29559",
                    link: "https://seo-service-iota.vercel.app/",
                },
            ],
        },
        {
            images: [
                {
                    title: "Starbucks Coffee",
                    description:
                        "Online store in the style of Starbucks for selecting and purchasing various coffee drinks of different sizes. Get information about your coffee. Includes a test payment feature.",
                    background: "#F29559",
                    link: "https://starbucks-coffee-gules.vercel.app",
                },
                {
                    title: "Countries",
                    description:
                        "Get detailed information about each country, including data on area, language, currency, and neighboring countries. Easily filter countries by regions and search by name.",
                    background: "#107C10",
                    link: "https://countries-nine-drab.vercel.app/",
                },
                {
                    title: "Clovin",
                    description:
                        "This showcase website represents the company Clovin and its diverse range of household chemical products. Learn more about the company, its products, and partners.",
                    background: "#800909",
                    link: "https://clovin.vercel.app/",
                },
                {
                    title: "Fast Forge VPN",
                    description:
                        "Fast Forge VPN website layout for obtaining VPN services. The layout is available here, but the functionality is not included. Additional pages are available in the GitHub repository.",
                    background: "#3303A9",
                    link: "https://danylodiachenko.github.io/FastForgeVPN/main-page.html",
                },
            ],
        },
    ],
};

const WorkSlider = (): JSX.Element => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px] max-xl:h-auto"
        >
            {workSlides.slides.map((workDataItem, workDataItemIndex) => (
                <SwiperSlide key={workDataItemIndex}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer max-xl:grid-rows-1 max-xl:grid-cols-1">
                        {workDataItem.images.map((image, imageIndex) => (
                            <Link
                                href={image.link}
                                target="_blank"
                                className="relative rounded-lg overflow-hidden
               flex items-center justify-center group"
                                key={imageIndex}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <div className="flex items-center justify-center relative overflow-hidden group h-full">
                                    <div
                                        className="p-3"
                                        style={{
                                            background: image.background,
                                            height: "100%",
                                        }}
                                    >
                                        <h3>{image.title}</h3>
                                        <p
                                            className="mt-2"
                                            style={{ fontSize: 14 }}
                                        >
                                            {image.description}
                                        </p>
                                    </div>

                                    <div
                                        className="absolute flex justify-center inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
                     to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                                    >
                                        <div
                                            className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                    group-hover:xl:-translate-y-20 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                                <div className="delay-100">
                                                    LIVE
                                                </div>
                                                <div
                                                    className="translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150"
                                                >
                                                    PROJECT
                                                </div>
                                                <div
                                                    className="text-xl translate-y-[500%] group-hover:translate-y-0
                         transition-all duration-300 delay-200"
                                                >
                                                    <BsArrowRight />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default WorkSlider;
