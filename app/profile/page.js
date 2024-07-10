"use client";
import { useState } from "react";

export default function Profile() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleClick = (index) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-[5vh] gap-[3vh]">
      <div className="flex flex-col w-[90vw] p-[1vw] rounded-md shadow-md bg-white">
        <div className="flex justify-between items-center mb-[1vh]">
          <div className="text-2xl pl-[1vw]">자기소개서, 이력서</div>
          <button className="text-sm bg-[#4b58a5] w-16 h-8 rounded text-white">
            Add
          </button>
        </div>
        <div className="flex flex-col">
          {[
            "현대중공업 2024 상반기 지원",
            "현대중공업 2024 상반기 지원",
            "현대중공업 2024 상반기 지원",
          ].map((company, index) => (
            <div key={index} className="flex flex-col">
              <div
                className={`flex h-[6vh] rounded-md p-2 items-center ${
                  index % 2 === 0 ? "bg-white" : "bg-[#f2f5fa]"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex gap-2">
                    <button onClick={() => toggleClick(index)}>
                      {openIndexes.includes(index) ? "▼" : "▶"}
                    </button>
                    <div>{company}</div>
                  </div>
                </div>
              </div>
              {openIndexes.includes(index) && (
                <div className="p-4">자기소개 내용{index + 1}</div>
              )}
            </div>
          ))}
        </div>
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
        <div className="flex p-[0.8vw] bg-white justify-between">
          <div className="flex w-[30vw] justify-around">
            <div className="flex justify-center w-[10vw]">TOEIC</div>
            <div className="flex justify-center w-[10vw]">2024.07.04</div>
            <div className="flex justify-center w-[10vw]">2025.07.04</div>
          </div>
          <div className="flex">
            <div className="flex justify-center w-[10vw]">abcdeffdksfl11</div>
            <button className="flex justify-center w-[7vw] mr-12 cursor-pointer">
              복사하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
