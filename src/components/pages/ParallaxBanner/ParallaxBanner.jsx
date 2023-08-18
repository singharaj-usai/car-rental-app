import React from "react";
import { Parallax } from "react-parallax";
import R from "../../../assets/images/aston-martin.jpg";

const ParallaxBanner = () => {
    return (
        <Parallax bgImage={R} strength={1000}>
            <div className="h-80 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-black">
                    <div className="grid gap-4 grid-cols-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center p-4 sm:col-span-2 md:col-span-1">
                        <h1 className="text-white text-4xl font-semibold mb-4">
                        4.9+
                    </h1>
                    <p className="text-white text-lg">
                        Star Rating Reviews
                    </p>
                        </div>
                        <div className="text-center p-4 sm:col-span-2 md:col-span-1">
                            <h1 className="text-white text-4xl font-semibold mb-4">
                                5+
                            </h1>
                            <p className="text-white text-lg">
                                Office Locations
                            </p>
                        </div>
                        <div className="text-center p-4 sm:col-span-2 md:col-span-1">
                            <h1 className="text-white text-4xl font-semibold mb-4">
                               10+
                            </h1>
                            <p className="text-white text-lg">
                                Private Drivers
                            </p>
                        </div>
                        <div className="text-center p-4 sm:col-span-2 md:col-span-1">
                            <h1 className="text-white text-4xl font-semibold mb-4">
                                10+
                            </h1>
                            <p className="text-white text-lg">
                                Years In Business
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxBanner;
