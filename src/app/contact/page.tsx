"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

export function page() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-2">
      <div>
        <div className="text-center mt-60">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-6xl">
            Contact Us
          </h1>

          <h2 className="mt-5 text-lg text-gray-600 font-semibold flex items-center justify-center">
            We are here to help with any questions about our courses, programs,
            or events. Reach out and let us know how we can assist you in your
            musical journey.
          </h2>

          <div className=" pt-8 text-center w-1/2 ml-72">

    

            <form action="">
              <input
                className=" flex flex-col w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-zinc-800 text-gray border-none"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <br />
              <br />
              <textarea
                className=" flex flex-col w-full p-9 items-center gap-3 rounded-md border-[1px] border-border_sm bg-zinc-800 text-white border-none"
                name="message"
                id="message"
                placeholder="Your message"
              ></textarea>
            </form>
          </div>

          <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-900 bg-teal-400 hover:bg-gray-100 transition duration-200"
        >
          Submit
        </Link>
      </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />
        </div>
      </div>
    </div>
  );
}

export default page;
