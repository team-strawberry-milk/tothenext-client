export default function AuthButton({ image, text, onClick }) {
    return (
        <div className="w-full">
            <div className="mb-4">
                <button
                    onClick={onClick}
                    className="flex justify-center w-full text-center px-4 py-3 font-medium text-gray-900 bg-white hover:bg-gray-50 focus:bg-gray-50 rounded-md border border-gray-200 shadow-shadow-gray-300 focus:shadow-none transition duration-200"
                >
                    <span className="flex justify-center items-center">
                        <img className="mr-3" src={image} alt="Sign in icon" />
                        {text}
                    </span>
                </button>
            </div>
        </div>
    );
}
