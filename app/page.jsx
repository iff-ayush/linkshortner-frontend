import NavBar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen w-full text-center items-center">
        <span className="block font-light text-3xl font-pops pt-40">
          social media's best
        </span>
        <h1 className="font-pops text-7xl font-bold">Link Shortner UT</h1>
        <label
          className="mx-auto mt-10 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="enter your url here"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button className="w-3/4 md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center transition-all opacity-1 valid:">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Generate
                </span>
              </div>
            </div>
          </button>
        </label>

        {/* Some related information regarding URL Shortner */}
      </div>
      <div className="container h-screen w-full bg-blue-500 text-center px-64">
        <label className="relative top-10 -left-72 font-ubuntu text-8xl text-white">
          Why link Shortner?
        </label>
        <p className="font-pops pt-32 text-left text-lg text-white">
          A link shortener is a valuable tool that transforms long URLs into
          compact, easily shareable links. This is particularly useful for
          social media, email, and text messaging where space is limited. In
          addition to saving space, link shorteners often provide analytics,
          allowing users to track the performance and reach of their links. They
          also enable customization, which can enhance brand recognition and
          improve user trust. Overall, link shorteners offer a convenient way to
          share links efficiently while gaining valuable insights into user
          engagement.
        </p>
        <hr className="h-2 w-3/5 border-black m-auto mt-14 text-white" />
      </div>
      <footer className="text-center">
        <label className="font-pops text-lg font-light">
          Created by{" "}
          <span className="font-ubuntu text-5xl font-bold">munchFront</span>{" "}
          <sup>&copy;</sup>
        </label>
      </footer>
    </>
  );
};

export default Home;
