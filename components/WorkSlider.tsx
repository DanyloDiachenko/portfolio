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
                    title: "Codefinity",
                    description:
                        "Education platform with a focus on programming languages and algorithms. I work here as a frontend engineer.",
                    background: "/codefinity.png",
                    link: "https://codefinity.com",
                },
                {
                    title: "Shoes",
                    description:
                        "Huge self-created full-stack project. Authentification, authorization, cart, orders, products, categories, reviews, and more.",
                    background: "/shoes.png",
                    link: "https://github.com/DanyloDiachenko/shoes",
                },
                {
                    title: "Spacecore",
                    description:
                        "SpaceCore - a multi-page showcase project providing high-performance VPS and dedicated servers through server-side rendering.",
                    background: "/spacecore.png",
                    link: "https://spacecore.pro/",
                },
                {
                    title: "Subjektiv Admin",
                    description:
                        "Large administration panel for Subjektiv service. Manage users, orders, artworks, notifications, messages, app settings and more.",
                    background: "/subjektiv-admin.png",
                    link: "https://github.com/DanyloDiachenko/subjektiv",
                },
            ],
        },
        {
            images: [
                {
                    title: "HackaChat",
                    description:
                        "Chat with AI. Optimize your time with AI bot, that creates boards, columns, tasks in Trello; integration with Slack. Hackaton project created with HackaWeb team.",
                    background: "/hackachat.png",
                    link: "https://github.com/DanyloDiachenko/hackaweb-main",
                },
                {
                    title: "Notes",
                    description:
                        "Create, edit, delete, search, archive notes. Add tags, dedlines and more. Authentificate yourself to save your notes.",
                    background: "/notes.png",
                    link: "https://github.com/DanyloDiachenko/notes",
                },
                {
                    title: "Pizza Shop & API",
                    description:
                        "Online store with a variety of pizzas. Choose meat, vegetarian, spicy, and other types. Convenient keyboard navigation. Custom API for pizza editing.",
                    background: "/pizza-shop.png",
                    link: "https://pizza-shop-teal.vercel.app/",
                },
                {
                    title: "Starbucks Coffee",
                    description:
                        "Online store in the style of Starbucks for selecting and purchasing various coffee drinks of different sizes. Get information about your coffee. Includes a test payment feature.",
                    background: "/starbucks-coffee.png",
                    link: "https://starbucks-coffee-gules.vercel.app",
                },
            ],
        },
        {
            images: [
                {
                    title: "QuizApp",
                    description:
                        "Make own quests, share with friends, and play. Chat with friends while testing. Create feedbacks, see leaderboards.",
                    background: "/quiz-app.png",
                    link: "https://github.com/DanyloDiachenko/hackaweb-test",
                },
                {
                    title: "Clovin",
                    description:
                        "This showcase website represents the company Clovin and its diverse range of household chemical products. Learn more about the company, its products, and partners.",
                    background: "/clovin.png",
                    link: "https://clovin.vercel.app/",
                },
                {
                    title: "Top Cources",
                    description:
                        "Multi-page website with information about various educational courses and learning platforms. Find prices, average income, and choose courses for your education.",
                    background: "/top-cources.png",
                    link: "https://top-cources.vercel.app/",
                },
                {
                    title: "Seo Service",
                    description:
                        "Template for monitoring your websites. Get important information about traffic and keyword rankings. Find out your website's visibility in search engines.",
                    background: "/seo-service.png",
                    link: "https://seo-service-iota.vercel.app/",
                },
            ],
        },
        {
            images: [
                {
                    title: "Fast Forge VPN",
                    description:
                        "Fast Forge VPN website layout for obtaining VPN services. The layout is available here, but the functionality is not included. Additional pages are available in the GitHub repository.",
                    background: "/fast-forge.png",
                    link: "https://danylodiachenko.github.io/FastForgeVPN/main-page.html",
                },
                {
                    title: "Akcel",
                    description:
                        "Online template for crowdfunding projects. Create your project, get funding, and share your ideas with the world.",
                    background: "/akcel.png",
                    link: "https://akcel.vercel.app/",
                },
                {
                    title: "Countries",
                    description:
                        "Service to learn geography. Find desired country by searching or selecting from the list. Get information about the country, its population, and more.",
                    background: "/countries.png",
                    link: "https://countries-nine-drab.vercel.app/",
                },
                {
                    title: "Devfinder",
                    description:
                        "Find any developer from GitHub. Search by username, get information about the developer, and view their repositories.",
                    background: "/devfinder.png",
                    link: "https://github-users-tau.vercel.app/",
                },
            ],
        },
        {
            images: [
                {
                    title: "INSPE",
                    description:
                        "Landing page for INSPE company. Get information about the company, its services, and partners.",
                    background: "/inspe.png",
                    link: "https://danylodiachenko.github.io/INSPE/",
                },
                {
                    title: "PUPS Docs",
                    description:
                        "Documentation for PUPS - Portable Universal Power Station. Self-created power stations, that was represented on JASU 2024 competition (first place ^_^).",
                    background: "/pups-docs.png",
                    link: "https://pups-docs.vercel.app/ua",
                },
                {
                    title: "Recipies",
                    description:
                        "Find any recipe you want. Search by name, get information about the recipe, and view its ingredients.",
                    background: "/reciepes.png",
                    link: "https://recepies-sigma.vercel.app/",
                },
                {
                    title: "Transactions",
                    description:
                        "Simple transaction history. Add, remove, and view transactions. Self-created API with PostgreSQL and NestJs.",
                    background: "/transactions.png",
                    link: "https://github.com/DanyloDiachenko/transactions",
                },
            ],
        },
        {
            images: [
                {
                    title: "Epicstars",
                    description:
                        "HTML landing page to introduce Epicstars company. Language switcher integrated.",
                    background: "/epicstars.png",
                    link: "https://epicstars-iota.vercel.app/#",
                },
                {
                    title: "Neuroflex",
                    description:
                        "HTML landing page for Neuroflex company. Futuristic design and slider.",
                    background: "/neuroflex.png",
                    link: "https://neuroflex.vercel.app/",
                },
                {
                    title: "React Movies",
                    description: "Simple movie search app.",
                    background: "/react-movies.png",
                    link: "https://react-movies-theta-olive.vercel.app/",
                },
                {
                    title: "ToDo App",
                    description: "Simple ToDo app. Delete and add tasks.",
                    background: "/todo-app.png",
                    link: "https://to-do-app-chi-five.vercel.app/",
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
                    <div className="h-full grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
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
                                <div className="w-full flex items-center justify-center relative overflow-hidden group h-full">
                                    <div
                                        className="p-3 h-full w-full bg-cover bg-center bg-no-repeat aspect-square"
                                        style={{
                                            backgroundImage: `url(${image.background})`,
                                        }}
                                    >
                                        <h3 className="bg-black bg-opacity-50 fit inline p-1 rounded-md ml-auto text-sm sm:text-base">
                                            {image.title}
                                        </h3>
                                        {/* <p
                                            className="mt-2"
                                            style={{ fontSize: 14 }}
                                        >
                                            {image.description}
                                        </p> */}
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
