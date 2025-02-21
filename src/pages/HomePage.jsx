import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <div className="">
      <div className=" sticky top-0 z-50">

      <Nav />
      </div>
      <div className="bg_image bg-cover h-screen rounded-b-sm over-flow relative"> 
        <div className="backdrop-blur-xl bg-black bg-opacity-10 h-full flex flex-col justify-center items-center "> 
          <h1 className="text-5xl text-white font-sans text-center pt-24 pr-2">
            Welcome to BSE25-GRP-28
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
