import React from "react";
import { Book, Layout, PieChart, User, X } from "react-feather";

const LeftSidebar = ({ onClose }) => {
    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose}>
                <div class="xn-left-nav z-60">
                    <div class="xn-sidebar-inner p-8">
                        <div className="xn-logo">
                            <img
                                src="https://xenipay.com/command-center-25/assets/images/logo.svg"
                                alt="logo"
                            />
                        </div>
                        <div className="xn-sidebar-nav">
                        <nav className="pt-7">
                          <ul className="flex flex-col">
                            <li>
                              <a className="flex flex-row gap-x-3 align-center" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="3" y1="9" x2="21" y2="9"></line>
                                  <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg><span>Dashboard</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="feather feather-book">
                                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg><span>Book Now</span></a>
                            </li>
                            <li className="active">
                              <a className="flex flex-row gap-x-3 stroke-accent" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                  height="24" viewBox="0 0 24 24" fill="none" stroke="accent" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="feather feather-user">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg><span>Clients</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="feather feather-users">
                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg><span>Agents</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="feather feather-pie-chart">
                                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                </svg><span>Markup</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="feather feather-gift">
                                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                  <rect x="2" y="7" width="20" height="5"></rect>
                                  <line x1="12" y1="22" x2="12" y2="7"></line>
                                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                </svg><span>Packages</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="feather feather-star">
                                  <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                  </polygon>
                                </svg><span>Rewards</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="feather feather-bookmark">
                                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg><span>Booking Records</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                  height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders">
                                  <line x1="4" y1="21" x2="4" y2="14"></line>
                                  <line x1="4" y1="10" x2="4" y2="3"></line>
                                  <line x1="12" y1="21" x2="12" y2="12"></line>
                                  <line x1="12" y1="8" x2="12" y2="3"></line>
                                  <line x1="20" y1="21" x2="20" y2="16"></line>
                                  <line x1="20" y1="12" x2="20" y2="3"></line>
                                  <line x1="1" y1="14" x2="7" y2="14"></line>
                                  <line x1="9" y1="8" x2="15" y2="8"></line>
                                  <line x1="17" y1="16" x2="23" y2="16"></line>
                                </svg><span>PLUM</span></a>
                            </li>
                            <li>
                              <a className="flex flex-row gap-x-3 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                  height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings">
                                  <circle cx="12" cy="12" r="3"></circle>
                                  <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                  </path>
                                </svg><span>Settings</span></a>
                            </li>
                          </ul>
                        </nav>
                        <div className="fixed bottom-4">
                        <div className="xn-basic-plan flex flex-row justify-between p-4">
                          <div>
                            <p className="mb-0 me-4">Basic <br /> Plan</p>
                          </div>
                          <button className="secondary-btn p-4">Upgrade Now</button>
                        </div>
                        <div className="flex flex-row gap-8 mt-4 xn-siebar-text">
                          <a className="flex flex-row gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                              className="feather feather-settings">
                              <circle cx="12" cy="12" r="3"></circle>
                              <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                              </path>
                            </svg>
                            <span>Profile</span>
                          </a>
                          <a className="flex flex-row gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                              className="feather feather-log-out">
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                              <polyline points="16 17 21 12 16 7"></polyline>
                              <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                            <span>Logout</span>
                          </a>
                        </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftSidebar;
