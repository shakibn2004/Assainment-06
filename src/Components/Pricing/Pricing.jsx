import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section className="py-30 max-w-300 w-[95%] lg:w-[75%] mx-auto">
      <div className="top text-center space-y-5">
        <h1 className="text-4xl font-extrabold">Simple, Transparent Pricing</h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="bottom grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="card p-6 bg-[#F9FAFC]">
            <h1 className="text-2xl font-bold">Starter</h1>
            <p className="text-[#627382] mt-1">Perfect for getting started</p>
            <h1 className="text-4xl my-7">$0<span className="text-[#627382] text-lg font-normal">/Month</span></h1>
            <ul className="grid gap-1 mb-6">
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Access to 10 free tools</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Basic templates</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Community support</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />1 project per month</li>
            </ul>
            <button className="btn lenear-bg rounded-full text-white mt-auto">Get Started Free</button>
        </div>
        <div className="card p-6 bg-[#F9FAFC] lenear-bg text-white -z-1">
            <h1 className="text-2xl font-bold">Pro</h1>
            <p className="text-[#627382] mt-1">Best for professionals</p>
            <h1 className="text-4xl my-7">$29<span className="text-[#627382] text-lg font-normal">/Month</span></h1>
            <ul className="grid gap-1">
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Access to all premium tools</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Unlimited templates</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Priority support</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Unlimited projects</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Cloud sync</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Advanced analytics</li>
            </ul>
            <button className="btn rounded-full bg-white mt-6"><span className="lenear-color">Get Started Free</span></button>
        </div>
        <div className="card p-6 bg-[#F9FAFC]">
            <h1 className="text-2xl font-bold">Enterprise</h1>
            <p className="text-[#627382] mt-1">For teams and businesses</p>
            <h1 className="text-4xl my-7">$99<span className="text-[#627382] text-lg font-normal">/Month</span></h1>
            <ul className="grid gap-1 mb-6">
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Everything in Pro</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Team collaboration</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Custom integrations</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Dedicated support</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />SLA guarantee</li>
                <li className="flex items-center gap-1"><Check size={20} color={"#30B868"} />Custom branding</li>
            </ul>
            <button className="btn lenear-bg rounded-full text-white mt-auto">Get Started Free</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
