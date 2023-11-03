import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/widgets/FormInput";
import Button from "../../components/widgets/Button";
import AuthLayout from "../../components/layout/AuthLayout";

const Registration = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Personal Account", "Organisation"];
  const personalFields = (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormInput title="First Name" type="text" className="mb-5" />
        <FormInput title="Last Name" type="text" className="mb-5" />
      </div>
      <FormInput title="Email address" type="email" className="mb-5" />
      <FormInput title="Password" type="password" className="mb-5" />
    </>
  );

  const organizationFields = (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormInput title="First Name" type="text" className="mb-5" />
        <FormInput title="Last Name" type="text" className="mb-5" />
      </div>
      <FormInput title="Company Name" type="text" className="mb-5" />
      <FormInput title="Company Industry" type="text" className="mb-5" />
      <FormInput title="Email address" type="email" className="mb-5" />
      <FormInput title="Password" type="password" className="mb-5" />
    </>
  );

  return (
    <AuthLayout
      title="Create Your Zinio Account"
      subTitle="You're one step away from your role"
      showTabPanels={true}
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div>
        {tabs.map((tab, index) => (
          <div key={index} className={activeTab === index ? "block" : "hidden"}>
            {activeTab === 0 ? personalFields : organizationFields}
          </div>
        ))}
      </div>

      <Button buttonText="Create account" className="mt-1" />
      <p className="mt-4 text-md text-gray-500 text-start font-medium">
        Already have a Zinio account?
        <Link to="/login" className="text-green ml-2 font-bold">
          Sign In
        </Link>
      </p>
    
    </AuthLayout>
  );
};

export default Registration;
