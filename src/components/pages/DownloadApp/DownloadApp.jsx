import React from "react";
import PhoneImage from "../../../assets/images/holding-iphone.png";
import DownloadAppItem from "./DownloadAppItem";

const DownloadApp = () => {
    return (
        <section className="bg-gray-100 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-2">
                    <DownloadAppItem />
                </div>
                <div className="w-full md:w-1/2 md:order-1">
                    <img src={PhoneImage} alt="Phone" className="max-w-xs mx-auto md:mx-0" style={{ order: 2 }}/>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
