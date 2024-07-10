export default function CheckInformation() {
  const num = 1;
  return (
    <div
      className={`flex p-[0.8vw] justify-between ${
        num % 2 === 0 ? "bg-white" : "bg-[#f2f5fa]"
      }`}
    >
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
  );
}
