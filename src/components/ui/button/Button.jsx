export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
}
