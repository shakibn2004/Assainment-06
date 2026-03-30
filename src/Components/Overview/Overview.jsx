import React from 'react';

const Overview = () => {
    return (
        <div className='lenear-bg'>
        <section className='grid md:grid-cols-1 gap-9 lg:gap-0 lg:grid-cols-3 mx-auto max-w-300 w-[95%] lg:w-[75%] py-15 place-items-center'>
            <div className="column-1 text-center">
                <h1 className='text-6xl font-extrabold text-white py-2'>50K+</h1>
                <p className='text-white text-2xl mt-4'>Active Users</p>
            </div>
            <div className="column-1 text-center">
                <h1 className='text-6xl font-extrabold text-white py-2'>200+</h1>
                <p className='text-white text-2xl mt-4'>Primium Tools</p>
            </div>
            <div className="column-1 text-center">
                <h1 className='text-6xl font-extrabold text-white py-2'>4.9</h1>
                <p className='text-white text-2xl mt-4'>Ratting</p>
            </div>
        </section>

        </div>
    );
};

export default Overview;