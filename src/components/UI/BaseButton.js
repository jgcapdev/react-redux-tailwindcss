const BaseButton = ({ title, primary = true, handleClick = null }) => {
  if (primary) {
    return (
      <button
        onClick={handleClick}
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out last:ml-2"
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        type="button"
        className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out last:ml-2"
      >
        {title}
      </button>
    );
  }
};

export default BaseButton;
