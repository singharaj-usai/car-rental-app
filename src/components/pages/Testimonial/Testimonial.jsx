import React from "react";
import TestimonialItem from "./TestimonialItem";
import Dude1 from "../../../assets/images/cool-dude.jpg";
import Dude2 from "../../../assets/images/cool-dude2.jpg";

const testimonialsData = [
    {
        id: 1,
        name: "Dave Davidson",
        city: "New York City",
        image: Dude1,
        content:
            "\"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. \""
    },
    {
        id: 2,
        name: "John Johnson",
        city: "Chicago",
        image: Dude2,
        content:
            "\"The car we rented was in great condition and made our trip even better. I highly recommend people for this car rental website!\""
    },
    // Add more testimonial objects here
];

const Testimonial = () => {
    return (
        <div className="py-12 px-4">
            <div className="md:mx-2">
                <div className="text-center ">
                    <h3 className="text-2xl text-gray-800 font-medium mb-4">
                        Reviewed by our clients
                    </h3>
                    <h1 className="text-5xl text-gray-800 font-bold mb-4">
                        Testimonials
                    </h1>
                    <p className="mb-12 text-gray-500">
                        Explore the positive experience we've made on the our clients by reading their reviews.
                    </p>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {testimonialsData.map((testimonial, id) => (
                            <TestimonialItem testimonial={testimonial} key={id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
