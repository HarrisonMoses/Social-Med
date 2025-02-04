import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <div className="-z-10">
      <Nav />
      <div className="bg-[url('./soil.jpeg')] bg-cover h-screen rounded-b-sm over-flow"> 
        <div className="backdrop-blur-3xl bg-black bg-opacity-50 h-full flex flex-col justify-center items-center "> 
          <h1 className="text-5xl text-white font-serif text-center pt-24 pr-2">
            Welcome to BSE-GRP-28
          </h1>
          <h1 className="text-5xl text-white font-bold text-center pt-4 p-2">
            Soil Monitoring and Advisor
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
