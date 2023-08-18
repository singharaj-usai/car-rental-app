import React from "react";
import Audi from "../../../assets/images/cars.png";
import ChooseItem from "./ChooseItem";

const chooseData = [
    {
        id: 1,
        icon: Audi,
        title: "Audi A1 S-Line",
    },
    // Add more items as needed
];

const Choose = () => {
    return (
        <section className="pb-10">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-2">
                    {chooseData.map((choose, id) => (
                        <ChooseItem choose={choose} key={id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Choose;
