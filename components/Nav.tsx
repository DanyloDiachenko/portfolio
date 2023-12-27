import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import {
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiViewColumns,
    HiEnvelope,
} from "react-icons/hi2";

interface INavData {
    name: string;
    path: string;
    icon: JSX.Element;
}

const Navigation = (): JSX.Element => {
    const navigationData: INavData[] = [
        { name: "home", path: "/", icon: <HiHome /> },
        { name: "about", path: "/about", icon: <HiUser /> },
        { name: "services", path: "/services", icon: <HiRectangleGroup /> },
        { name: "work", path: "/work", icon: <HiViewColumns /> },
        {
            name: "contact",
            path: "/contact",
            icon: <HiEnvelope />,
        },
    ];

    const router: NextRouter = useRouter();
    const pathname: NextRouter["pathname"] = router.pathname;

    return (
        <nav
            className="flex flex-col items-center xl:justify-center gap-y-4 fixed 
    h-max bottom-0 mt-auto xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md xl:h-screen"
        >
            <div
                className="flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 
      bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
            >
                {navigationData.map((navigationItem, navigationItemIndex) => (
                    <Link
                        href={navigationItem.path}
                        key={navigationItemIndex}
                        className={`relative flex items-center group hover:text-accent transition-all duration-300
          ${navigationItem.path === pathname ? "text-accent" : ""}`}
                    >
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                                <div className="text-[12px] leading-none font-semibold capitalize">
                                    {navigationItem.name}
                                </div>
                                <div
                                    className="border-solid border-l-white border-l-8 border-y-transparent
border-y-[6px] border-r-0 absolute -right-2"
                                ></div>
                            </div>
                        </div>
                        <div>{navigationItem.icon}</div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
