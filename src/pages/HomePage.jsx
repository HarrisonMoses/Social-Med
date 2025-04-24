import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />

      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-14%20143635-foHhzSZNAPC5oWDgYOlUAleBBOt2Ie.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to Smart Cloud-Based Soil Advisor
          </h1>
          <p className="text-xl text-center max-w-2xl">
            Empowering farmers with intelligent soil analysis and
            recommendations for optimal crop yields
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
