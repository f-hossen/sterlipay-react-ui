import Card1 from "@assets/card-1.png";
import Card2 from "@assets/card-2.png";
import Card3 from "@assets/card-3.png";

export const FeaturesCards = () => {
  return (
    <div className="text-light flex flex-col items-center gap-5 overflow-hidden overflow-x-auto text-xs lg:flex-row lg:text-lg">
      {/* 1 */}
      <div className="relative">
        <img
          className="max-w-[300px] lg:max-w-[445px]"
          src={Card1}
          alt="feauture card"
        />
        <div className="absolute top-0 left-6 z-20 mt-[60%] flex flex-col gap-3">
          <p className="text-lg font-bold">Everyday Saver</p>
          <p className="text-light/70">
            Simple, flexible savings — grow at your pace
          </p>
          <p>
            Our Everyday Saver gives you instant access to your money with no
            minimum balance. Perfect for building a habit of saving, without the
            pressure.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="relative">
        <img
          className="max-w-[300px] lg:max-w-[445px]"
          src={Card2}
          alt="feauture card"
        />
        <div className="absolute top-0 left-6 z-20 mt-[60%] flex flex-col gap-3">
          <p className="text-lg font-bold">Fixed Term Account</p>
          <p className="text-light/70">Higher rates for committed savers</p>
          <p>
            Lock in a competitive rate by saving over 6, 12, or 24 months. Ideal
            if you want your savings to work harder while staying safely tucked
            away
          </p>
        </div>
      </div>
      {/* 3 */}

      <div className="relative">
        <img
          className="max-w-[300px] lg:max-w-[445px]"
          src={Card3}
          alt="feauture card"
        />
        <div className="absolute top-0 left-6 z-20 mt-[60%] flex flex-col gap-3">
          <p className="text-lg font-bold">Goal-Based Savings</p>
          <p className="text-light/70">Save for what matters most</p>
          <p>
            Create personalised saving goals — whether it’s a holiday, new home,
            or emergency fund
          </p>
        </div>
      </div>
    </div>
  );
};
