import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Auth
import Login from "./pages/registration/Login";
import Registration from "./pages/registration/Registration";
import ForgetPassword from "./pages/registration/ForgetPassword";
const App = () => {
  return (
    <BrowserRouter className="font-DMSans bg-lightPink">
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ForgetPassword />} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;
