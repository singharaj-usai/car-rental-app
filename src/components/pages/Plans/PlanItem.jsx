import React from "react";

const PlanItem = (props) => {
    const { image, title, price, features, advanced } = props.plan;
    return (
        <div className={`p-6 rounded-lg ${advanced ? "bg-red-500 shadow-lg" : "bg-white border-2 border-gray-300"}`}>
            <img src={image} alt={title} className="w-36 h-36 mx-auto mb-4" />
            <h3 className={`${advanced? "text-white" : "text-black"} text-xl font-semibold mb-2`}>{title}</h3>
            <p className={`${advanced? "text-gray-50" : "text-gray-600"} mb-4`}>{price} / month</p>
            <ul className={`${advanced? "text-gray-50" : "text-gray-900"} space-y-2`}>
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanItem;
