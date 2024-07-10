export default function CheckInformation() {
  const num = 1;
  return (
    <div
      className={`flex p-3.5 justify-between ${
        num % 2 === 0 ? "bg-white" : "bg-[#f2f5fa]"
      }`}
    >
      <div className="flex w-1/3 justify-around">
        <div className="flex justify-center w-1/3">TOEIC</div>
        <div className="flex justify-center w-1/3">2024.07.04</div>
        <div className="flex justify-center w-1/3">2025.07.04</div>
      </div>
      <div className="flex w-1/6">
        <div className="flex justify-center w-1/4">abcdeffdksfl11</div>
        <button className="flex justify-center w-4/5 cursor-pointer">
          복사하기
        </button>
      </div>
    </div>
  );
}
