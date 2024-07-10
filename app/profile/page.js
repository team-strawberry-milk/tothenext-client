"use client";
import CheckInformation from "@/components/common/CheckInformation";
import SelfIntoduction from "@/components/common/SelfIntroduction";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-[5vh] gap-[3vh]">
      <div className="flex flex-col w-[90vw] p-[1vw] rounded-md shadow-md bg-white">
        <div className="flex justify-between items-center mb-[1vh]">
          <div className="text-2xl pl-[1vw]">자기소개서, 이력서</div>
          <button className="text-sm bg-[#4b58a5] w-16 h-8 rounded text-white">
            Add
          </button>
        </div>
        <SelfIntoduction />
      </div>
      <div className="flex flex-col w-[90vw] pt-[1vw] rounded-md shadow-md bg-white">
        <div className="text-2xl pl-[2vw]">스펙 정보 확인</div>
        <div className="flex p-[0.8vw] border-t border-[#eeeeef] justify-between">
          <div className="flex w-[30vw] justify-around">
            <div className="flex justify-center w-[10vw]">종류</div>
            <div className="flex justify-center w-[10vw]">발급일</div>
            <div className="flex justify-center w-[10vw]">만료일</div>
          </div>
          <div className="flex">
            <div className="flex justify-center w-[10vw]">일련번호</div>
            <div className="flex justify-center w-[7vw] mr-12" />
          </div>
        </div>
        <CheckInformation />
      </div>
    </div>
  );
}
