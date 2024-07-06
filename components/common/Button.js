export default function Button({ text, onClick }) {
    
  return (
    <div className="flex flex-wrap items-center -m-3">
      <div className="w-auto p-3">
        <a
          href="#"
          className="inline-flex justify-center text-center px-4 py-3 font-medium text-white bg-primary-blue hover:bg-second-blue hover:text-white rounded-lg"
          onClick={onClick}
        >
          <span className="inline-flex items-center">{text}</span>
        </a>
      </div>
    </div>
  );
}
