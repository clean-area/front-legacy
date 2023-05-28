import { BluePhrase, PurplePhrase } from "@/app/etc/Emphasis";
import FillStar from "../etc/FillStar";
import FillHalfStar from "../etc/FillHalfStar";
import EmptyStar from "../etc/EmptyStar";
import ReviewBox from "../etc/ReviewBox";
import Image from "next/image";
import Link from "next/link";

interface DetailPageProps {
  params: {
    id: number;
  };
}

export default function DetailPage({ params }: DetailPageProps) {
  return (
    <div className="divide-y-[1px] divide-[#D1D1D6]">
      <div className="pb-[16px] pt-[20px]">
        <div className="flex space-x-[8px] mb-[8px]">
          <BluePhrase phrase="일자리" />
          <BluePhrase phrase="19 - 39세" />
          <PurplePhrase phrase="신청기간!" />
        </div>
        <div className="bg-[#E8F5FF] py-[26px] rounded-[12px] flex flex-col justify-center items-center">
          <p className="text-[16px] text-[#3592FF] font-semibold w-[80%] text-center">
            청년활력 프로그램 운영
          </p>
          <p className="text-[14px] text-[#48484A] mt-[4px] w-[80%] text-center">
            (청년활동지원센터 운영)
          </p>
        </div>
      </div>

      <div className="py-[20px] px-[14px]">
        <p className="text-[14px] text-[#48484A]">
          자율적인 구직활동과 사회참여, 심리/정서지원 등 청년활력 프로그램 운영
          및 서울청년센터 지원을 통해 청년안전망 구축
        </p>
      </div>

      <div className="py-[36px] space-y-[36px]">
        <div>
          <div className="flex items-center space-x-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px] inline"
            >
              <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM11 11H13V13H11V11ZM16 11H18V13H16V11Z"></path>
            </svg>
            <p className="text-[16px] text-[#3A3A3C] font-bold">신청기간</p>
          </div>
          <ul className="list-disc pl-4 text-[14px] text-[#48484A] ml-[7px] mt-[16px]">
            <li>수시모집(미정)</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-[10px]">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px] inline"
            >
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
            </svg> */}
            <Image
              src={"/icon/person.png"}
              alt={"person"}
              width={20}
              height={20}
            />
            <p className="text-[16px] text-[#3A3A3C] font-bold">지원대상</p>
          </div>
          <ul className="list-disc pl-4 text-[14px] text-[#48484A] space-y-[8px] ml-[7px] mt-[16px]">
            <li>{"연령 : 만 19세 - 39세"}</li>
            <li>{"학력 : 제한없음"}</li>
            <li>{"전공 : 제한없음"}</li>
            <li>{"취업상태 : 제한없음"}</li>
            <li>{"특화분야 : 제한없음"}</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px] inline"
            >
              <path d="M20 2C20.5523 2 21 2.44772 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z"></path>
            </svg>
            <p className="text-[16px] text-[#3A3A3C] font-bold">신청방법</p>
          </div>
          <ul className="list-disc pl-4 text-[14px] text-[#48484A] space-y-[8px] ml-[7px] mt-[16px]">
            <li>{"사이트 접속 후 프로그램 별 개별 접수 진행"}</li>
          </ul>
          <button className="w-full rounded-[8px] border-[1px] border-[#3592FF] text-[15px] text-[#3592FF] font-semibold py-[6px] mt-[12px] hover:bg-[#3592FF] hover:text-white leading-[24px]">
            신청 사이트로 이동하기
          </button>
        </div>

        <div>
          <div className="flex items-center space-x-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px] inline"
            >
              <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
            </svg>

            <p className="text-[16px] text-[#3A3A3C] font-bold">구비서류</p>
          </div>
          <ul className="list-disc pl-4 text-[14px] text-[#48484A] space-y-[8px] ml-[7px] mt-[16px]">
            <li>{"공고 참조"}</li>
          </ul>
        </div>
      </div>
      <div className="py-[28px]">
        <p className="text-[16px] text-[#1C1C1E] font-semibold">
          정책 후기 <span className="font-normal">(5)</span>
        </p>
        <p className="text-[14px] text-[#48484A] mt-[4px]">
          청년활력 프로그램 운영 (청년활동지원센터 운영)
        </p>
        <div className="flex justify-center space-x-[17.76px] mt-[28px] mb-[20px]">
          <FillStar bigSize />
          <FillStar bigSize />
          <FillStar bigSize />
          <FillHalfStar bigSize />
          <EmptyStar bigSize />
        </div>
        <p className="text-center text-[14px] text-[#8E8E93] mb-[28px]">
          <span className="text-[#3592FF]">4.7</span> / 5
        </p>
        <Link href={"./writereview/2"}>
          <button className="w-full bg-[#3592FF] rounded-[8px] text-[15px] text-[white] font-semibold py-[6px] leading-[24px]">
            후기 작성하기
          </button>
        </Link>
      </div>

      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
    </div>
  );
}
