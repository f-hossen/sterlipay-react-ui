import { Btn } from "../btn/Btn";
import Device from "@assets/device.png";
import HeroBottom from "@assets/hero-bottom.png";
export const Hero = () => {
  return (
    <div className="relative flex h-screen min-h-[800px] flex-col items-center justify-center lg:h-[900px]">
      <div className="flex flex-col items-center gap-14 pt-14 lg:h-screen lg:flex-row lg:items-start lg:gap-0">
        {/* cta */}
        <div className="flex flex-1 flex-col justify-center gap-10 lg:items-start lg:gap-10">
          <h1 className="m-0 text-3xl lg:mt-5 lg:text-[55px]">
            Your Money <br />
            Always in Your Control
          </h1>
          <a href="/signup">
            <Btn className="bg-green-200 text-2xl">Start Saving</Btn>
          </a>
        </div>

        {/* device */}
        <div className="flex-1">
          <img className="w-[632px]" src={Device} alt="" />
        </div>
      </div>

      {/* hero bottom */}
      <div className="">
        <img
          className="absolute left-1/2 -z-10 hidden w-[1440px] -translate-x-1/2 px-4 lg:bottom-30 lg:flex"
          src={HeroBottom}
          alt="a feature image"
        />
      </div>
    </div>
  );
};
