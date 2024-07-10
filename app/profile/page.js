"use client";
import CheckInformation from "@/components/common/CheckInformation";
import SelfIntoduction from "@/components/common/SelfIntroduction";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20 gap-12">
      <div className="flex flex-col  w-11/12 p-4 rounded-md shadow-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl pl-4">자기소개서, 이력서</div>
          <button className="text-sm bg-[#4b58a5] w-16 h-8 rounded text-white">
            Add
          </button>
        </div>
        <SelfIntoduction />
      </div>
      <div className="flex flex-col  w-11/12 pt-4  rounded-md shadow-md bg-white">
        <div className="text-2xl pl-8">스펙 정보 확인</div>
        <div className="flex p-3.5 border-t border-[#eeeeef] justify-between">
          <div className="flex w-1/3 justify-around">
            <div className="flex justify-center w-1/3">종류</div>
            <div className="flex justify-center w-1/3">발급일</div>
            <div className="flex justify-center w-1/3">만료일</div>
          </div>
          <div className="flex w-1/6">
            <div className="flex justify-center w-1/4">일련번호</div>
            <div className="flex justify-center w-1/6 mr-12" />
          </div>
        </div>
        <CheckInformation />
      </div>
    </div>
  );
}
