import React, { useState } from "react";
import CarModel from "./CarModel";
import AudiS1 from "../../../assets/images/audi-s1.png";
import Challenger from "../../../assets/images/Red-Dodge-Challenger-PNG-Pic.png";
import Durango from "../../../assets/images/durango.png";
import Cherokee from "../../../assets/images/2018-Jeep-Cherokee-Firecracker-Red.png";
import BMWIX from "../../../assets/images/bmw-ix.png";
import TeslaRoadster from "../../../assets/images/tesla-roadster.png";
import DodgeChargerDaytona from "../../../assets/images/dodge-charger-daytona.png";
import ChevyTrax from "../../../assets/images/chevy-trax-2020.png";
import CarDetails from "./CarDetails";

const vehicleModelsData = [
  {
    id: 1,
    name: "Audi A1 S-Line",
    image: AudiS1,
    description: {
      rent: "$45",
      brand: "Audi",
      model: "A1 S-Line",
      year: "2012",
      color: "White",
      doors: "4 Door",
      transmission: "Manual",
      fuel: "Gasoline",
    },
  },
  {
    id: 2,
    name: "BMW IX",
    image: BMWIX,
    description: {
      rent: "$95",
      brand: "BMW",
      model: "IX",
      year: "2022",
      color: "Maroon",
      doors: "4 Door",
      transmission: "Single-Speed",
      fuel: "Electric",
    },
  },
  {
    id: 3,
    name: "Chevrolet Trax",
    image: ChevyTrax,
    description: {
      rent: "$30",
      brand: "Chevrolet",
      model: "Trax LT",
      year: "2020",
      color: "Black",
      doors: "4 Door",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  },
  {
    id: 4,
    name: "Dodge Challenger",
    image: Challenger,
    description: {
      rent: "$85",
      brand: "Dodge",
      model: "Challenger",
      year: "2020",
      color: "Red",
      doors: "2 Door",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  },
  {
    id: 5,
    name: "Dodge Charger Daytona",
    image: DodgeChargerDaytona,
    description: {
      rent: "$100",
      brand: "Dodge",
      model: "Charger Daytona",
      year: "2021",
      color: "Black",
      doors: "4 Door",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  },
  {
    id: 6,
    name: "Dodge Durango",
    image: Durango,
    description: {
      rent: "$70",
      brand: "Dodge",
      model: "Durango",
      year: "2019",
      color: "Red",
      doors: "4 Door",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  },
  {
    id: 7,
    name: "Jeep Cherokee",
    image: Cherokee,
    description: {
      rent: "$64",
      brand: "Jeep",
      model: "Cherokee",
      year: "2018",
      color: "Red",
      doors: "4 Door",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  },
  {
    id: 8,
    name: "Tesla Roadster",
    image: TeslaRoadster,
    description: {
      rent: "$80",
      brand: "Tesla",
      model: "Roadster",
      year: "2021",
      color: "Red",
      doors: "4 Door",
      transmission: "Single-Speed",
      fuel: "Electric",
    },
  },
];

const VehicleModels = () => {
  const [selectedCar, setSelectedCar] = useState(vehicleModelsData[0]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
      <section className="px-4 py-12">
        <div className="text-center md:mx-2">
          <h3 className="text-2xl text-gray-800 font-medium mb-4">
            Vehicle Models
          </h3>
          <h1 className="text-5xl text-gray-800 font-bold mb-4">
            Our Rental Fleet
          </h1>
          <p className="text-gray-500 mb-12">
            Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
          </p>
          <div className="container mx-auto grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="flex flex-col space-y-2">
                {vehicleModelsData.map((car) => (
                    <button key={car.id} className={`p-4 border border-gray-300 font-bold rounded ${selectedCar.id === car.id ? "hover:text-red-500 hover:bg-gray-50 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2" : ""}`} onClick={() => handleCarSelect(car)}>
                      {car.name}
                    </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-1">
              <CarModel car={selectedCar} />
            </div>
            <div className="md:col-span-1">
              <CarDetails car={selectedCar} />
            </div>
          </div>
        </div>
      </section>
  );
};

export default VehicleModels;
