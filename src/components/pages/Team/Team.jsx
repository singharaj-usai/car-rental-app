import React from "react";
import TeamItem from "./TeamItem";
import Member1Image from "../../../assets/images/team-member1.png";
import Member2Image from "../../../assets/images/team-member2.png";
import Slothy from "../../../assets/images/Slothy-Plays.png";
import RussoPlays from "../../../assets/images/Russy-Plays.png";
import RedBucket from "../../../assets/images/Red-Bucket-Blox.png";
import NenoYT from "../../../assets/images/NenoYT.png";

const teamMembersData = [

    {
        id: 1,
        name: "John D.",
        position: "Subcontractor",
        image: Member2Image,
    },
    {
        id: 2,
        name: "Singharaj Usai",
        position: "CEO",
        image: Member1Image,
    },
    {
        id: 3,
        name: "Slothy Plays",
        position: "Social Media Marketer",
        image: Slothy,
    },
    {
        id: 4,
        name: "Russo Plays",
        position: "Social Media Marketer",
        image: RussoPlays,
    },
    {
        id: 5,
        name: "qd22k",
        position: "Salesman",
        image: RedBucket,
    },
    {
        id: 6,
        name: "NenoYT",
        position: "Manager",
        image: NenoYT,
    },
];

const Team = () => {
    return (
        <section className="py-12 px-4 ">
            <div className="md:mx-2">
                  <div className="text-center ">
                    <h3 className="text-2xl text-gray-800 font-medium mb-4">
                      Our Team
                   </h3>
                   <h1 className="text-5xl text-gray-800 font-bold mb-4">
                        Meet Our Experts
                    </h1>
                    <p className="text-gray-500 mb-12">
                       Get to know the people behind our success and expertise.
                    </p>
                </div>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembersData.map((team, id) => (
                            <TeamItem team={team} key={id}/>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
