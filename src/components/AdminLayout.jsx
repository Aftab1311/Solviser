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
import { Link } from "react-router-dom";
import { MdPermMedia } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import TabNavigation from "./TabNavigation";
import PurchaseHistory from "./PurchaseHistory";
import ProfileCard from "./ProfileCard";
import RiskAssessment from "./RiskAssessment";
import RiskScoreWidget from "./RiskScoreWidget";
import AIPredictionCard from "./AIPredictionCard";
import DefaultsAndDisputes from "./DefaultsAndDisputes";
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
    { name: "AI-Based Risk Analysis", icon: <FaBrain size={28} />, dropdown: true  },
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
        case "Specific Suppliers Network":
        return (
          <main className="overflow-hidden bg-stone-50">
         <div className="flex max-md:flex-col">
         <section className="w-full">
          <div className="flex flex-col items-center w-full max-md:max-w-full">
          
            <div className="mt-8 w-full max-w-[1031px] max-md:max-w-full">
              <h1 className="text-3xl font-bold text-neutral-800 max-md:max-w-full">
                Supplier & Buyer Profile
              </h1>
              <ProfileCard />
            </div>
            <TabNavigation />
            <PurchaseHistory />
          </div>
        </section>
      </div>
    </main>
        )
        case "AI-Based Risk Analysis":
        return (
          <div className="flex ">
           
            <div className="mt-4">
            <RiskAssessment />
            <AIPredictionCard/>
            <DefaultsAndDisputes/>
              <div className="flex  ">
                <RiskScoreWidget/>
                
              </div>
            </div>
          </div>
        )
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
            {/* Layout */}
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

