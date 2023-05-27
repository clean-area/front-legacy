"use client";

import { useState } from "react";

import SearchInput from "./etc/SearchInput";
import PopularityPolicy from "./etc/PopularityPolicy";
import PopularitySearch from "./etc/PopularitySearch";
import BackButton from "../etc/BackButton";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="absolute top-0 bg-white w-full max-w-[410px] min-h-screen">
      <div className="px-[25px] mt-[32px] flex items-center justify-between">
        <BackButton />
        <SearchInput search={search} setSearch={setSearch} />
      </div>

      <div className="mt-[44px] mx-[25px]">
        <p className="text-[16px] font-semibold text-[#1C1C1E]">
          청정구역 <span className="text-[#3592FF]">인기 정책</span>
        </p>
      </div>
      <div></div>

      <div className="overflow-auto flex space-x-[16px] mt-[16px] mb-[32px] ">
        <div className="min-w-[9px]" />
        <PopularityPolicy />
        <PopularityPolicy />
        <PopularityPolicy />
        <PopularityPolicy />
      </div>

      <div className="h-[1px] mx-[25px] bg-[#D1D1D6] mb-[74px]" />

      <div className="mx-[25px]">
        <p className="text-[16px] font-semibold text-[#1C1C1E]">
          청정구역 인기 검색어
        </p>
        <p className="text-[#8E8E93] text-[12px] mt-[4px]">
          사용자들이 가장 많이 찾은 정책이에요!
        </p>
        <div className="divide-y-[1px] divide-[#D1D1D6] mt-[15px]">
          <PopularitySearch />
          <PopularitySearch />
          <PopularitySearch />
          <PopularitySearch />
        </div>
      </div>
    </div>
  );
}

// 루트 레이아웃(조건 선택, 서브 메뉴)이 적용이 되어 있어 그냥 보이지 않도록 덮어버림
// 초반부터 생각을 하고 라우팅을 짰어야 했는데 일단 급한대로 해결
