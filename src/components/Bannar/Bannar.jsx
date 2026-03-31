import React from "react";
import bannerImg from "../../assets/banner.png";
import { Play } from "lucide-react";

const Bannar = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className=" rounded-lg  lg:flex-1" />
          <div className="lg:flex-1">
            <p className="bg-purple-100 p-2 rounded-full">New: AI-Powered Tools Available</p>
            <h1 className="text-6xl font-semibold">
              Supercharge Your <br /> Digital Workflow
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

export default Bannar;
