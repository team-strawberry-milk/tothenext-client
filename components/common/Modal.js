import ReactModal from "react-modal";

export const Modal = ({ isOpen, onRequestClose, errorMessage }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <p>{errorMessage}</p>
            <div className="flex justify-center">
                <button
                    onClick={onRequestClose}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    닫기
                </button>
            </div>
        </ReactModal>
    );
};
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
};
