import React from "react";

const Reservation = (props) => {
    const { data } = props;

    // Map the car type to the corresponding image URL
    const carImages = {
        "Dodge Challenger": require("../../../assets/images/Red-Dodge-Challenger-PNG-Pic.png").default,
        "Dodge Durango": require("../../../assets/images/durango.png").default,
        "Jeep Cherokee": require("../../../assets/images/2018-Jeep-Cherokee-Firecracker-Red.png").default,
        "BMW IX": require("../../../assets/images/bmw-ix.png").default,
        "Dodge Charger Daytona": require("../../../assets/images/dodge-charger-daytona.png").default,
        "Chevrolet Trax": require("../../../assets/images/chevy-trax-2020.png").default,
        "Tesla Roadster": require("../../../assets/images/tesla-roadster.png").default,
        "Audi S1": require("../../../assets/images/audi-s1.png").default,
    };

    return (
        <div className="shadow-md rounded p-6 bg-white mt-4">
            <h2 className="text-3xl text-gray-800 font-bold mb-4">Reservation Details</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="mb-4">
                        <strong>Pickup Location:</strong> {data.pickupLocation}
                    </div>
                    <div className="mb-4">
                        <strong>Drop-off Location:</strong> {data.dropOffLocation}
                    </div>

                    <div className="mb-4">
                        <strong>Pickup Date:</strong> {data.pickupDate}
                    </div>
                    <div className="mb-4">
                        <strong>Drop-off Date:</strong> {data.dropOffDate}
                    </div>
                </div>
                <div className="flex items-start justify-end">
                    {data.carType && (
                        <div>
                            <strong>Car Type - </strong> {data.carType}
                            <img src={carImages[data.carType]} alt={data.carType} className="w-56 h-auto mt-2" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reservation;
