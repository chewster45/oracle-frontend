export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      className="w-full border border-gray-300 rounded p-2"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
