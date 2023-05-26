import ImgSlider from "./etc/ImgSlider";
import PolicyBoxAtHome from "./etc/PolicyBoxAtHome";
import SectionBox from "./etc/SectionBox";

export default function MainPage() {
  return (
    <>
      <ImgSlider />
      <SectionBox
        title={
          <p className="text-[16px] font-semibold text-[#1C1C1E]">
            곧 <span className="text-[#3592FF]">마감</span>되는 정책들이 있어요!
          </p>
        }
        url={"/hello"}
      >
        <div className="flex overflow-auto space-x-[16px]">
          <div className="w-[9px]" />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
        </div>
      </SectionBox>
      <SectionBox
        title={
          <p className="text-[16px] font-semibold text-[#1C1C1E]">
            사람들이 <span className="text-[#3592FF]">주목</span>하고 있는
            정책들이 있어요!
          </p>
        }
        url={"/hello"}
      >
        <div className="flex overflow-auto space-x-[16px]">
          <div className="w-[9px]" />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
          <PolicyBoxAtHome />
        </div>
      </SectionBox>
    </>
  );
}
