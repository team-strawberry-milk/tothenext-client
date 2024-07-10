import { useState } from "react";

export default function SelfIntoduction() {
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
    <div className="flex flex-col">
      {[
        "현대중공업 2024 상반기 지원",
        "현대중공업 2024 상반기 지원",
        "현대중공업 2024 상반기 지원",
      ].map((company, index) => (
        <div
          key={index}
          className={`flex flex-col rounded-md p-2 ${
            index % 2 === 0 ? "bg-white" : "bg-[#f2f5fa]"
          }`}
        >
          <div
            className={`flex h-20  rounded-md p-2 items-center ${
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
  );
}
