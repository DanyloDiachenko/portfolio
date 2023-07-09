import { Sora } from "@next/font/google";

import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {};

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const sora = Sora({
        subsets: ["latin"],
        variable: "--font-sora",
        weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    });

    return (
        <div
            className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </div>
    );
};

export default Layout;
