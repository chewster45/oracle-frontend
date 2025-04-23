export default function TabsTrigger({ children, value }) {
  return (
    <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
      {children}
    </button>
  );
}
