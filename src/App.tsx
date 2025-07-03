import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { AnimatePresence } from "motion/react";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";

const App = () => {
  const location = useLocation();
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-4 lg:px-6">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
