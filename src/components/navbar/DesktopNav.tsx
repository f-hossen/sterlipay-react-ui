import { Link } from "react-router-dom";
import { Btn } from "../btn/Btn";

export const DesktopNav = () => {
  return (
    <div className="my-6 hidden h-[50px] w-[1080px] items-center justify-between rounded-2xl border p-2 text-[18px] lg:flex">
      {/* lgoo */}
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img src="./logo.png" alt="logo" className="h-8" />
          <img src="./Sterlipay.png" alt="logo" className="h-5" />
        </div>
      </Link>

      {/* nav items */}
      <div>
        <a className="hover:text-secondary cursor-pointer p-2 duration-300 ease-in-out hover:underline hover:underline-offset-8">
          Home
        </a>
        <a className="hover:text-secondary cursor-pointer p-2 duration-300 ease-in-out hover:underline hover:underline-offset-8">
          Security
        </a>
        <a className="hover:text-secondary cursor-pointer p-2 duration-300 ease-in-out hover:underline hover:underline-offset-8">
          Strategies
        </a>
        <a className="hover:text-secondary cursor-pointer p-2 duration-300 ease-in-out hover:underline hover:underline-offset-8">
          Testimonials
        </a>
        <a className="hover:text-secondary cursor-pointer p-2 duration-300 ease-in-out hover:underline hover:underline-offset-8">
          FAQ
        </a>
      </div>
      {/* auth */}
      <div className="flex items-center gap-2">
        <Link to={"/login"}>
          <button className="cursor-pointer hover:underline">Log In</button>
        </Link>
        <Link to={"/signup"}>
          <Btn>Sign Up</Btn>
        </Link>
      </div>
    </div>
  );
};
