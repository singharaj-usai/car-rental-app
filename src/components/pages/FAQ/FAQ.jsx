import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
    const faq = [
        {
            question: "1. Which cities are open for your car rental services?",
            answer: "Our car rental services are available in these cities listed: Grand Rapids, Detroit, Lansing, Chicago, Cincinnati, Indianapolis.",
        },
        {
            question: "2. Are car rentals safe from Covid?",
            answer: "Car rental is one of the safest options during a pandemic since there will be no other person in the car from whom the virus can transmit. You can include the people in the car who you think are safe to travel with. You can be the driver of the car and use it just like your own car. From using it for daily needs to taking the car for a trip, you can use it the way you want.",
        },
        {
            question: "3. What guidelines does your rental company follow for cleaning and sanitation?",
            answer: "Car rental companies, especially Revv follow a thorough cleaning process. The cleaning process includes vacuuming, wiping, washing, and sanitizing the car with the top-notch quality disinfectant. Attention is paid more to over 20 high-touch points, which include Key / key fob, Steering wheel, Steering column, Seat belts, Seat pockets/seat surfaces, Center console, Areas between seats & doorjambs, Door interiors, Door pockets, Interior door handles, Exterior door handles, Areas between seats & consoles, Cupholders/compartments, Accessory panel/touchscreen, Rearview mirror/side mirrors, Visors/visor mirrors, Instrument panel, Dashboard/vents, Gearstick/gear shift, Trunk release, to name a few.",
        },
        {
            question: "4. Eligibility requirement for car rental?",
            answer: "The basic criterion for availing of a car rental service is that you need to be 21 years old or above and have a valid license for four-wheelers. You also need to have an ID and address proof, which has to be submitted to the company while taking the car rental service. You will need to submit the original license, and not one printed on an A4 size paper.",
        },
        {
            question: "5. Can I cancel my car rental?",
            answer: "Yes, you can go ahead and cancel the car rental service. You can do it through the app, the website, or just by making a call to our company. The charges of canceling the booking depend upon the time when you inform the company. If you are taking the service, you can refer to their Fee policy to get in-depth information about the canceling process.",
        },
        {
            question: "6. Can I switch my rental car?",
            answer: "Yes, you can switch the car even during the ongoing pandemic. However, you need to get in touch with us, preferably in-person, after which the process of switching the car will be carried out.",
        },
    ];

    return (
        <section className="py-12 px-4">
            <div className="text-center md:mx-2">
                <h3 className="text-2xl text-gray-800 font-medium mb-4">FAQ</h3>
                <h1 className="text-5xl text-gray-800 font-bold mb-12">
                    Frequently Asked Questions
                </h1>
                <div className="container mx-auto">

                        {faq.map((faq, id) => (
                            <FAQItem key={id} faq={faq}/>
                        ))}

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
