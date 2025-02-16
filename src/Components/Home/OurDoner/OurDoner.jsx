import React from 'react';

const OurDoner = () => {
    return (
        <div>
            <div className="mb-9">
                <h1 className="text-3xl font-bold text-center mb-6">Our Donators</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-24 lg:gap-4 md:gap-8 gap-3 lg:mx-2 mx-24">
                    <div className="border  rounded shadow-md max-w-64  ">
                        <img src="/img/doner1.jpeg" alt="" className="w-64  " />
                        <h2 className="text-lg font-semibold px-4 mt-2 text-left">Lester Lane</h2>
                        <p className="text-left pl-4 pb-3">Support Military Families</p>
                        <p className="text-center text-orange-700 flex justify-between px-4"><span>Donated</span>$12300</p>
                    </div>
                    <div className="border rounded shadow-md max-w-64  ">
                        <img src="/img/doner2.jpg" alt="" className="w-64" />
                        <h2 className="text-lg font-semibold px-4 mt-2 text-left ">Adas Cooper</h2>
                        <p className="text-left pl-4 pb-3">Family Support Program</p>
                        <p className="text-center text-orange-700 flex justify-between px-4"><span>Donated</span>$8400</p>
                    </div>
                    <div className="border rounded shadow-md max-w-64  ">
                        <img src="/img/doner3.jpeg" alt="Joey Hogan" className="w-64" />
                        <h2 className="text-lg font-semibold px-4 mt-2 text-left">Joey Hogan</h2>
                        <p className="ttext-left pl-4 pb-3">Sponsor an Orphan Child</p>

                        <p className="text-center text-orange-700 flex justify-between px-4"><span>Donated</span>$5400</p>
                    </div>
                    <div className="border rounded shadow-md max-w-64  ">
                        <img src="/img/doner4.jpeg" alt="Leticia Rivera" className="w-64" />
                        <h2 className="text-lg font-semibold px-4 mt-2 text-left">Alex Poler</h2>
                        <p className="text-left pl-4 pb-3">Child Protection Program</p>
                        <p className="text-center text-orange-700 flex justify-between px-4"><span>Donated</span>$5400</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurDoner;