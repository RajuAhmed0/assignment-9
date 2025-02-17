import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    { id: 1, icon: "\uD83D\uDD25", number: 12532, label: "DONATIONS MADE", color: "text-orange-500" },
    { id: 2, icon: "☺️", number: 54216, label: "HAPPY CHILDREN", color: "text-red-500" },
    { id: 3, icon: "❤️", number: 2342, label: "VOLUNTEERING HELPERS", color: "text-orange-500" },
    { id: 4, icon: "✋", number: 32123, label: "EDUCATED CHILDREN", color: "text-red-600" },
];

const CounterSection = () => {
    return (
        <div>
            <div className=" py-10">
                <div className="container mx-auto px-4 flex flex-wrap justify-center text-center">
                    {stats.map((stat) => {
                        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                        return (
                            <div key={stat.id} className="w-full sm:w-1/2 md:w-1/4 p-4" ref={ref}>
                                <div className={`text-4xl ${stat.color}`}>{stat.icon}</div>
                                {inView && (
                                    <CountUp
                                        start={0}
                                        end={stat.number}
                                        duration={2.5}
                                        separator=","
                                        className={`text-3xl font-bold ${stat.color}`}
                                    />
                                )}
                                <p className="font-medium mt-2">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;