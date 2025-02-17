import React, { useEffect, useState } from 'react';
import { CgMail } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';

const DonationCamDetails = () => {
    const { id } = useParams();
    const [campaigns, setCampaigns] = useState(null);

    useEffect(() => {
        fetch("/campaignData.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedCampaign = data.find((item) => item.id === parseInt(id)); 
                setCampaigns(selectedCampaign);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!campaigns) {
        return <p>Loading details...</p>;
    }

    return (
        <div>
            <div className='mt-[65px]'>
                <div className="py-16 px-4 md:px-12">
                    <div className="text-center mb-10">
                        <p className="text-orange-500 font-semibold uppercase">Donation Campaign</p>
                        <h2 className="text-2xl md:text-4xl font-bold mt-2">
                            We Are Popular for Providing Experience.
                        </h2>
                    </div>
                    <div className="max-w-[900px] mx-auto">
                        <div className="shadow-xl  overflow-hidden bg-white">
                            <img
                                src={campaigns.image}
                                alt={campaigns.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-6">
                                <h2 className="md:text-3xl text-xl font-bold text-gray-800">{campaigns.title}</h2>
                                <p className="md:text-lg text-sm text-gray-700 leading-6 mt-2">{campaigns.description}</p>
                                <p className="text-lg text-orange-500 font-semibold mt-2">Status: {campaigns.status}</p>
                                <div className="flex items-center text-lg gap-2 text-gray-700 mt-2">
                                    <FaLocationDot className="w-5 text-orange-500" />
                                    <span>{campaigns.division}</span>
                                </div>
                                <div className="flex items-center md:text-lg gap-2 text-gray-700 mt-2">
                                    <CgMail className="w-5  text-orange-500" />
                                    <span>{campaigns.contactinfo}</span>
                                </div>
                                <Link to="/" className="block mt-4">
                                    <button className="w-full  bg-orange-600 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                                        Donate
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DonationCamDetails;