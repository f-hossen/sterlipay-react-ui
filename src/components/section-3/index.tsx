import Img1 from "@assets/img1-section-3.png";
import Img2 from "@assets/img2-section-3.png";
import Img3 from "@assets/img3-section-3.png";

import { BtnLearnMore } from "../btn/Btn";
import { EaseIn } from "../anim/EaseIn";

export const Section3 = () => {
  return (
    <div className="mt-14 flex-col justify-between gap-10">
      {/* 1 */}
      <EaseIn>
        <div className="flex flex-col items-start justify-between lg:flex-row">
          <img
            className="w-[400px] lg:w-[660px]"
            src={Img1}
            alt="feature image 2"
          />
          <img
            className="mt-6 hidden w-[660px] lg:flex"
            src={Img2}
            alt="feature image 2"
          />
        </div>
      </EaseIn>
      {/* 2 */}
      <div className="flex flex-col justify-between gap-10 text-xs lg:flex-row lg:gap-16 lg:text-base">
        {/* left */}
        <div className="flex w-full flex-col justify-between gap-4 lg:w-1/2 lg:gap-4">
          <h1 className="text-xl font-bold lg:text-[30px]">
            Take Control of Your Finances with Ease
          </h1>
          <p>
            Manage your money like a pro with SterliPay. Track your income,
            monitor expenses, and set savings goals—all in one place. With
            real-time insights and a sleek interface, financial freedom is just
            a tap away.
          </p>
          <BtnLearnMore />
        </div>

        {/* right */}
        <div className="flex w-full flex-col justify-between gap-4 lg:w-1/2 lg:gap-4">
          <h1 className="text-xl font-bold lg:text-[30px]">
            A simple savings account with no monthly fees and easy access.
          </h1>
          <p>
            Experience banking without the hassle. Our intuitive platform lets
            you manage your accounts, transfer funds, and pay bills with just a
            few taps. Your security is our priority.
          </p>
          <BtnLearnMore />
        </div>
      </div>

      {/* 3 */}
      <EaseIn>
        <div className="mt-14 flex flex-col items-center gap-10 lg:flex-row">
          {/* left */}
          <div className="w-[400px] lg:w-1/2">
            <img src={Img3} alt="feature image 2" />
          </div>

          {/* right */}
          <div className="flex w-full flex-col justify-center gap-4 text-xs lg:w-1/2 lg:text-base">
            <h1 className="text-xl font-bold lg:text-[30px]">
              Smart Financial Insights at Your Fingertips
            </h1>
            <p>
              Track market trends, manage investments, and make smarter
              financial decisions with real-time insights.
            </p>
            <BtnLearnMore />
          </div>
        </div>
      </EaseIn>
    </div>
  );
};
