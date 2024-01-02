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
                        "SpaceCore - многостраничный проект-визитка, предоставляющий услуги VPS и выделенных серверов с высокой производительностью благодаря серверному рендерингу.",
                    background: "#3303A9",
                    link: "https://spacecore.pro/",
                },
                {
                    title: "Top Cources",
                    description:
                        "Многостраничный сайт с информацией о разнообразных образовательных курсах и обучающих платформах. Узнайте цены, средний доход и выбирайте курсы для своего обучения.",
                    background: "#800909",
                    link: "https://top-cources.vercel.app/",
                },
                {
                    title: "Pizza Shop & API",
                    description:
                        "Онлайн-магазин с разнообразной пиццей. Выбирайте мясные, вегетарианские, острые и другие виды. Удобная навигация с клавиатуры. Собственное API для редактирования пицц.",
                    background: "#107C10",
                    link: "https://pizza-shop-teal.vercel.app/",
                },
                {
                    title: "Seo Service",
                    description:
                        "Темплейт предназначен для мониторинга ваших сайтов. Получайте важную информацию о посещаемости и позициях ключевых слов. Узнайте видимость вашего сайта в поисковых системах.",
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
                        "Онлайн-магазин в стиле Starbucks для выбора и покупки различных кофейных напитков разных размеров. Получите информацию о вашем кофе. Присутствует тестовая оплата.",
                    background: "#F29559",
                    link: "https://starbucks-coffee-gules.vercel.app",
                },
                {
                    title: "Countries",
                    description:
                        "Получайте подробную информацию о каждой стране, включая данные о площади, языке, валюте и граничных странах. Легко фильтруйте страны по регионам и выполняйте поиск по названию.",
                    background: "#107C10",
                    link: "https://countries-nine-drab.vercel.app/",
                },
                {
                    title: "Clovin",
                    description:
                        "Этот сайт-визитка представляет компанию Clovin и ее разнообразный выбор химических продуктов для дома. Узнайте больше о компании, продукции и партнерах.",
                    background: "#800909",
                    link: "https://clovin.vercel.app/",
                },
                {
                    title: "Fast Forge VPN",
                    description:
                        "Сайт Fast Forge VPN - верстка для получения услуг VPN. Здесь вы найдете макеты сайта, но отсутствует функциональность. Дополнительные страницы доступны в репозитории на GitHub.",
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
