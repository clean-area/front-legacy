import { ReactNode } from "react";
import BackButton from "../etc/BackButton";

export default function WriteReviewLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="absolute top-0 bg-white w-full max-w-[410px] min-h-screen">
      <div className="w-full h-[72px] flex justify-between items-center px-[25px] border-b-[1px] border-[#D1D1D6]">
        <BackButton />
        <p className="text-[16px] text-[#1C1C1E] font-semibold">리뷰작성</p>
        <div />
      </div>
      <div className="w-full h-screen pb-[20px] px-[25px]">{children}</div>
    </div>
  );
}
