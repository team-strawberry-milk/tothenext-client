export default function TextInput({
  label,
  type,
  placeholder,
  value,
  setValue,
}) {
  return (
    <div className="w-full p-3">
      <label className="mb-2 inline-block text-xs text-gray-300 font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className="flex px-4 py-2.5 w-full font-medium bg-white hover:bg-gray-50 disabled:bg-gray-100 placeholder-gray-500 disabled:placeholder-gray-300 outline-none hover:placeholder-gray-600 active:ring-1 active:ring-lightgrey-600 active:ring-opacity-40 border border-gray-200 disabled:border-none rounded-md shadow-shadow-gray-100 active:shadow-none disabled:shadow-none disabled:pointer-events-none transition duration-200"
      />
    </div>
  );
}
