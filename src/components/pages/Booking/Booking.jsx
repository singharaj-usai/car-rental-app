import React, {useState} from "react";
import BookingItem from "./BookingItem";
import Reservation from "./Reservation";
import {Element} from "react-scroll";

const Booking = () => {
    const initialFormData = {
        pickupLocation: "",
        dropOffLocation: "",
        carType: "",
        pickupDate: "",
        dropOffDate: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submittedData, setSubmittedData] = useState(null);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if any required fields are empty
        if (
            formData.pickupLocation === "" ||
            formData.dropOffLocation === "" ||
            formData.carType === "" ||
            formData.pickupDate === "" ||
            formData.dropOffDate === ""
        ) {
            // Show an alert or error message to the user indicating that all fields are required
            alert("Please fill out all fields before submitting.");
            return;
        }

        // If all required fields are filled, proceed with form submission
        setSubmittedData(formData);
    };

    return (
        <div className="shadow-lg rounded  p-10 bg-gray-100">
            <div className="container mx-auto">
                <div className="mx-auto">
                    <Element name="bookingSection">
                        <h2 className="text-3xl text-gray-800 font-bold mb-6">Book Your Car Now</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex items-center">
                                <div className="lg:w-1/3">
                                    <BookingItem label="Pickup Location" type="select" id="pickupLocation"
                                                 name="pickupLocation"
                                                 options={[
                                                     "Select Pickup Location",
                                                     "Detroit, MI",
                                                     "Lansing, MI",
                                                     "Grand Rapids, MI",
                                                     "Chicago, IL",
                                                     "Indianapolis, IN",
                                                     "Cincinnati, OH",
                                                 ]}
                                                 onChange={handleInputChange}/>
                                </div>
                                <div className="lg:w-1/3 pl-4">
                                    <BookingItem label="Drop-off Location" type="select" id="dropOffLocation"
                                                 name="dropOffLocation"
                                                 options={[
                                                     "Select Drop-off Location",
                                                     "Detroit, MI",
                                                     "Lansing, MI",
                                                     "Grand Rapids, MI",
                                                     "Chicago, IL",
                                                     "Indianapolis, IN",
                                                     "Cincinnati, OH",
                                                 ]}
                                                 onChange={handleInputChange}/>
                                </div>
                                <div className="lg:w-1/3 pl-4">
                                    <BookingItem label="Select A Car" type="select" id="carType" name="carType"
                                                 options={[
                                                     "Select A Car",
                                                     "Audi S1",
                                                     "BMW IX",
                                                     "Chevrolet Trax",
                                                     "Dodge Challenger",
                                                     "Dodge Charger Daytona",
                                                     "Dodge Durango",
                                                     "Jeep Cherokee",
                                                     "Tesla Roadster",
                                                 ]}
                                                 onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <BookingItem label="Pickup Date" type="date" id="pickupDate" name="pickupDate"
                                                 onChange={handleInputChange}/>
                                </div>
                                <div className="w-1/2 pl-4">
                                    <BookingItem label="Drop-off Date" type="date" id="dropOffDate" name="dropOffDate"
                                                 onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                        className="w-full hover:text-red-500 hover:bg-gray-100 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2 border-red-500 px-4 py-2 rounded">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </Element>
                </div>
            </div>
            {submittedData && <Reservation data={submittedData}/>}
        </div>
    );
};

export default Booking;
