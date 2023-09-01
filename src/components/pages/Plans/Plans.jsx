import React from "react";
import PlanItem from "./PlanItem";
import BasicPlan from "../../../assets/images/car.png";
import ProPlan from "../../../assets/images/operator.png";
import InsanePlan from "../../../assets/images/driving.png";

const Plans = () => {
    const plans = [
        {
            id: 1,
            title: "Basic Plan",
            price: "$9.99",
            features: ["Exterior Cleaning", "Roadside Services"],
            image: BasicPlan,
        },
        {
            id: 2,
            title: "Advanced Plan",
            price: "$59.99",
            features: ["Interior and Exterior Deep Cleaning", "Roadside Services and Towing", "24/7 Customer Service", "Replacement Car During Repairs", "Steering Lock Included"],
            image: InsanePlan,
            advanced: true,
        },
        {
            id: 3,
            title: "Pro Plan",
            price: "$19.99",
            features: ["Interior and Exterior Cleaning", "Roadside Services", "24/7 Customer Service", "Replacement Car During Repairs"],
            image: ProPlan,
        },

    ];

    return (
        <div className="py-12 px-4">
            <div className="text-center md:mx-2">
                <h3 className="text-2xl text-gray-800 font-medium mb-4">
                    Purchase a protection plan
                </h3>
                <h1 className="text-5xl text-gray-800 font-bold mb-12">
                    Our Protection Plans
                </h1>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {plans.map((plan, id) => (
                            <PlanItem plan={plan} key={id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
