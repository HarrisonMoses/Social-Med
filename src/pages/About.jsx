import React from "react";
import Nav from "../components/Nav";
import Data from "../Data/About";

const About = () => {

  return (
    <div>
      <div className=" sticky top-0 z-50">
        <Nav />
      </div>
      <div>
        <div className="p-2 justify-items-center md:flex md:flex-row">
          <div className="md:w-1/3 justify-items-center m-auto">
            <h1 className="font-bold gradient_bg  w-max">Project Background</h1>
          </div>
          <div className="md:w-2/3">
            <p className="text-justify p-2">
              Smallholder farmers in Uganda face significant challenges in
              optimizing crop yields due to limited access to real-time soil
              data. Without precise information on soil nutrient levels,
              moisture, and temperature, they often rely on guesswork for
              fertilizer application, irrigation, and crop selection. This leads
              to inefficient use of resources, poor agricultural productivity,
              and soil degradation. There is a critical need for a system that
              collects, analyzes, and interprets soil data to provide actionable
              insights and recommendations for sustainable and efficient farming
              practices."
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-dashed" />
      </div>
      <div>
        <div className="p-2  md:flex  md:flex-row">
          <div className="md:w-1/3 justify-items-center m-auto">
            <h1 className="font-bold gradient_bg  w-max">Main Objectives</h1>
          </div>
          <div className="md:w-2/3 ">
            <ul className="space-y-3 p-2  ">
              <li className="text-left">
                <span className="size-2 bg-blue-400 rounded-full inline-block mr-2"></span>
                <span className="font-mono font-bold">
                  Monitor Soil Conditions
                </span>{" "}
                <span className="text-blue-500 text-xl">&rarr;</span>
                <span className="ml-2">
                  Collect real-time data on moisture, temperature, and nutrient
                  levels (NPK) using sensor.
                </span>
              </li>
              <li className="text-left">
                <span className="size-2 bg-blue-400 rounded-full inline-block mr-2"></span>
                <span className="font-mono font-bold">
                  CLoud Based Analysis
                </span>{" "}
                <span className="text-blue-500 text-xl">&rarr;</span>
                <span className="ml-2">
                  Send captured data to the cloud for processing and storage.
                </span>
              </li>
              <li className="text-left">
                <span className="size-2 bg-blue-400 rounded-full inline-block mr-2"></span>
                <span className="font-mono font-bold">
                  Provide Insights and Recommendations
                </span>
                <span className="text-blue-500 text-xl">&rarr;</span>
                <span className="ml-2">
                  Analyze soil data to suggest suitable crops and farming
                  practices based on conditions.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t-2 border-dashed" />
      </div>
      <div>
        <div className="p-2  md:flex  md:flex-row">
          <div className="md:w-1/3 justify-items-center m-auto">
            <h1 className="font-bold gradient_bg  w-max">Core Purpose</h1>
          </div>
          <div className="md:w-2/3 ">
            <ul className="space-y-3 p-2 ustify-items-start ">
              <li className="text-left">
                <span className="size-2 bg-blue-400 rounded-full inline-block mr-2"></span>
                <span className="">Helping Farmers optimise crop growth.</span>{" "}
              </li>
              <li className="text-left">
                <span className="size-2 bg-blue-400 rounded-full inline-block mr-2"></span>
                <span className="">
                  Assist farmers in maintaing healthy soil.
                </span>{" "}
              </li>
              <li className="text-left">
                <span className="size-2 bg-blue-400 rounded-full inline-block mr-2"></span>
                <span className="">
                  Environment monitoring for research purposes.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t-2 border-dashed" />
      </div>
    </div>
  );
};

export default About;
