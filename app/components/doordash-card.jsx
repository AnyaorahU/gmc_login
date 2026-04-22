import { FaLongArrowAltRight } from "react-icons/fa";

export default function HeroCard({ image, heading, paragraph, btnText }) {
  return (
    <div className="w-60 border flex flex-col items-center justify-center p-2">
      <div className="w-40 h-40 border p-2 flex justify-center items-center">
        <img src={image} alt="" className="w-full object-cover object-center" />
      </div>
      <div className="text-center space-y-2">
        <h4 className="text-3xl font-semibold">{heading}</h4>
        <p className="">{paragraph}</p>
        <button className="flex cursor-pointer text-red-500 font-semibold gap-2 px-3 items-center py-1 mx-auto">
          {btnText}
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
