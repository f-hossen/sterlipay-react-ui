import { EaseIn } from "../anim/EaseIn";
import { Features } from "./Features";
import { FeaturesCards } from "./FeaturesCards";

export const Section2 = () => {
  return (
    <div className="my-20 flex flex-col gap-20 overflow-hidden lg:my-2">
      {/* stats */}
      <EaseIn>
        <div className="text-dark mx-auto flex w-fit flex-col justify-center gap-15 text-left lg:flex-row">
          <div className="flex items-center gap-5 text-left">
            <span className="text-lg font-extrabold first-letter:text-3xl lg:text-[28px] lg:first-letter:text-5xl">
              100K
            </span>
            <span className="text-[18px]">Active Users</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-lg font-extrabold first-letter:text-3xl lg:text-[28px] lg:first-letter:text-5xl">
              1M+
            </span>
            <span className="text-[18px]">Transactions Processed</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-lg font-extrabold first-letter:text-3xl lg:text-[28px] lg:first-letter:text-5xl">
              5
            </span>
            <span className="text-[18px]">Years of Secure Banking</span>
          </div>
        </div>
      </EaseIn>
      {/* feature */}
      <EaseIn>
        <Features />
      </EaseIn>
      {/* cards */}
      <EaseIn>
        <FeaturesCards />
      </EaseIn>
    </div>
  );
};
