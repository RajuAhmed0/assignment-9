import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-[#F2F2DC] '>
            <footer className=" py-10 ">
                <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
                    {/* Description */}
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

                    {/* Useful Links */}
                    <div>
                        <h3 className=" text-lg font-semibold">Useful Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li className="hover:text-orange-500 cursor-pointer"> About Us</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Our Causes</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Our Volunteer</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Our Event</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Contact Us</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className=" text-lg font-semibold">Services</h3>
                        <ul className="mt-3 space-y-2">
                            <li className="hover:text-orange-500 cursor-pointer"> Incident Responder</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Secure Managed Fund</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Clean Water All</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Give Education</li>
                            <li className="hover:text-orange-500 cursor-pointer"> Food to Individuals</li>
                        </ul>
                    </div>

                    {/* Contact Now */}
                    <div>
                        <h3 className=" text-lg font-semibold">Contact Now</h3>
                        <ul className="mt-3 space-y-2">
                            <li className='flex items-center gap-1'><div><FaLocationDot /></div> Nator City, Rajshahi, BD</li>
                            <li className='flex items-center gap-1'><div><IoMdCall /></div> 880123456789</li>
                            <li className='flex items-center gap-1 lg:text-base md:text-sm'><div><CgMail /></div> donate@gmail.com</li>
                            <li className='flex items-center gap-1'><div><IoSearch /></div> www.donate.com</li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-600 mt-10" />
                <p className="text-center text-sm mt-5">
                    Copyright 2025 – DonationWorld | Designed By Raju Ahmed
                </p>
            </footer>
        </div>
    );
};

export default Footer;