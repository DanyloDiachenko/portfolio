import Image from "next/image";

const Avatar = (): JSX.Element => {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            <Image
                src="/avatar.png"
                width={432}
                height={578}
                alt="avatar photo"
                className="translate-z-0 w-full h-full"
                quality={100}
                priority
            />
        </div>
    );
};

export default Avatar;
