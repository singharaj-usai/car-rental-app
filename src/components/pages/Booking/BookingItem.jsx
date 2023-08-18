import React from "react";

const BookingItem = (props) => {
    const { label, type, id, name, options, onChange } = props;

    const handleChange = (event) => {
        onChange(event); // Pass the event back to the parent component (Booking)
    };

    return (
        <div>
            <label className="block text-gray-800 font-semibold mb-1" htmlFor={id}>
                {label}
            </label>
            {type === "select" ? (
                <select id={id} name={name} onChange={handleChange} className="w-full bg-white text-gray-400 border-2 border-gray-300 rounded px-3 py-2">
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input type={type} id={id} name={name} onChange={handleChange} className="w-full bg-white text-gray-400 border-2 border-gray-300 rounded px-3 py-2"/>
            )}
        </div>
    );
};

export default BookingItem;
