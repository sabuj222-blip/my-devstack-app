
import Banner from "../assets/banner-stack.png";

const HeroSection = () => {
    return (
        <section className="flex items-center min-h-screen gap-16 px-8 py-10 mx-auto max-w-6xl bg-white">
            <div className="flex flex-col items-start flex-1 gap-7 text-left">
                <h1 className="text-[60px] font-extrabold leading-[1.1] text-slate-950 whitespace-nowrap">
                  Build Your Ideal<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#AC00E4]">
                  Development Stack
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                    Explore frontend, backend, database, and tooling options, compare
                    them side by side, and put together the stack that fits your next
                    project.
                </p>

                <div className="flex items-center gap-4 mt-4">
                    <button className="px-8 py-3 font-semibold text-white transition-all rounded-full bg-gradient-to-r from-[#FF7A00] to-[#AC00E4] hover:shadow-lg hover:scale-105">
                    Explore Technologies
                    </button>
                    <button className="px-8 py-3 font-semibold transition-all border rounded-full text-slate-700 bg-slate-50 border-slate-200 hover:bg-slate-100 hover:shadow-md">
                    Learn More
                    </button>

                </div>
            </div>
            <div className="flex items-center justify-end flex-1">
                <img
                    src={Banner} alt="Development Stack Graphic"
                    className="object-contain w-full h-auto max-w-xl"/>
            </div>

        </section>
    );
};

export default HeroSection;