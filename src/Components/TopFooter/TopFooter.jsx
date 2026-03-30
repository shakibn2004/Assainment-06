import React from 'react';

const TopFooter = () => {
    return (
        <div className='lenear-bg'>
            <section className='max-w-300 w-[95%] lg:w-[75%] mx-auto text-center grid place-items-center py-30 text-white space-y-2'>
                <h1 className='text-4xl font-extrabold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                <div className="btns flex gap-2 mt-10">
                    <button className='bg-white btn rounded-full'><span className='lenear-color'>Explore Products</span></button>
                    <button className='btn rounded-full bg-transparent text-white'>View Pricing</button>
                </div>
                <h3>14-day free trial • No credit card required • Cancel anytime</h3>
            </section>
        </div>
    );
};

export default TopFooter;