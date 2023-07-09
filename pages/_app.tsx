import { useRouter, NextRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

const MyApp = ({ Component, pageProps }): JSX.Element => {
    const router: NextRouter = useRouter();

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <motion.div key={router.route} className="h-full">
                    <Transition />
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
};

export default MyApp;
