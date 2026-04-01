import Profile from "../../assets/user.png";
import Package from "../../assets/package.png";
import Rocket from "../../assets/rocket.png"

const GetStart = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <section className="py-30 max-w-300 w-[95%] lg:w-[75%] mx-auto">
        <div className="top text-center space-y-5">
          <h1 className="text-5xl font-extrabold">Get Started in 3 Steps</h1>
          <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="bottom grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="card bg-white p-6 grid place-items-center">
            <div className="number w-10 h-10 rounded-full lenear-bg flex items-center justify-center text-white font-bold ml-auto">01</div>
            <div className="img">
              <img className="bg-fuchsia-100 mt-7 mb-4 w-20 h-20 p-4 overflow-visible rounded-full" src={Profile} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="text-center text-[#627382] mb-22">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="card bg-white p-6 grid place-items-center">
            <div className="number w-10 h-10 rounded-full lenear-bg flex items-center justify-center text-white font-bold ml-auto">02</div>
            <div className="img">
              <img className="bg-fuchsia-100 mt-7 mb-4 w-20 h-20 p-4 overflow-visible rounded-full" src={Package} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="text-center text-[#627382] mb-22">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="card bg-white p-6 grid place-items-center">
            <div className="number w-10 h-10 rounded-full lenear-bg flex items-center justify-center text-white font-bold ml-auto">03</div>
            <div className="img">
              <img className="bg-fuchsia-100 mt-7 mb-4 w-20 h-20 p-4 overflow-visible rounded-full" src={Rocket} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="text-center text-[#627382] mb-22">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStart;
