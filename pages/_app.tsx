import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

const metadata = {
    title: "danil diachenko.",
    description: "Danil Diachenko - My Portfolio - Web Full Stack Enginner",
    icons: "/logo.svg",
    keywords: [
        "Danil Diachenko",
        "Diachenko Danil",
        "Danylo Diachenko",
        "Diachenko Danylo",
        "Danil Diachenko Portfolio",
        "Danil Diachenko Linkedin",
        "Danil Diachenko GitHub",
        "Danil Diachenko Resume",
        "Danil Diachenko CV",
        "Danil Diachenko Web Full Stack Enginner",
        "Danil Diachenko Frontend Developer",
        "Danil Diachenko Backend Developer",
        "Danil Diachenko Full Stack Developer",
        "Danil Diachenko Developer",
        "Danil Diachenko Software Engineer",
        "Portfolio",
        "Web Full Stack Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Next.js",
        "Web Development",
        "Software Engineer",
        "Web Design",
        "UI/UX Design",
        "Responsive Design",
        "HTML",
        "CSS",
        "Web Applications",
    ],
    openGraph: {
        title: "Danil Diachenko - Web Full Stack Enginner",
        type: "website",
        url: "https://d-diachenko-portfolio.vercel.app/",
        images: "/logo.svg",
        siteName: "Portfolio",
    },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router: NextRouter = useRouter();

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={metadata.icons} />
                <meta property="og:title" content={metadata.openGraph.title} />
                <meta property="og:type" content={metadata.openGraph.type} />
                <meta property="og:url" content={metadata.openGraph.url} />
                <meta property="og:image" content={metadata.openGraph.images} />
                <meta
                    property="og:site_name"
                    content={metadata.openGraph.siteName}
                />
            </Head>
            <Layout>
                <AnimatePresence mode="wait">
                    <motion.div key={router.route} className="h-full">
                        <Transition />
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    );
};

export default MyApp;
