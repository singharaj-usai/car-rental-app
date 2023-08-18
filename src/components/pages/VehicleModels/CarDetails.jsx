import React from "react";

const CarDetails = ({ car }) => {
    const { brand, model, rent, year, color, doors, transmission, fuel } = car.description;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                Car Details
            </h2>
            <table className="w-full table-auto border-collapse">
                <tbody>
                <tr className="w-full bg-red-500">
                    <td className="px-4 py-3 text-white font-semibold text-xl" colSpan="2">
                        {rent} / <span className="text-md">
                        per day
                    </span>
                    </td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-100 w-1/3">
                        Brand:
                    </td>
                    <td className="px-4 py-3">{brand}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-200 w-1/3">
                        Model:
                    </td>
                    <td className="px-4 py-3">{model}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-100 w-1/3">
                        Year:
                    </td>
                    <td className="px-4 py-3">{year}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-200 w-1/3">
                        Color:
                    </td>
                    <td className="px-4 py-3">{color}</td>
                </tr>
                <tr>
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-100 w-1/3">
                        Doors:
                    </td>
                    <td className="px-4 py-3">{doors}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-200 w-1/3">
                        Transmission:
                    </td>
                    <td className="px-4 py-3">{transmission}</td>
                </tr>
                <tr>
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-100 w-1/3">
                        Fuel:
                    </td>
                    <td className="px-4 py-3">{fuel}</td>
                </tr>
                {/* Add more rows for other details */}
                </tbody>
            </table>
            <div className="mt-4">
                <div className="flex justify-center items-center mb-1">
                    <button className="hover:text-red-500 hover:bg-gray-50 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2 px-10 py-3 rounded w-full">
                        <span className="ml-2">
                            Reserve Now
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
