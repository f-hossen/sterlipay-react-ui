import { BtnLearnMore } from "../btn/Btn";
import StarIcon from "@assets/star-icon.svg";

export const Features = () => {
  return (
    <div className="mx-auto flex h-fit max-w-[1280px] flex-col justify-between gap-10 lg:flex-row">
      {/* left */}
      <div className="flex w-full flex-col justify-between gap-8 text-xs lg:w-1/2 lg:text-base">
        <h1 className="text-center text-xl font-extrabold lg:text-left lg:text-2xl">
          Banking Made Simple, Savings Made Easy
        </h1>
        <p>
          Our banking platform is designed to help you save more, spend smarter,
          and manage your finances effortlessly. Enjoy security, flexibility,
          and exclusive rewards, all in one place. With instant access,
          automated savings, and real-time insights
        </p>
        <BtnLearnMore />
      </div>

      {/* right */}
      <div className="flex flex-col justify-between gap-6 text-xs lg:ml-10 lg:w-1/3 lg:text-base">
        <div className="flex gap-5">
          <img className="h-8 lg:h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Transactions</span>
            <p>
              Make instant payments and transfers with ease, anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img className="h-8 lg:h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Secure</span>
            <p>
              Your money and data are safeguarded with top-tier encryption and
              security measures.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <img className="h-8 lg:h-12" src={StarIcon} />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Rewards</span>
            <p>
              Enjoy cashback, discounts, and special offers tailored to your
              spending habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
