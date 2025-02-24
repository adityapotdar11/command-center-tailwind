import React from "react";
import { Book, Layout, PieChart, User, X } from "react-feather";

const LeftSidebar = ({ onClose }) => {
    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose}>
                <div class="xn-sidebar z-60">
                    <div class="xn-sidebar-inner p-8">
                        <div class="xn-logo">
                            <img
                                src="https://xenipay.com/command-center-25/assets/images/logo.svg"
                                alt="logo"
                            />
                        </div>
                        <div class="xn-sidebar-nav">
                            <nav>
                                <ul>
                                    <li>
                                        <a>
                                            <Layout className="feather" />
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <Book className="feather" />
                                            <span>Book Now</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <User className="feather" />
                                            <span>Clients</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <PieChart className="feather" />
                                            <span>Markup</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftSidebar;
