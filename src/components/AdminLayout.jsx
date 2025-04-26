import React from "react";
// import signUpImage from "../../assets/signUpImage.webp";
import logo from "../assets/Logo.svg";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBrain, FaUserFriends, FaShoppingCart } from "react-icons/fa";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
// import ProductDashboard from "./EcommerceComponent";
// import StatsCard from "./StatsComponent";
// import EventsComponent from "./EventsComponent";
// import RevenueChart from "../RevenueChart";
// import ShowEvents from "./ShowEvents";
// import CreateBlogs from "./BlogsComponent";
// import ShowBlogs from "./ShowBlogs";
// import ShowDonations from "./ShowDonations";
// import CreateStories from "./AddStories";
// import ShowStories from "./ShowStories";
import { Link } from "react-router-dom";
// import AddDonationComponent from "./AddDonationComponent";
import { MdPermMedia } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
// import ShowMedia from "./ShowMedia";
// import AddMediaComponent from "./AddMediaComponent";
// import ShowOrders from "./ShowOrders";
// import ShowDonationsOrders from "./ShowDonationsOrders";
// import AddOfflineClasses from "./AddOfflineClasses";
// import ShowClasses from "./ShowOfflineClasses";

function AdminLayout() {
  const [openMenus, setOpenMenus] = useState({});
  const [activeMenu, setActiveMenu] = useState("My Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState("showEvents");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = (name, hasDropdown) => {
    setActiveMenu(name);
    if (hasDropdown) {
      setOpenMenus((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    window.location.href = "/"
  };

  const menuItems = [
    { name: "My Dashboard", icon:<MdDashboard size={28}/>},
    { name: "AI-Based Risk Analysis", icon: <FaBrain size={28} />, dropdown: true },
    { name: "Smart Contract", icon: <FaRegHandshake size={28} />, dropdown: true },
    { name: "Centralized Buyers Blocklist", icon: <FaUserFriends size={28} /> },
    { name: "Specific Suppliers Network", icon: <GiNetworkBars size={28} />, dropdown: true },
    { name: "ERP Solution", icon: <IoSettingsSharp size={28} />, dropdown: true },
    { name: "E-Commerce Page", icon: <FaShoppingCart size={28} />, dropdown: true },
    { name: "Legal & Financial Services", icon: <BsFileEarmarkTextFill size={28} />, dropdown: false },
  ];
  const renderContent = () => {
    switch (activeMenu) {
      case "My Dashboard":
        return (
          <div className="flex flex-col">
            <span className="text-4xl text-red-500 font-bold mb-10">Dashboard </span>
            
            <div className="grid grid-cols-1 gap-8">
              {/* Dummy content to test scrollability */}
              {Array(20).fill().map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Content Section {index + 1}</h2>
                  <div className="h-[100px] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    Chart or Visual Content {index + 1}
                  </div>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                    Praesent euismod, nisl vitae aliquam ultricies, nisl nisl aliquet nisl, 
                    vitae aliquet nisl nisl vitae nisl.
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                      Action Button
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    //   case "Donations":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Donations </span>
    //           <span className="flex gap-4">
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "addDonation"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("addDonation")}
    //             >
    //               Add Donations
    //             </button>
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "showDonation"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("showDonation")}
    //             >
    //               Show Donations
    //             </button>
    //           </span>
    //         </div>
    //         <div className="mt-4">
    //           {activeComponent === "addDonation" ? (
    //             <AddDonationComponent />
    //           ) : (
    //             <ShowDonations />
    //           )}
    //         </div>
    //       </div>
    //     );
    //   case "Media":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Media </span>
    //           <span className="flex gap-4">
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "addMedia"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("addMedia")}
    //             >
    //               Add Media
    //             </button>
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "showMedia"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("showMedia")}
    //             >
    //               Show Media
    //             </button>
    //           </span>
    //         </div>
    //         <div className="mt-4">
    //           {activeComponent === "addMedia" ? (
    //             <AddMediaComponent />
    //           ) : (
    //             <ShowMedia />
    //           )}
    //         </div>
    //       </div>
    //     );
    //   case "Offline Classes":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Offline Classes </span>
    //           <span className="flex gap-4">
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "addClasses"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("addClasses")}
    //             >
    //               Add Classes
    //             </button>
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "showClasses"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("showClasses")}
    //             >
    //               Show Classes
    //             </button>
    //           </span>
    //         </div>
    //         <div className="mt-4">
    //           {activeComponent === "addClasses" ? (
    //             <AddOfflineClasses />
    //           ) : (
    //             <ShowClasses />
    //           )}
    //         </div>
    //       </div>
    //     );
    //   case "Events":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Events</span>
    //           <span className="flex gap-4">
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "addEvent"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("addEvent")}
    //             >
    //               Add Event
    //             </button>
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "showEvents"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("showEvents")}
    //             >
    //               Show Events
    //             </button>
    //           </span>
    //         </div>
    //         <div className="mt-4">
    //           {activeComponent === "addEvent" ? (
    //             <EventsComponent />
    //           ) : (
    //             <ShowEvents />
    //           )}
    //         </div>
    //       </div>
    //     );
    //   case "Blogs":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Blogs</span>
    //           <span className="flex gap-4">
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "addBlog"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("addBlog")}
    //             >
    //               Add blog
    //             </button>
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "showBlogs"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("showBlogs")}
    //             >
    //               Show Blogs
    //             </button>
    //           </span>
    //         </div>
    //         <div className="mt-4">
    //           {activeComponent === "addBlog" ? <CreateBlogs /> : <ShowBlogs />}
    //         </div>
    //       </div>
    //     );
    //   case "Products Orders":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Products Orders</span>
    //         </div>
    //         <div className="mt-4">
    //           <ShowOrders />
    //         </div>
    //       </div>
    //     );
    //   case "Donations Orders":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Donations Orders</span>
    //         </div>
    //         <div className="mt-4">
    //           <ShowDonationsOrders />
    //         </div>
    //       </div>
    //     );

    //   case "Stories":
    //     return (
    //       <div className="flex flex-col">
    //         <div className="flex justify-between items-center">
    //           <span className="text-4xl font-bold font-prata">Stories</span>
    //           <span className="flex gap-4">
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "addStories"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("addStories")}
    //             >
    //               Add Stories
    //             </button>
    //             <button
    //               className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
    //                 activeComponent === "showStories"
    //                   ? "bg-orange-600"
    //                   : "bg-orange-500"
    //               } text-white`}
    //               onClick={() => setActiveComponent("showStories")}
    //             >
    //               Show Stories
    //             </button>
    //           </span>
    //         </div>
    //         <div className="mt-4">
    //           {activeComponent === "addStories" ? (
    //             <CreateStories />
    //           ) : (
    //             <ShowStories />
    //           )}
    //         </div>
    //       </div>
    //     );
    //   case "Stat Control":
    //     return (
    //       <div className="flex flex-col">
    //         <span className="text-4xl font-bold font-prata">Stats Control </span>
    //         <div>
    //           <StatsCard />
    //         </div>
    //         <div>
    //           <RevenueChart />
    //         </div>
    //       </div>
    //     );
    //   case "E-Commerce":
    //     return (
    //       <div className="flex flex-col">
    //         <span className="text-4xl font-bold font-prata">E-Commerce </span>
    //         <div>
    //           <StatsCard />
    //         </div>
    //         <div>
    //           <ProductDashboard />
    //         </div>
    //       </div>
    //     );
    //   case "Settings":
    //     return <div>Settings Content</div>;
      default:
        return (
          <div className="flex flex-col">
            <span className="text-4xl text-red-500 font-bold mb-10">{activeMenu}</span>
            
            <div className="grid grid-cols-1 gap-8">
              {/* Dummy content to test scrollability */}
              {Array(15).fill().map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold mb-4">{activeMenu} Section {index + 1}</h2>
                  <div className="h-[100px] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    {activeMenu} Content Area {index + 1}
                  </div>
                  <p className="text-gray-700 mb-4">
                    This is sample content for the {activeMenu} section. This text is here to demonstrate
                    the scrollable area of the admin layout. You can replace this with actual content
                    for each section as needed.
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };
  return (
    <>
      <div
        className="w-full h-screen relative flex flex-col justify-center items-center"
        
      >

        <div className="w-full absolute flex justify-center h-full items-center">
          <div className="h-full w-full  bg-[#fdebe7]">
            {/* left sidebar */}
            <div className="w-[22%] h-full flex flex-col items-center border-r-2 border-red-500 fixed left-0 top-0">
              <Link to="/" className="w-[90%]  flex  items-center mt-6 ">
                <img src={logo} alt="" />
              </Link>
              <div
                className="w-[90%] bg-[#fdebe7] h-[calc(100vh-100px)] overflow-hidden"
              >
                <ul className="space-y-4 mt-6 ">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          handleMenuClick(item.name, item.dropdown)
                        }
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-r-xl text-gray-700 transition-all cursor-pointer ${
                          activeMenu === item.name
                            ? "bg-[#ef5034] font-medium text-white"
                            : "hover:bg-[#FFECC5]"
                        }`}
                      >
                        <span className="flex items-center text-[14px] font-bold  gap-3">
                          <span
                            className={`${
                              activeMenu === item.name
                                ? "text-white"
                                : "text-gray-700"
                            }`}
                          >
                            {item.icon}
                          </span>
                          {item.name}
                        </span>
                        {item.dropdown && (
                          <IoIosArrowDown
                            size={16}
                            className={`transition-transform ${
                              openMenus[item.name] ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* top bar */}
            <div className="w-[78%] flex absolute h-[91px] top-0 left-[22%] justify-between items-center px-4 py-1 bg-[#FFFFFF]">
            
               <div className="relative">
                 <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
                 <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-[461px] bg-[#F8F8F8] text-gray-700 placeholder-gray-500 focus:outline-none"
                />
              </div> 

              {/* Right Section */}
              <div className="flex items-center space-x-8">
               
                {/* <div
                  className="flex items-center bg-[#ffecc5] rounded-full p-1 cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <div
                    className={`p-2 rounded-full ${
                      !darkMode ? "bg-orange-500 text-white" : "text-[#84818a]"
                    }`}
                  >
                    <FaSun />
                  </div>
                  <div
                    className={`p-2 rounded-full ${
                      darkMode ? "bg-orange-500 text-white" : "text-[#84818a]"
                    }`}
                  >
                    <FaMoon />
                  </div>
                </div>

                
                <div className="relative">
                  <FaBell className="text-[#84818a] text-xl cursor-pointer" />
                  <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs border border-white rounded-full w-4 h-4 flex justify-center items-center">
                    3
                  </span>
                </div> */}

                {/* Help Icon */}
                {/* <FaQuestionCircle className="text-[#84818a] text-xl cursor-pointer" /> */}

                {/* User Profile */}
                <div className="flex items-center gap-1 cursor-pointer">
                  <div
                    className="w-12 h-12 rounded-full text-xl flex justify-center items-center font-prata font-bold text-white bg-orange-500 cursor-pointer"
                    onClick={toggleDropdown}
                  >AD</div>
                  <span>
                  </span>
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute top-12 right-0 mt-2 w-52 bg-white z-50 shadow-lg rounded-lg border"
                    onMouseLeave={toggleDropdown}
                  >
                    <ul className="flex flex-col text-md space-y-1 m-2">
                      {/* <Link
                            to="/profile"
                            className="px-4 py-2 cursor-pointer hover:bg-[#eb852c] hover:text-white rounded-full transition duration-300"
                          >
                            My Profile
                          </Link>
                          <Link
                            to="/donation-history"
                            className="px-4 py-2 cursor-pointer hover:bg-[#eb852c] hover:text-white rounded-full transition duration-300"
                          >
                            Donation History
                          </Link> */}
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-[#eb852c] hover:text-white rounded-full transition duration-300"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
                {/* Dropdown Arrow */}
              </div>
            </div>
            <div className="w-[78%] absolute top-[91px] left-[22%] h-[calc(100vh-91px)] overflow-y-auto">
              <div className="w-full p-6">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;

