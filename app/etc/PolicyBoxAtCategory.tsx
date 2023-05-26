import Image from "next/image";
import { BluePhrase } from "./Emphasis";

export default function PolicyBoxAtCategory() {
  return (
    <div className="w-full px-[12px]">
      <div className="flex">
        <div className="w-[104px] h-[104px] flex justify-center items-center bg-[#E8F5FF] rounded-[12px]">
          <Image
            src="https://i2-prod.liverpoolecho.co.uk/incoming/article26829395.ece/ALTERNATES/s1200/1_County-Cat-Rescue-and-Sanctuary-in-Walton-Photo-by-Colin-Lane.jpg"
            width={104}
            height={104}
            alt="cat"
          />
        </div>
      </div>

      <div className="flex space-x-[8px] mt-[8px]">
        <BluePhrase phrase={"생활지원"} />
        <BluePhrase phrase={"19 - 24세"} />
      </div>
      <p className="font-bold text-[14px] mt-[6px] overflow-hidden whitespace-nowrap overflow-ellipsis leading-[22px] mb-[8px]">
        {"청년 대중교통비 지원 사업"}
      </p>
      <p className="text-[12px] text-[#8E8E93] font-normal">
        {"신청기간| 23.03.28 - 23.05.31"}
      </p>
    </div>
  );
}
