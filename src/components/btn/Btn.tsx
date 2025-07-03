import { ReactNode } from "react";
import { Link } from "react-router-dom";

type BtnProps = {
  children?: ReactNode;
  className?: string;
};

export const Btn: React.FC<BtnProps> = ({ children, className = "" }) => {
  return (
    <>
      <button
        className={`bg-primary text-light active:text-dark active:bg-light cursor-pointer rounded-2xl px-4 py-1 text-xl transition-all duration-200 ease-in-out hover:underline ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export const BtnLearnMore = () => {
  return (
    <Link to={"/signup"}>
      <button className="text-dark hover:text-primary cursor-pointer rounded-lg border px-2 py-1 text-xs duration-200 hover:ease-in-out lg:text-base lg:font-bold">
        Learn more
      </button>
    </Link>
  );
};
