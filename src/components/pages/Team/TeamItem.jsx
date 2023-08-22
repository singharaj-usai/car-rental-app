import React from "react";

const TeamItem = (props) => {
    const { name, position, image, description } = props.team;

    return (
        <div className="justify-center py-12 flex flex-col items-center space-y-24 md:space-y-0 md:flex-row ">
            <div className="w-full relative p-4">
                <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                    <a href="#" className="relative block">
                        <img alt="profile" src={image} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white "/>
                    </a>
                </div>
                <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow">
                    <div className="text-center">
                        <p className="text-2xl text-gray-800 ">
                            {name}
                        </p>
                        <p className="text-xl font-light text-gray-500">
                            {position}
                        </p>
                        <p className="py-4 mx-auto font-light text-gray-500 text-md w-60">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamItem;
