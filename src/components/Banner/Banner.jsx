import React from "react";
import bannerImg from "../../assets/banner.png";
import { Play } from "lucide-react";
import icon from '../../assets/Group 5.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className=" rounded-lg  lg:flex-1" />
          <div className="lg:flex-1 lg:space-y-6">
            <div className=" flex gap-2  bg-purple-100 py-1 pl-2 rounded-full max-w-75 ">
                <img  className="w-6" src={icon} alt="" />
                <p >New: AI-Powered Tools Available</p>
            </div>
            <h1 className="text-6xl font-semibold">
              Supercharge Your <br /> <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digital Workflow </span>
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-2">
              <button className="btn  btn-primary rounded-4xl">
                Explore Products
              </button>
              <button className="btn btn-outline btn-primary rounded-4xl">
                <Play className="w-4 " /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
