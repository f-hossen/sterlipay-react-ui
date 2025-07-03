import { Btn } from "../btn/Btn";
import { EaseIn } from "../anim/EaseIn";
import Logo from "/logo.png";
import { BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { SiBluesky } from "react-icons/si";
export const Footer = () => {
  return (
    <EaseIn>
      <div className="flex h-fit flex-col justify-between py-4 text-[10px] lg:flex-row lg:py-20 lg:text-sm">
        {/* left */}
        <div className="flex max-w-[400px] flex-col gap-5">
          <p className="text-xs">Feedback</p>
          <h1 className="text-xl font-bold lg:text-[28px]">
            Seeking personalised support? Request a call from our team
          </h1>
          <input
            className="w-full rounded-xl border px-2 py-4 text-[10px] focus-visible:border-transparent"
            type="text"
            placeholder="your name"
          />
          <input
            className="w-full rounded-xl border px-2 py-4 text-[10px] focus-visible:border-transparent"
            type="text"
            placeholder="Phone number"
          />
          <Btn className="w-fit py-1.5 text-center font-bold lg:px-6 lg:text-xl">
            Send a request
          </Btn>
        </div>

        {/* right */}
        <div className="mt-10 flex h-fit w-full flex-col gap-6 lg:mt-0 lg:w-1/2 lg:gap-20">
          <div className="items- flex flex-col justify-between gap-10 lg:flex-row">
            {/*  1 */}
            <div className="flex flex-col gap-1">
              <p className="text-xs">Info</p>
              <a href="/">Company</a>
              <a href="/">Careers</a>
              <a href="/">Branch Finder</a>
              <a href="/">Services</a>
              <a href="/">Accounts</a>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-1">
              <p className="text-xs">About us</p>
              <a href="/">Contact us</a>
              <a href="/">Privacy Policy</a>
              <a href="/">FAQs</a>
            </div>
            {/* 3 logo*/}
            <div className="hidden lg:inline">
              <img
                className="w-[30px] cursor-pointer"
                src={Logo}
                alt="logo icon"
              />
            </div>
          </div>
          {/* 4 */}
          <div>
            <p className="text-xs">Contact us</p>
            <a href="">+1 (999) 999-99-99</a>
            <a href="">hello@logoipsum.com</a>
            <a href="">London</a>
          </div>
          {/* 5 subscribe */}
          <div className="flex flex-col gap-5">
            <p className="text-xs">Subscription</p>
            <input
              className="w-full rounded-xl border px-2 py-4 text-[10px] focus-visible:border-transparent"
              type="text"
              placeholder="E-mail"
            />
          </div>

          {/* social */}
          <div className="flex items-center justify-between">
            {/* icons */}
            <div className="flex items-center gap-10 text-sm lg:text-2xl">
              <a>
                <SiBluesky />
              </a>
              <a>
                <BsInstagram />
              </a>
              <a>
                <BsYoutube />
              </a>
              <a>
                <BsTwitterX />
              </a>
            </div>
            {/* text */}
            <p className="text-[8px] opacity-60 lg:text-xs">
              © 2025 — Copyright
            </p>
          </div>
        </div>
      </div>
    </EaseIn>
  );
};
