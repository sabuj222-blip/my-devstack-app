import Banner from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between 
       gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 py-10 md:py-16 mx-auto max-w-6xl bg-white">
        <div className="flex flex-col items-center md:items-start flex-1 gap-4 md:gap-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight tracking-tight text-slate-950">
              Build Your Ideal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#AC00E4] inline-block">
                 Development Stack
                </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white 
                  transition-all rounded-full bg-gradient-to-r from-[#FF7A00] to-[#AC00E4] hover:shadow-lg hover:scale-[1.02]">
                  Explore Technologies
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all 
                  border rounded-full text-slate-700 bg-slate-50 border-slate-200 hover:bg-slate-100 hover:shadow-md">
                  Learn More
                </button>
            </div>
        </div>

        <div className="flex items-center justify-center md:justify-end flex-1 w-full mt-4 md:mt-0">
            <img src={Banner} alt="Development Stack Graphic"
              className="object-contain w-full h-auto max-w-[280px] sm:max-w-md md:max-w-lg"/>
        </div>
    </section>
  );
};

export default HeroSection;