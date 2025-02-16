import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';


const Footer = () => {
    return (
        <div className='bg-[#F2F2DC] '>
            <footer className=" text-gray-700 py-10 ">
                <div className="max-w-[1320px] xl:mx-auto mx-2 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">


                    <div>
                        <h2 className=" xl:text-3xl lg:text-2xl md:text-lg text-2xl font-bold flex justify-center md:justify-start items-center gap-2">
                            <span className="text-orange-600">DONATION</span> WORLD
                        </h2>
                        <p className="mt-3 text-sm">
                            Together, we can make the world a better place, one act of kindness at a time. Thank you for your support!
                        </p>
                        <div className="flex justify-center md:justify-start gap-3 mt-4">
                            <span className="text-orange-500 text-xl cursor-pointer">&#9672;</span>
                            <span className="text-orange-500 text-xl cursor-pointer">&#96799;</span>
                            <span className="text-orange-500 text-xl cursor-pointer">&#9672;</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className=" text-lg font-semibold">Services</h3>
                            <ul className="mt-3 space-y-2">
                                <li className=""> Incident Responder</li>
                                <li className=""> Secure Managed Fund</li>
                                <li className=""> Clean Water All</li>
                                <li className=""> Give Education</li>
                                <li className=""> Food to Individuals</li>
                            </ul>
                        </div>
                    </div>


                    {/* Contact Us */}
                    <div>
                        <h3 className=" text-lg font-semibold">Contact Now</h3>
                        <ul className="mt-3 space-y-2">
                            <li className='flex items-center gap-1'><div><FaLocationDot /></div> Nator City, Rajshahi, BD</li>
                            <li className='flex items-center gap-1'><div><IoMdCall /></div> 880123456789</li>
                            <li className='flex items-center gap-1 '><div><CgMail /></div> donate@gmail.com</li>
                            <li className='flex items-center gap-1'><div><IoSearch /></div> www.donate.com</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <hr className="border-gray-600 mt-10" />
                    <p className="text-center text-sm mt-5">
                        Copyright 2025 – DonationWorld | Designed By Raju Ahmed
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;