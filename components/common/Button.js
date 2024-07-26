export default function Button({ text, onClick }) {
    return (
        <div className="w-full">
            <div className="mb-4">
                <button
                    onClick={onClick}
                    className="flex justify-center w-full text-center px-4 py-3 font-medium text-white bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 rounded-md shadow-shadow-gray-900 focus:shadow-none transition duration-200"
                >
                    <span className="inline-flex items-center">{text}</span>
                </button>
            </div>
        </div>
    );
}
