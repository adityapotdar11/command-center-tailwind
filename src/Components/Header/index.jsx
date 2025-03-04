import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Bell, ChevronDown, Menu, ShoppingCart } from "react-feather";

const Header = ({ onLeftSidebarOpen, onRightSidebarOpen }) => {
    const [activeTab, setActiveTab] = useState("book-now");

    return (
        <header>
            <div className="flex flex-row py-4 items-center">
                {/* Left Section */}
                <div className="flex-1">
                    <div className="flex items-center gap-5">
                        {/* Left Sidebar Toggle */}
                        <a
                            className="xn-icon-sec"
                            onClick={onLeftSidebarOpen}
                        >
                            <Menu className="feather" />
                        </a>
                        <a className="xn-icon-sec xn-arrow-back">
                            <ArrowLeft className="feather" />
                        </a>
                        <a className="xn-logo">
                            <img
                                src="https://xenipay.com/command-center-25/assets/images/logo.svg"
                                alt="logo"
                            />
                        </a>
                    </div>
                </div>

                {/* Center Section (Tabs) */}
                <div className="flex-1">
                    <div className="flex justify-center">
                        <nav className="xn-nav-tab">
                            <ul className="list-none flex xn-light-border xn-header-tab">
                                {[
                                    { name: "Dashboard", path: "/dashboard" },
                                    { name: "Book Now", path: "/book-now" },
                                    { name: "Bookings", path: "/bookings" },
                                ].map((tab) => (
                                    <li key={tab.path}>
                                        <NavLink
                                            to={tab.path}
                                            className={({ isActive }) =>
                                                `cursor-pointer rounded-2xl px-4 py-2 ${
                                                    isActive
                                                        ? "bg-accent text-white"
                                                        : "bg-transparent text-neutral-black-60"
                                                }`
                                            }
                                        >
                                            {tab.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1">
                    <div className="flex items-center justify-end gap-5">
                        <a className="xn-icon-sec-bg">
                            <Bell className="feather" />
                        </a>
                        <a className="xn-icon-sec-bg">
                            <ShoppingCart className="feather" />
                        </a>
                        {/* Right Sidebar Toggle */}
                        <div
                            className="profile-sec flex items-center cursor-pointer"
                            onClick={onRightSidebarOpen}
                        >
                            <div className="profile-img-sec">
                                <img
                                    src="https://xenipay.com/command-center-25/assets/images/profile-pic.png"
                                    alt=""
                                    className="xn-profile-img"
                                />
                            </div>
                            <div className="xn-profile text-end pl-4">
                                <p className="xn-profile-name xn-p-black-bold">
                                    James Roland
                                </p>
                                <p className="xn-profile-email pt-2 xn-p-black-50">
                                    r.james@rolands.com
                                </p>
                            </div>
                            <div className="arrow-sec xn-black-50-color">
                                <ChevronDown className="feather" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
