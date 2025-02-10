import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import leaf from "../assets/leaf.jpg";
import team from "../Data/TeamsData";


function Team2() {
  const [Member, setMember] = useState(team[0]);

  const members = (name) => {
    team.map((member) => {
      if (member.name === name) {
        setMember(member);
    }
    return
    });
  };
  return (
    <div>
      <div className="sticky top-0 ">
        <Nav />
      </div>
      <div className="flex gap-2 mt-2 justify-center">
        <button
          onClick={() => {
            members("Mugoya Moses");
          }}
          className="bg-slate-500 text-white p-2 rounded-xl hover:bg-green-400 cursor-pointer"
        >
          MUGOYA MOSES
        </button>
        <button
          onClick={() => {
            members("Muhangi Elioda");
          }}
          className="bg-slate-500 text-white p-2 rounded-xl hover:bg-green-400 cursor-pointer"
        >
          MUHANGI ELIOD
        </button>
        <button
          onClick={() => {
            members("Heli Prajapati");
          }}
          className="bg-slate-500 text-white p-2 rounded-xl hover:bg-green-400 cursor-pointer "
        >
          HELI PRAJAPATI
        </button>
        <button
          onClick={() => {
            members("Mpagi Nelly");
          }}
          className="bg-slate-500 text-white p-2 rounded-xl hover:bg-green-400 cursor-pointer"
        >
          MPAGI NELLY
        </button>
      </div>

      <div className="mt-4 md:flex md:flex-row h-max justify-items-center">
        <div className="">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img className="w-40 h-40 " src={leaf} alt=" profile" />
          </div>
        </div>
        <div className="w-80 h-40 md:text-left  md:ml-16 mt-2 ">
          <p className="font-serif font-semibold text-stone-700">
            {Member.name}
          </p>
          <p className="font-mono font-semibold text-stone-700">{Member.Reg}</p>
          <p className="">{Member.description}</p>
        </div>
      </div>
      {Member.tasks.map((task, index) => (
        <div key={index} className="mt-4">
          <div className="p-2 mt-2">
            <h2 className="text-left font-bold text-xl">{task.title}</h2>
            <p className="text-justify">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team2;
