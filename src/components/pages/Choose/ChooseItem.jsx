import React from "react";

const ChooseItem = (props) => {
    const { icon, title, description } = props.choose;
    return (
        <div className="w-full px-2 lg:w-1/3">
            <div className="my-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
                <div className="h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-red-100 text-red-600 transition duration-200 group-hover:bg-red-600 group-hover:text-white">
                </div>
            </div>
        </div>
    );
};

export default ChooseItem;
