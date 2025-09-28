const Header: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{children}</h1>
        <button
          onClick={onClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Click Me
        </button>
      </div>
    </header>
  );
};

export default Header;