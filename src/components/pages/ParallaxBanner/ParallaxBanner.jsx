import React from "react";
import { Parallax } from "react-parallax";
import R from "../../../assets/images/aston-martin.jpg";

const ParallaxBanner = () => {
    return (
        <Parallax bgImage={R} strength={500}>
            <div className="h-72">
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-black">
                    <h1 className="text-white text-4xl font-semibold mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-white text-lg">
                        Discover the best car rental experience with us.
                    </p>
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxBanner;
