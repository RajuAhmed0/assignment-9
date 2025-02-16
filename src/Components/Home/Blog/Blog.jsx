import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
    {
        id: 1,
        title: "The Road To Charity Isn’t Paved With Ease",
        date: "November 12, 2020",
        image: "/img/blogimg1.jpeg",
    },
    {
        id: 2,
        title: "Aid for Japan: The Charity for Orphans",
        date: "November 12, 2020",
        image: "/img/blogimg2.jpg",
    },
    {
        id: 3,
        title: "5 Excellent Global Charitable Causes",
        date: "November 12, 2020",
        image: "/img/blogimg3.jpeg",
    },
    {
        id: 4,
        title: "Empowering Women Through Education",
        date: "November 12, 2020",
        image: "/img/blogimg4.jpeg",
    },
    {
        id: 5,
        title: "Food for Everyone: Ending Hunger Globally",
        date: "November 12, 2020",
        image: "/img/blogimg5.jpeg",
    },
    {
        id: 6,
        title: "Clean Water Initiatives Changing Lives",
        date: "November 12, 2020",
        image: "/img/blogimg6.jpeg",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024, // Medium screens (Tablets)
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768, // Small screens (Mobile)
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480, // Extra small screens
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const Blog = () => {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 text-center">Our Blog</h2>
                    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                        Read the latest news from the world of NGO & charity written daily by our team, volunteers, and global partners.
                    </p>

                    <div className="mt-12">
                        <Slider {...settings}>
                            {blogPosts.map((post) => (
                                <div key={post.id} className="px-2 sm:px-4">
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative group">
                                        <img src={post.image} alt={post.title} className="w-full h-48 sm:h-64 object-cover" />
                                        <div className="p-4 sm:p-6">
                                            <span className="text-sm font-semibold text-orange-600">NEWS</span>
                                            <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
                                            <p className="mt-1 text-gray-500 text-sm">{post.date}</p>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 hover:bg-orange-400 text-white flex items-center justify-center rounded-full border-2 text-sm font-bold cursor-pointer">
                                                VIEW
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;