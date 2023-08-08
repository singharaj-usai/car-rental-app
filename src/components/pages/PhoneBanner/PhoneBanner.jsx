import React from "react";
import { FaPhone } from "react-icons/fa"
import R from "../../../assets/images/red-aston-martin.jpg";

const PhoneBanner = () => {
    return (
        <div className="w-full md:order-1" style={{ backgroundImage: `url(${R})`, backgroundSize: "cover", backgroundPosition: "center 70%" }}>

            <div className="h-80 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-black">
                        <div className="text-center p-4">
                            <h1 className="text-white text-4xl font-semibold mb-4">
                                Book a rental car today by contacting us
                            </h1>
                            <div className="flex items-center justify-center mb-2">
                            <FaPhone className="w-6 h-6 mr-2 text-white" />
                            <p className="text-red-500 text-2xl font-semibold">
                                (123) 456-7890
                            </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneBanner;
