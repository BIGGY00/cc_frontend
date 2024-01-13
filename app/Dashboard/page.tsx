/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/assets/photos/Logo.png";
import Plus from "@/assets/icons/Plus.svg";
import ArrowRise from "@/assets/icons/ArrowRise.svg";
import Image from "next/image";
import { getCurrentUser, logout } from "@/services/auth.service";
let ApexCharts: any;
if (typeof window !== "undefined") {
  ApexCharts = require("@/components/ApexChart").default;
}

const Dashboard = () => {
  const router = useRouter();


  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleTransfer = async () => {
    router.push("/Transfer");
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center py-5 px-6 md:px-12 lg:px-16 w-full">
        <div className="flex justify-center items-center cursor-pointer gap-2 md:gap-4 xl:gap-6">
          <div className="relative">
            <Image
              alt=""
              src={Logo}
              className="md:object-contain w-6 md:w-8 lg:w-10"
            />
          </div>
          <div className="flex md:text-lg font-semibold">CARBON COIN</div>
        </div>

        {/* Logout Button */}
        <div className="ml-auto">
          <button
            type="button"
            onClick={handleTransfer}
            className="text-white font-semibold mx-5 hover:bg-emerald-400 rounded"
          >
            Transfer
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="text-white font-semibold hover:bg-emerald-400 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-20 py-20 bg-white">
        {/* Choosing coin */}
        <div className="w-[274px] h-[65px] justify-start items-center gap-5 inline-flex">
          <div className="w-[50.84px] h-[50px] justify-center items-center gap-2.5 flex">
            <Image alt="" src={Logo} className="w-[50px] h-[50px]" />
          </div>
          <div className="w-[138.27px] text-black text-lg font-bold tracking-wide">
            CARBON COIN
          </div>
          <div className="p-2.5 bg-[#049a5b] rounded-[34px] justify-start items-center gap-2.5 flex hover:bg-black">
            <div className="w-[15px] h-[15px] relative">
              <button>
                <Image
                  alt=""
                  src={Plus}
                  className="w-[15px] h-[15px] left-[0px] top-[0px] absolute"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="py-20 flex justify-start items-center gap-5">
          <div className="w-[202px] h-[125px] p-6 bg-emerald-400 rounded-2xl flex-col gap-2">
            {/* Header */}
            <div className="text-black pb-5">Total coins</div>
            {/* content */}
            <div className="flex justify-between items-center">
              <div className="text-2xl">57</div>
              <div className="flex flex-row gap-2 items-center justify-center">
                +14%
                <Image alt="" src={ArrowRise} className="w-[15px] h-[15px]" />
              </div>
            </div>
          </div>
          {/* <div className="w-[202px] h-[84px] p-6 bg-emerald-400 rounded-2xl flex-col gap-2">
            test
          </div> */}
        </div>
        {/* Chart */}
        <ApexCharts />
      </div>
    </div>
  );
};

export default Dashboard;
