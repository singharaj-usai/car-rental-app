import React, { useState } from "react";

const FAQItem = (props) => {
    const { question, answer } = props.faq;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded">
            <div className="border-b container mx-auto">
                <div className="mx-auto">
                    <button onClick={toggleAccordion} className={`faq-button ${isOpen ? "active" : ""}`}>
                        <span className="text-lg font-medium">{question}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div className={`faq-answer ${isOpen ? "active" : ""}`}>
                        <p className="p-4 text-gray-600">{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
