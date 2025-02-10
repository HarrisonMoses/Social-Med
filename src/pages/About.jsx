import React from "react";
import Nav from "../components/Nav";

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
              The project is about monitoring soil health and advising farmers
              on how to improve their soil health. The project is aimed at
              helping farmers to improve their soil health and increase their
              crop yield.
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
