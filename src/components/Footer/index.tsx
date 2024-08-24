import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="relative top-8 flex h-40  ">
        <Image
          layout="fill"
          src="/images/bg6.png"
          alt="community"
          className="object-cover"
        />
      </div>
      <div className="footer bg-black bg-right pt-4 pb-20 px-4 lg:bg-top xl:bg-bottom xl:pt-4 xl:pb-10">
        <div className=" px-4 py-10 lg:py-40 grid grid-cols-3 gap-3 md:grid-cols-3 mx-auto xl:pt-10 xl:pb-10">
          <div className="text-white group text-sm ">
            <h2 className="font-black lg:text-xl mb-4">Contact Us</h2>
            <a href="mailto:#" className=" block text-xs lg:text-lg mb-4">
              Info@estaterunner.com
            </a>

            <a
              href="tel:+2349089300065"
              className="block text-xs lg:text-lg mb-4"
            >
              +2349089300065
            </a>
            <a
              href="tel:+2349089300065"
              className="block text-xs lg:text-lg mb-4"
            >
              +2349089300065
            </a>

            <div className="text-white group text-sm justify-self-end">
              <h2 className="font-black lg:text-xl mb-4">Socials</h2>

              <p className="flex gap-1 group ">
                <FacebookIcon className="text-white group-hover:cursor-pointer text-lg md:text-3xl" />
                <InstagramIcon className="text-white group-hover:cursor-pointer text-lg md:text-3xl" />
                <YouTubeIcon className="text-white group-hover:cursor-pointer text-lg md:text-3xl" />
                <LinkedInIcon className="text-white group-hover:cursor-pointer text-lg md:text-3xl" />
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white my-4"></div>
        <p className="text-white text-center text-sm md:text-md">
          &copy; 2024- Estate Runner All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
