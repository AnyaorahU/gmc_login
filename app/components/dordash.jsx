import { IoLocationOutline } from "react-icons/io5";
import {
  FaLongArrowAltRight,
  FaLocationArrow,
  FaRegUser,
} from "react-icons/fa";
import HeroCard from "./doordash-card";

export default function DoorDash() {
  return (
    <div>
      <header className="py-5 bg-[url('/hero_desktop.webp')] bg-cover h-[75vh] ">
        <nav className="fixed left-0 w-full">
          <div className="flex gap-2 justify-end px-10">
            <button className=" p-3 font-semibold rounded-full bg-red-500 text-white">
              Sign In
            </button>
            <button className=" p-3 font-semibold rounded-full bg-white">
              Sign Up
            </button>
          </div>
        </nav>

        {/*  container holding the text */}
        <div className="h-full w-full flex justify-center items-center border-4">
          {/* text */}
          <div className="text-white flex flex-col justify-center items-center gap-4">
            <div className="text-center">
              <span className="text-2xl">DOORDASH</span>
              <h1 className="text-3xl">$0 DELIVERY FEE ON FIRST ORDER</h1>
              <small>Other fee apply</small>
            </div>

            <div className="flex bg-white rounded-full text-black text-2xl gap-4 p-2 items-center justify-center ">
              <IoLocationOutline />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter delivery address"
                className="w-70 text-lg"
              />
              <div className="h-10 w-10 flex justify-center items-center text-white rounded-full bg-red-500">
                <FaLongArrowAltRight />
              </div>
            </div>

            <div className="flex gap-4">
              <button className="p-2 text-xs font-semibold bg-white flex items-center gap-2 text-black rounded-full">
                <FaRegUser />
                Sign in for saved address
              </button>
              <button className="p-2 text-xs font-semibold bg-white flex items-center gap-2 text-black rounded-full ">
                <FaLocationArrow />
                Use current Location
              </button>
            </div>
          </div>
        </div>
      </header>

      <div>
        <HeroCard />
      </div>
    </div>
  );
}
