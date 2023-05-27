import { ReactNode } from "react";

import OptionButton from "./etc/OptionButton";
import BackButton from "../etc/BackButton";

export default function DetailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-0 bg-white w-full max-w-[410px] min-h-screen">
      <div className="w-full h-[72px] flex justify-between items-center px-[25px] border-b-[1px] border-[#D1D1D6]">
        <BackButton />
        <p className="text-[16px] text-[#1C1C1E] font-semibold">상세정보</p>
        <OptionButton />
      </div>
      <div className="w-full h-screen pb-[20px] px-[25px]">{children}</div>
    </div>
  );
}
