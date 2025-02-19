import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";

const Contact = () => {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [fieldErrors, setFieldErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
    });

    const setFieldsHandler = (
        field: "name" | "email" | "subject" | "message",
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = e.target;
        setFields({
            ...fields,
            [field]: value,
        });

        setFieldErrors({
            ...fieldErrors,
            [field]: value.trim() === "",
        });
    };

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let hasEmptyField = false;

        (Object.keys(fields) as Array<keyof typeof fields>).forEach((field) => {
            if (fields[field].trim() === "") {
                setFieldErrors({
                    ...fieldErrors,
                    [field]: true,
                });
                hasEmptyField = true;
            }
        });

        if (hasEmptyField) {
            alert("Please, fill all fields!");

            return;
        }

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fields),
            });

            if (response.ok) {
                alert("Message was sent successfuly");
            } else {
                alert("Sending message happened error");
            }
        } catch (error) {
            alert("Sending message happened error");
        }
    };

    return (
        <div className="h-full bg-primary/30">
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px] max-xl:overflow-y-auto max-xl:h-full">
                    <motion.h1
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 text-center mb-12"
                    >
                        Let's <span className="text-accent">connect.</span>
                    </motion.h1>
                    <motion.form
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex-1 flex flex-col gap-6 w-full mx-auto"
                        onSubmit={(e) => submit(e)}
                    >
                        <div className="flex gap-x-6 w-full max-xl:block">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className={`input ${
                                    fieldErrors.name ? "border-red-500" : ""
                                }`}
                                onChange={(e) => setFieldsHandler("name", e)}
                                style={{ textTransform: "none" }}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className={`input max-xl:mt-6 ${
                                    fieldErrors.email ? "border-red-500" : ""
                                }`}
                                onChange={(e) => setFieldsHandler("email", e)}
                                style={{ textTransform: "none" }}
                            />
                        </div>
                        <input
                            placeholder="Subject"
                            className={`input ${
                                fieldErrors.subject ? "border-red-500" : ""
                            }`}
                            onChange={(e) => setFieldsHandler("subject", e)}
                            style={{ textTransform: "none" }}
                        />
                        <textarea
                            placeholder="Your Message"
                            className={`textarea ${
                                fieldErrors.message ? "border-red-500" : ""
                            }`}
                            onChange={(e) => setFieldsHandler("message", e)}
                            style={{ textTransform: "none" }}
                        />
                        <button
                            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                            type="submit"
                        >
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Let's talk
                            </span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
