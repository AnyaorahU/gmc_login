import Image from "next/image";
import Login from "./components/Login";
import Counter from "./state-management/useState";
import Message from "./state-management/text";
import Mapping from "./state-management/mapping";
import DoorDash from "./components/dordash";

export default function Home() {
  return (
    <div className="bg-white text-black h-[100%]">
      {/* <Login /> */}
      {/* <Counter />
      <Message />
      <Mapping /> */}
      <DoorDash />
    </div>
  );
}
