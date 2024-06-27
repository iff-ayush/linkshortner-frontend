import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-28 w-11/12  p-4 m-auto flex justify-between">
      <h1 className="font-ubuntu text-4xl font-bold m-4 ">
        <Link href={process.env.INSTAGRAM}>munchFront.</Link>
      </h1>
      {/* <h1 className="p-6 rounded-3xl font-pops text-xl font-light border-2 border-black ">
        // Socials
      </h1> */}
    </div>
  );
};

export default NavBar;
