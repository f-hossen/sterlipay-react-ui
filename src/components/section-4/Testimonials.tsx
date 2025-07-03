import { BsQuote } from "react-icons/bs";
import Client1 from "@assets/Client-1.jpg";
import Client2 from "@assets/client-2.jpg";
import Client3 from "@assets/client-3.jpg";
import Client4 from "@assets/client-4.jpg";
import { EaseIn } from "../anim/EaseIn";

export const Testimonials = () => {
  return (
    <EaseIn>
      <div className="mx-auto my-30 flex max-w-[1020px] flex-col items-center justify-center text-xs lg:gap-y-10 lg:text-base">
        {/* heading */}
        <div className="flex w-full flex-col justify-between gap-2 lg:flex-row">
          <p className="text-xl font-extrabold lg:w-1/2 lg:text-2xl">
            Hear from Our Customers
          </p>
          <p className="text-gray text-xs lg:w-1/2 lg:text-sm">
            Discover how our users benefit from seamless banking and real-time
            insights
          </p>
        </div>

        {/* feedbacks */}
        <div className="grid w-full gap-y-5 lg:grid-cols-2 lg:gap-x-16">
          <div className="mt-8 flex flex-col gap-5">
            <BsQuote className="text:base lg:text-xl" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
              placeat eos numquam nesciunt in vitae, necessitatibus magnam
              consequuntur dolore natus odit? Quos, consequatur.
            </p>
            <div className="flex gap-5">
              <img
                className="h-[50px] w-[50px] rounded-full object-cover lg:h-20 lg:w-20"
                src={Client1}
                loading="lazy"
                alt="Client image"
              />
              <div className="flex flex-col justify-center">
                <p>Lorem Ipsum</p>
                <p className="text-gray">Freelancer</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <BsQuote className="text:base lg:text-xl" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
              placeat eos numquam nesciunt in vitae, necessitatibus magnam
              consequuntur dolore natus odit? Quos, consequatur.
            </p>
            <div className="flex gap-5">
              <img
                className="h-[50px] w-[50px] rounded-full object-cover lg:h-20 lg:w-20"
                src={Client2}
                loading="lazy"
                alt="Client image"
              />
              <div className="flex flex-col justify-center">
                <p>Lorem Ipsum</p>
                <p className="text-gray">Freelancer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-x-16 lg:grid-cols-2">
          <div className="mt-8 flex flex-col gap-5">
            <BsQuote className="text:base lg:text-xl" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
              placeat eos numquam nesciunt in vitae, necessitatibus magnam
              consequuntur dolore natus odit? Quos, consequatur.
            </p>
            <div className="flex gap-5">
              <img
                className="h-[50px] w-[50px] rounded-full object-cover lg:h-20 lg:w-20"
                src={Client3}
                loading="lazy"
                alt="Client image"
              />
              <div className="flex flex-col justify-center">
                <p>Lorem Ipsum</p>
                <p className="text-gray">Freelancer</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <BsQuote className="text:base lg:text-xl" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, a aspernatur vel eveniet, ullam voluptatem voluptate
              placeat eos numquam nesciunt in vitae, necessitatibus magnam
              consequuntur dolore natus odit? Quos, consequatur.
            </p>
            <div className="flex gap-5">
              <img
                className="h-[50px] w-[50px] rounded-full object-cover lg:h-20 lg:w-20"
                src={Client4}
                loading="lazy"
                alt="Client image"
              />
              <div className="flex flex-col justify-center">
                <p>Lorem Ipsum</p>
                <p className="text-gray">Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EaseIn>
  );
};
