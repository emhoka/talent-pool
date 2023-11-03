import React, { ReactNode } from "react";
import authImage from "../../assets/images/auth.svg";
import zinioLogo from "../../assets/images/zinio-logo.png";
import PropTypes from "prop-types";

const AuthLayout = ({
  children,
  showTabPanels,
  title,
  subTitle,
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex justify-center font-DMSans">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col">
          <div>
            <img src={zinioLogo} className="mx-auto ml-0" alt="" />
          </div>
          {showTabPanels ? (
            <ul className="flex justify-start items-start my-2 mb-6 gap-4">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer py-1 ${
                    activeTab === index
                      ? "border-b-4 border-green font-bold"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}

          <div className="flex flex-col flex-grow">
            <div className="max-w-sm break-words">
              <h1 className="text-2xl xl:text-3xl font-bold">{title}</h1>
              <h1 className="text-md xl:text-lg mt-2">{subTitle}</h1>
            </div>
            <div className="flex-1 mt-8">{children}</div>
          </div>
        </div>
        <div
          className="flex-1 text-center hidden lg:flex"
          style={{
            backgroundImage: `url(${authImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  tabs: PropTypes.string,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.string,
  children: ReactNode,
  showTabPanels: PropTypes.bool.isRequired,
};

export default AuthLayout;
