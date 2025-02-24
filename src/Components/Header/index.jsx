import React from "react";
import {
    ArrowLeft,
    Bell,
    ChevronDown,
    Menu,
    ShoppingCart,
} from "react-feather";

const Header = ({ onSidebarOpen }) => {
    return (
        <>
            <div class="xn-container">
                <header>
                    <div class="flex flex-row py-4 items-center">
                        <div class="flex-1">
                            <div class="flex items-center">
                                <a
                                    class="me-6 xn-icon-sec"
                                    onClick={onSidebarOpen}>
                                    <Menu className="feather" />
                                </a>
                                <a class="me-6 xn-icon-sec">
                                    <ArrowLeft className="feather" />
                                </a>
                                <a class="xn-logo">
                                    <img
                                        src="https://xenipay.com/command-center-25/assets/images/logo.svg"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-center">
                                <nav class="tab-nav">
                                    <ul class="list-none flex xn-light-border rounded-2xl xn-header-tab">
                                        <li>
                                            <a
                                                id="dashboard-btn"
                                                class="rounded-2xl active"
                                                data-href="dashboard">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id="book-now-btn"
                                                data-href="book-now">
                                                Book Now
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id="bookings-btn"
                                                data-href="bookings">
                                                Bookings
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center justify-end">
                                <a class="me-6 xn-icon-sec-bg">
                                    <Bell className="feather" />
                                </a>
                                <a class="me-6 xn-icon-sec-bg">
                                    <ShoppingCart className="feather" />
                                </a>
                                <div class="profile-sec flex items-center">
                                    <div class="profile-img-sec">
                                        <img
                                            src="https://xenipay.com/command-center-25/assets/images/profile-pic.png"
                                            alt=""
                                            class="xn-profile-img"
                                        />
                                    </div>
                                    <div class="xn-profile text-end pl-4">
                                        <p class="xn-profile-name xn-p-black-bold">
                                            James Roland
                                        </p>
                                        <p class="xn-profile-email pt-2 xn-p-black-50">
                                            r.james@rolands.com
                                        </p>
                                    </div>
                                    <div class="arrow-sec xn-black-50-color">
                                        <ChevronDown className="feather" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
