import React, {useState} from "react";
import { HashRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Home from "../../pages/About/Home";
import VehicleModels from "../../pages/VehicleModels/VehicleModels";
import Logo from "../../../assets/images/car-rental-logo.png";
import Aventador from "../../../assets/images/2013-Aventador.jpg";
import { FaBars, FaTimes} from "react-icons/fa";
import PhoneBanner from "../../pages/PhoneBanner/PhoneBanner";
import Testimonial from "../../pages/Testimonial/Testimonial";

const navbarData = [
    {
        id: 1,
        title: "Home",
        to: "/home",
    },
    {
        id: 2,
        title: "About",
        to: "/about",
    },
    {
        id: 3,
        title: "Vehicle Models",
        to: "/vehiclemodels",
    },
    {
        id: 4,
        title: "Testimonials",
        to: "/testimonials",
    },
    {
        id: 5,
        title: "Our Team",
        to: "/team",
    },    {
        id: 6,
        title: "Contact",
        to: "/contact",
    },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <Router>
            <nav className="py-6 z-10 top-0 bg-white shadow rounded">
                <ul className="font-semibold flex justify-between items-center flex-wrap">
                    {/* Logo placeholder */}
                    <div className="pl-12 flex items-center">
                        <img src={Logo} alt="Logo" className="w-20 h-auto" />
                    </div>

                    {/* Hamburger Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="pr-9 text-gray-800 hover:text-red-500 focus:outline-none"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Centered navbar links */}
                    <div className="hidden space-x-4 lg:flex items-center">
                        {navbarData.map((el, id) => (
                            <LinkItem el={el} key={id} />
                        ))}
                    </div>

                    {/* "Sign In" and "Register" elements */}
                    <div className="px-7 lg:flex hidden flex items-center space-x-4">
                        <li className="m-3 lg:mx-5">
                            <NavLink
                                to="/signin" // Replace with your sign-in route
                                activeClassName="text-red-500"
                                className="text-gray-800 text-medium hover:text-red-500"
                            >
                                Sign In
                            </NavLink>
                        </li>
                        <li className="m-3 lg:mx-5">
                            <NavLink
                                to="/register" // Replace with your register route
                                activeClassName="text-red-500"
                                className="rounded-md hover:text-red-500 hover:bg-gray-50 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2 px-4 py-2"
                            >
                                Register
                            </NavLink>
                        </li>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden px-4 mt-2 space-y-4">
                            {navbarData.map((el) => (
                                <LinkItem el={el} key={el.id} onClick={toggleMenu} />
                            ))}
                            <div className="flex flex-col space-y-2">
                                <NavLink
                                    to="/signin"
                                    activeClassName="text-red-500"
                                    className="text-gray-800 text-medium hover:text-red-500"
                                    onClick={toggleMenu}
                                >
                                    Sign In
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    activeClassName="text-red-500"
                                    className="rounded-md hover:text-red-500 hover:bg-gray-50 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2 px-4 py-2"
                                    onClick={toggleMenu}
                                >
                                    Register
                                </NavLink>
                            </div>
                        </div>
                    )}

                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/testimonials">
                    <div className="w-full md:order-1" style={{ backgroundImage: `url(${Aventador})`, backgroundSize: "cover", backgroundPosition: "center 75%" }}>
                        <div className="h-80 relative overflow-hidden">
                            <div className="absolute inset-0 bg-opacity-75 bg-black">
                                <div className="px-12 text-white pt-12">
                                    <h1 className="text-4xl font-bold mb-3">Testimonials</h1>
                                    <p className="text-lg font-semibold">
                                        Home / Testimonials
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:px-6 p-2 mb-6">
                        <div className="w-full leading-relaxed">
                            <div className="w-full leading-relaxed">
                                <Testimonial/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full leading-relaxed">
                            <div className="w-full leading-relaxed">
                                <PhoneBanner/>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/vehiclemodels">
                    <div className="w-full md:order-1" style={{ backgroundImage: `url(${Aventador})`, backgroundSize: "cover", backgroundPosition: "center 75%" }}>
                        <div className="h-80 relative overflow-hidden">
                            <div className="absolute inset-0 bg-opacity-75 bg-black">
                                <div className="px-12 text-white pt-12">
                                    <h1 className="text-4xl font-bold mb-3">Vehicle Models</h1>
                                    <p className="text-lg font-semibold">
                                        Home / Vehicle Models
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:px-6 p-2 mb-6">
                        <div className="w-full leading-relaxed">
                            <div className="w-full leading-relaxed">
                                <VehicleModels/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full leading-relaxed">
                            <div className="w-full leading-relaxed">
                                <PhoneBanner/>
                            </div>
                        </div>
                    </div>
                </Route>
                {/* Add your sign-in and register route components */}
                <Route path="/signin">
                    {/* Add your sign-in component here */}
                    <div>Sign In Component</div>
                </Route>
                <Route path="/register">
                    {/* Add your register component here */}
                    <div>Register Component</div>
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar;

const LinkItem = (props) => {
    const { title, to } = props.el;
    return (
        <li className="m-3">
            <NavLink
                to={to}
                activeClassName="text-red-500"
                className="text-gray-800 text-medium hover:text-red-500"
            >
                {title}
            </NavLink>
        </li>
    );
};
