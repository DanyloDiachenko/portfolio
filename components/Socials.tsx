import Link from "next/link";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone, FaTelegram } from "react-icons/fa6";

const Socials = (): JSX.Element => {
    const socials = [
        {
            link: "https://www.linkedin.com/in/danil-diachenko-90b242249/",
            icon: <RiLinkedinFill />,
        },
        {
            link: "https://github.com/DanyloDiachenko",
            icon: <RiGithubFill />,
        },
        {
            link: "mailto:danildiachenko23@gmail.com",
            icon: <MdMarkEmailUnread />,
        },
        {
            link: "tel:+380954517597",
            icon: <FaPhone />,
        },
        {
            link: "https://t.me/danil_diachenko",
            icon: <FaTelegram />,
        },
    ];

    return (
        <div className="flex items-center gap-x-5 text-lg">
            {socials.map((social, index) => (
                <Link
                    key={index}
                    href={social.link}
                    className="hover:text-accent transition-all duration-300"
                    target="_blank"
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;
