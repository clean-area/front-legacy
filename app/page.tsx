import ImgSlider from "./etc/ImgSlider";
import OneLineCommentContent from "./etc/OneLineCommentContent";
import OneLineCommentPreViewBox from "./etc/OneLineCommentPreViewBox";
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
      <OneLineCommentPreViewBox
        title={
          <p className="text-[16px] font-semibold text-[#1C1C1E]">
            사용자들의 <span className="text-[#3592FF]">한줄평 리뷰</span>를
            확인해보세요!
          </p>
        }
        comment={"다른 사용자들의 리뷰를 통해, 나에게 맞는 정책을 찾아보세요!"}
      >
        <div className="flex overflow-auto space-x-[16px]">
          <OneLineCommentContent />
          <OneLineCommentContent />
          <OneLineCommentContent />
          <OneLineCommentContent />
        </div>
      </OneLineCommentPreViewBox>
    </>
  );
}
