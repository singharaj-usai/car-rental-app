import React from "react";

const TestimonialItem = (props) => {
    const { content, image, name, city } = props.testimonial
    return (
        <div className="mx-4 md:mx-6  p-12 rounded shadow-xl">
            <h3 className="pb-4 text-gray-700 font-medium text-2xl mb-2">{content}</h3>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="w-20 h-20 rounded-full" src={image} alt={`${name}'s Avatar`}/>
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 font-semibold">{name}</p>
                    <p className="text-gray-600 text-sm">{city}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
