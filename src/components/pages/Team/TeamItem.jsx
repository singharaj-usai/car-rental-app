import React from "react";

const TeamItem = (props) => {
    const { name, position, image } = props.team;

    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <img className="w-40 h-40 rounded-full mx-auto mb-3" src={image} alt={`${name}'s Avatar`} />
            <p className="text-gray-900 font-semibold text-lg text-center">{name}</p>
            <p className="text-gray-500 text-sm text-center">{position}</p>
        </div>
    );
};

export default TeamItem;
