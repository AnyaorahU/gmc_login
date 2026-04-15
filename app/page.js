import Image from "next/image";
import Login from "./components/Login";

export default function Home() {
  return (
    <div className="bg-white text-black h-screen">
      <Login />
    </div>
  );
}
