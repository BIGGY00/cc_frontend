import Image from "next/image";
import React from "react";
import Logo from "@/assets/photos/Logo.png";
import Visa from "@/assets/photos/VisaLogo.png";
import Mastercard from "@/assets/photos/MastercardLogo.png";
import Bitcoin from "@/assets/photos/BitcoinLogo.png";
import Facebook from "@/assets/photos/FacebookLogo.png";
import Instagram from "@/assets/photos/InstagramLogo.png";
import Youtube from "@/assets/photos/YoutubeLogo.png";
import XTwitter from "@/assets/photos/XLogo.png";
import Linkedin from "@/assets/photos/LinkedinLogo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex flex-row px-36 py-20 gap-16 text-xl h-[800px]">
      <div className="flex flex-row w-2/3 gap-44 ">
        {/* CARBON COIN */}
        <Link
          className="flex flex-row  justify-center w-fit h-fit gap-4 font-semibold cursor-pointer"
          href={"/"}
        >
          <div className="relative">
            <Image src={Logo} alt="" className="w-16 object-contain" />
          </div>
          <div className="uppercase pt-4">Carbon Coin</div>
        </Link>
        {/* QUICK LINK */}
        <div className="flex flex-col gap-12 h-fit pt-4">
          <div className="font-semibold">Quick Link</div>
          <div className="flex flex-col gap-6 text-base font-light">
            <div className="hover:text-black hover:underline cursor-pointer">
              Home
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Products
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              About
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Features
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Contact
            </div>
          </div>
        </div>
        {/* RESOURCES */}
        <div className="flex flex-col gap-12 h-fit pt-4">
          <div className="font-semibold">Resources</div>
          <div className="flex flex-col gap-6 text-base font-light">
            <div className="hover:text-black hover:underline cursor-pointer">
              Download Whitepaper
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Smart Token
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Blockchain Explorer
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Crypto API
            </div>
            <div className="hover:text-black hover:underline cursor-pointer">
              Interest
            </div>
          </div>
        </div>
      </div>

      {/* WE ACCEPT */}
      <div className="flex flex-col w-1/3 justify-between">
        <div className="flex flex-col text-4xl gap-10 font-semibold">
          <div className="tracking-wide">
            We accept following payment systems
          </div>
          <div className="flex flex-row gap-6 text-base items-center">
            <div className="relative items-center justify-center flex bg-[#0F9E62] rounded-xl w-32 h-20 cursor-pointer">
              <Image src={Visa} alt="" className="object-contain w-16" />
            </div>
            <div className="relative items-center justify-center flex bg-[#0F9E62] rounded-xl w-32 h-20 cursor-pointer">
              <Image src={Mastercard} alt="" className="object-contain w-16" />
            </div>
            <div className="relative items-center justify-center flex bg-[#0F9E62] rounded-xl w-32 h-20 cursor-pointer">
              <Image src={Bitcoin} alt="" className="object-contain w-10" />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end gap-8">
          <div className="relative cursor-pointer">
            <Image src={Facebook} alt="" className="object-contain w-8 h-8" />
          </div>
          <div className="relative cursor-pointer">
            <Image src={Instagram} alt="" className="object-contain w-8 h-8" />
          </div>
          <div className="relative cursor-pointer">
            <Image src={Youtube} alt="" className="object-contain w-8 h-8" />
          </div>
          <div className="relative cursor-pointer">
            <Image src={XTwitter} alt="" className="object-contain w-8 h-8" />
          </div>
          <div className="relative cursor-pointer">
            <Image src={Linkedin} alt="" className="object-contain w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
