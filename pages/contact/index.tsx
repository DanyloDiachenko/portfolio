"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";

const Contact = (): JSX.Element => {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const setFieldsHandler = (
        field: "name" | "email" | "subject" | "message",
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFields({
            ...fields,
            [field]: e.target.value,
        });
    };

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="h-full bg-primary/30">
            <div
                className="container mx-auto py-32 text-center xl:text-left
        flex items-center justify-center h-full
      "
            >
                <div className="flex flex-col w-full max-w-[700px]">
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 text-center mb-12"
                    >
                        Let's <span className="text-accent">connect.</span>
                    </motion.h2>
                    <motion.form
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex-1 flex flex-col gap-6 w-full mx-auto"
                        onSubmit={(e) => submit(e)}
                    >
                        <div className="flex gap-x-6 w-full">
                            <input
                                type="text"
                                placeholder="name"
                                className="input"
                                onChange={(e) => setFieldsHandler("name", e)}
                            />
                            <input
                                type="email"
                                placeholder="email"
                                className="input"
                                onChange={(e) => setFieldsHandler("email", e)}
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="subject"
                            className="input"
                            onChange={(e) => setFieldsHandler("subject", e)}
                        />
                        <textarea
                            placeholder="message"
                            className="textarea"
                            onChange={(e) => setFieldsHandler("message", e)}
                        ></textarea>
                        <button
                            className="btn rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
              hover:border-accent group
              
            "
                            type="submit"
                        >
                            <span
                                className="group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500
              "
                            >
                                Let's talk
                            </span>
                            <BsArrowRight
                                className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 
                absolute text-[22px]
              "
                            />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
