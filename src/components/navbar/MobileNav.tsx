import { useEffect, useState } from "react";
import { Btn } from "../btn/Btn";
import { AnimatePresence, motion } from "motion/react";
import { MenuBtn } from "./MenuBtn";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  const [show, setShow] = useState(false);

  const ToggleShow = () => {
    setShow(!show);
  };

  // disable scrolling when show nav
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className="flex h-[60px] w-screen items-center lg:hidden">
      <div className="m-4 cursor-pointer">
        <Link to={"/"}>
          <img
            onClick={() => setShow(false)}
            className="h-8"
            src="./logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="ml-auto flex w-fit flex-col">
        <div className="absolute top-0 right-4 z-100 m-2">
          <MenuBtn show={show} ToggleShow={ToggleShow} />
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{
                y: -100,
                rotateX: 100,
                height: "0",
                overflow: "hidden",
                opacity: 0,
              }}
              animate={{
                y: 0,
                rotateX: 0,
                height: "100%",
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              exit={{
                rotateX: 100,
                y: -100,
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-light absolute inset-0 z-20 flex h-screen w-screen flex-col backdrop-blur-2xl"
            >
              <div className="mt-40 flex h-full flex-col items-end gap-20 px-10">
                <nav className="text-dark flex w-full flex-col gap-5 text-2xl">
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    Home
                  </motion.a>
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    Security
                  </motion.a>
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    Strategies
                  </motion.a>
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    Testimonials
                  </motion.a>
                  <motion.a
                    onClick={ToggleShow}
                    className="cursor-pointer active:text-green-800 active:underline active:underline-offset-8"
                    whileTap={{
                      x: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                  >
                    FAQ
                  </motion.a>
                </nav>
                {/* auth */}
                <div
                  className="flex w-full items-center gap-2 text-xl"
                  onClick={ToggleShow}
                >
                  <Link to={"/login"}>
                    <button className="cursor-pointer hover:underline">
                      Log In
                    </button>
                  </Link>
                  <Link to={"/signup"}>
                    <Btn>Sign Up</Btn>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
