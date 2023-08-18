import React from "react";
import AppStoreIcon from "../../../assets/images/app-store.png";
import GooglePlayIcon from "../../../assets/images/google-play.png";

const DownloadAppItem = () => {
    return (
        <div className="text-center py-10">
            <h2 className="text-3xl font-semibold mb-4">
                Download Our App
            </h2>
            <p className="text-gray-600 mb-6">
                Download our mobile app for easy access to all of our services and offers, and more!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center">
                    <img src={AppStoreIcon} alt="App Store" className="w-full h-full mr-2" />
                </div>
                <div className="flex items-center">
                    <img src={GooglePlayIcon} alt="Google Play" className="w-full h-full mr-2" />
                </div>
            </div>
        </div>
    );
};

export default DownloadAppItem;
