import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

const metadata = {
    title: "danil diachenko.",
    description: "Danil Diachenko - My Portfolio - Web full-stack developer",
    icons: "/logo.svg",
    openGraph: {
        title: "Danil Diachenko - Web full-stack developer",
        type: "website",
        url: "https://d-diachenko-portfolio.vercel.app/",
        images: "/logo.svg",
        siteName: "Portfolio",
    },
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
