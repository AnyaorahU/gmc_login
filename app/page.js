import Image from "next/image";
import Login from "./components/Login";
import Counter from "./state-management/useState";
import Message from "./state-management/text";

export default function Home() {
  return (
    <div className="bg-white text-black h-screen">
      {/* <Login /> */}
      <Counter />
      <Message />
    </div>
  );
}
