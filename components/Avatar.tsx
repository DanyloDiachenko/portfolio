import Image from "next/image";

const Avatar = (): JSX.Element => {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            {/* <Image
                src="/avatar.png"
                width={737}
                height={678}
                alt="avatar photo"
                className="translate-z-0 w-full h-full"
            /> */}
            {/* <Image
          src="/avatar-my.png"
          width={406}
          height={614}
          alt="avatar photo"
          className="translate-z-0 w-406 h-614"
        /> */}
        </div>
    );
};

export default Avatar;
