import React, { useEffect, useState } from 'react';
import { CgMail } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Donationcam = () => {

    const [donationData, setDonationData] = useState()

    useEffect(() => {
        fetch("/campaignData.json")
            .then((res) => res.json())
            .then((data) => setDonationData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!donationData || donationData.length === 0) {
        return <p>Loading data...</p>;
    }

    return (
        <div className='mt-[65px]'>
            <div className=" py-16 px-4 md:px-12">
                <div className="text-center mb-10">
                    <p className="text-orange-500 font-semibold">DONATION CAMPAIGN</p>
                    <h2 className="text-2xl md:text-4xl font-bold mt-2">
                        We Popular To Provide Of Experience.
                    </h2>
                </div>
                <div className="grid xl:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 p-4">
                    {donationData.map((campaign) => (
                        <div key={campaign.id} className=" shadow-xl">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full object-cover"
                            />
                            <div className='p-4'>
                                <h2 className="text-xl font-bold ">{campaign.title}</h2>
                                <p className="text-gray-700 leading-6">{campaign.description.length > 100
                                    ? campaign.description.slice(0, 70) + "..."
                                    : campaign.description}</p>

                                <p className="flex items-center gap-2 py-2"><FaLocationDot className='w-5 text-orange-500' /> {campaign.division}</p>
                                <Link to={`/donationcamdetails/${campaign.id}`}>
                                    <button className="relative bg-orange-600 hover:bg-black hover:rounded-3xl text-white px-4 py-2 rounded-md transition-all duration-300 group overflow-hidden">
                                        <span className="absolute inset-0 hover:bg-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View
                                        </span>
                                        <span className="group-hover:opacity-0 transition-opacity duration-300">
                                            Donate
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Donationcam;